import { Box } from '@primer/react'
import { useEffect, useState } from 'react'
import { MarkGithubIcon, CopyIcon, CheckIcon, LinkExternalIcon, GearIcon, DotIcon } from '@primer/octicons-react'
import outJson from '../out.json'
import Highlight, { defaultProps } from 'prism-react-renderer'
import type { Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

type DescriptionProps = {
  ns: string
  name: string
  comment?: string // Make optional since we'll fetch from out.json
}

type TypeDocNode = {
  id: number
  name: string
  kind: number
  comment?: {
    summary?: Array<{ kind: string; text: string; code?: string }>
    blockTags?: Array<{
      tag: string
      content: Array<{ kind: string; text: string; code?: string }>
    }>
  }
  signatures?: Array<{
    name?: string
    parameters?: Array<{
      name: string
      type: any
      flags?: any
    }>
    type?: any
    comment?: {
      summary?: Array<{ kind: string; text: string; code?: string }>
      blockTags?: Array<{
        tag: string
        content: Array<{ kind: string; text: string; code?: string }>
      }>
    }
  }>
  sources?: Array<{
    fileName: string
    line: number
    url: string
  }>
  getSignature?: {
    type?: any
    comment?: {
      summary?: Array<{ kind: string; text: string; code?: string }>
      blockTags?: Array<{
        tag: string
        content: Array<{ kind: string; text: string; code?: string }>
      }>
    }
  }
  setSignature?: {
    type?: any
    parameters?: Array<{
      name: string
      type: any
    }>
  }
  type?: any
  children?: TypeDocNode[]
  flags?: any
}

// Utility functions
function findNodeByPath (ns: string, name: string): TypeDocNode | null {
  const data = outJson as any

  // Find LSPluginUser class
  const lsPluginUser = data.children?.find((child: any) => child.name === 'LSPluginUser')
  if (!lsPluginUser) return null

  // If ns is '.', look for method directly in LSPluginUser
  if (ns === '.') {
    return lsPluginUser.children?.find((child: any) => child.name === name) || null
  }

  // Otherwise, find the namespace (e.g., 'App', 'Editor')
  const nsNode = lsPluginUser.children?.find((child: any) => child.name === ns)
  if (!nsNode) return null

  // Find the method in the namespace
  const nsType = nsNode.getSignature?.type
  if (!nsType) return null

  // Find the target interface
  const targetInterface = data.children?.find((child: any) => child.id === nsType.target)
  if (!targetInterface) return null

  return targetInterface.children?.find((child: any) => child.name === name) || null
}

function formatComment (comment?: TypeDocNode['comment']): string {
  if (!comment?.summary) return ''

  return comment.summary.map(item => {
    if (item.kind === 'code') return item.code || item.text
    return item.text
  }).join('')
}

function getNodeComment (node: TypeDocNode): TypeDocNode['comment'] | undefined {
  // Try node comment first
  if (node.comment) return node.comment

  // Try signature comment
  if (node.signatures?.[0]?.comment) return node.signatures[0].comment

  // Try getSignature comment
  if (node.getSignature?.comment) return node.getSignature.comment

  return undefined
}

function getExample (comment?: TypeDocNode['comment']): string | null {
  if (!comment?.blockTags) return null

  const exampleTag = comment.blockTags.find(tag => tag.tag === '@example')
  if (!exampleTag) return null

  return exampleTag.content.map(item => {
    if (item.kind === 'code') return item.code || item.text
    return item.text
  }).join('')
}

function getNodeExample (node: TypeDocNode): string | null {
  const comment = getNodeComment(node)
  return getExample(comment)
}

function formatType (type: any): string {
  if (!type) return 'any'

  switch (type.type) {
    case 'intrinsic':
      return type.name
    case 'reference':
      return type.name
    case 'union':
      return type.types?.map((t: any) => formatType(t)).join(' | ') || 'any'
    case 'array':
      return `${formatType(type.elementType)}[]`
    case 'reflection':
      // Check if it's a function type
      if (type.declaration?.signatures?.[0]) {
        const sig = type.declaration.signatures[0]
        const params = sig.parameters?.map((p: any) => {
          return `${p.name}: ${formatType(p.type)}`
        }).join(', ') || ''
        const returnType = formatType(sig.type)
        return `(${params}) => ${returnType}`
      }
      return 'Function'
    case 'literal':
      if (typeof type.value === 'string') return `"${type.value}"`
      return String(type.value)
    case 'tuple':
      return `[${type.elements?.map((t: any) => formatType(t)).join(', ') || ''}]`
    case 'intersection':
      return type.types?.map((t: any) => formatType(t)).join(' & ') || 'any'
    case 'predicate':
      return type.name || 'boolean'
    default:
      return 'any'
  }
}

function formatSignature (node: TypeDocNode): string | null {
  const signature = node.signatures?.[0]
  if (!signature) {
    // Check if it's a getter
    if (node.getSignature) {
      const returnType = formatType(node.getSignature.type)
      return `get ${node.name}(): ${returnType}`
    }
    // Check if it's a property with type
    if (node.type) {
      const propType = formatType(node.type)
      return `${node.name}: ${propType}`
    }
    return null
  }

  const params = signature.parameters?.map(p => {
    const paramType = formatType(p.type)
    const optional = p.flags?.isOptional ? '?' : ''
    return `${p.name}${optional}: ${paramType}`
  }).join(', ') || ''

  const returnType = formatType(signature.type)
  return `${node.name}(${params}): ${returnType}`
}

// Get API type for icon display
function getApiType (node: TypeDocNode): 'method' | 'getter' | 'setter' | 'property' {
  if (node.signatures?.[0]) return 'method'
  if (node.getSignature) return 'getter'
  if (node.setSignature) return 'setter'
  return 'property'
}

// Get icon component based on API type
function getApiIcon (type: 'method' | 'getter' | 'setter' | 'property') {
  const iconProps = { size: 20, className: 'flex-shrink-0' }

  switch (type) {
    case 'method':
      return <GearIcon {...iconProps} className={`${iconProps.className} text-purple-600 dark:text-purple-400`}/>
    case 'getter':
      return <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-green-600 dark:text-green-400 font-bold text-sm">↓</span>
    case 'setter':
      return <span
          className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-sm">↑</span>
    case 'property':
      return <DotIcon {...iconProps} className={`${iconProps.className} text-blue-600 dark:text-blue-400`}/>
  }
}

// Get type label
function getApiTypeLabel (type: 'method' | 'getter' | 'setter' | 'property'): string {
  const labels = {
    method: 'Method',
    getter: 'Getter',
    setter: 'Setter',
    property: 'Property',
  }
  return labels[type]
}

export function Skeleton () {
  return (
      <div className="relative p-4 w-full rounded-lg overflow-hidden -bottom-5 bg-transparent">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
  )
}

export function DescriptionHeader (
    props: Partial<DescriptionProps>,
) {
  return (
      <Box className={'main-description-header bg-gray-800 text-gray-50 flex items-center justify-between px-3'}>
        {props.ns ?
            (
                <div className={'px-2 flex items-center'}>
                  <code>logseq</code>
                  {props.ns != '.' && (<code>.{props.ns}</code>)}
                </div>
            ) : (<span/>)}

        <div className={'flex items-center space-x-6'}>
          <a href="https://badge.fury.io/js/@logseq%2Flibs"
             target={'_blank'}
             rel="noopener noreferrer"
          >
            <img src="https://badge.fury.io/js/@logseq%2Flibs.svg"
                 alt="@logseq/libs"
                 height="18"
            /></a>

          <a href={'https://github.com/logseq/plugins'}
             target={'_blank'}
             rel="noopener noreferrer"
          >
            <MarkGithubIcon/>
          </a>
        </div>
      </Box>
  )
}

export function Description (
    props: DescriptionProps,
) {
  const [copied, setCopied] = useState(false)
  const [apiData, setApiData] = useState<TypeDocNode | null>(null)

  useEffect(() => {
    const data = findNodeByPath(props.ns, props.name)
    setApiData(data)
  }, [props.ns, props.name])

  const handleCopy = () => {
    const fullName = `logseq${props.ns !== '.' ? `.${props.ns}` : ''}.${props.name}`
    navigator.clipboard.writeText(fullName)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const nodeComment = apiData ? getNodeComment(apiData) : undefined
  const comment = props.comment || formatComment(nodeComment)
  const signature = apiData ? formatSignature(apiData) : null
  const example = apiData ? getNodeExample(apiData) : null
  const sourceUrl = apiData?.sources?.[0]?.url
  const apiType = apiData ? getApiType(apiData) : 'method'
  const apiIcon = getApiIcon(apiType)
  const apiTypeLabel = getApiTypeLabel(apiType)

  return (
      <Box className={'main-description !pt-0'}>
        {/* Method Signature */}
        <div className={'bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-6'}>
          <div className={'flex items-start justify-between gap-4'}>
            <div className={'flex-1'}>
              <div className={'flex items-center gap-3 mb-3'}>
                {apiIcon}
                <code className={'text-xl font-semibold text-blue-600 dark:text-blue-400'}>
                  logseq
                  {props.ns !== '.' && (<span>.{props.ns}</span>)}
                  .{props.name}
                </code>
                <span
                    className={'text-xs px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium'}>
                  {apiTypeLabel}
                </span>
                <button
                    onClick={handleCopy}
                    className={'p-1.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors'}
                    title="Copy to clipboard"
                >
                  {copied ? (
                      <CheckIcon className={'text-green-600 dark:text-green-400'} size={16}/>
                  ) : (
                      <CopyIcon className={'text-gray-600 dark:text-gray-400'} size={16}/>
                  )}
                </button>
              </div>

              {signature && (
                  <Highlight {...defaultProps} theme={theme} code={signature} language={'typescript' as Language}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre
                            className={`${className} text-sm px-4 py-3 rounded border border-gray-300 dark:border-gray-600 overflow-x-auto`}
                            style={style}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line, key: i })}>
                              {line.map((token, key) => (
                                  <span key={key} {...getTokenProps({ token, key })} />
                              ))}
                            </div>
                        ))}
                      </pre>
                    )}
                  </Highlight>
              )}
            </div>

            {sourceUrl && (
                <a
                    href={sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={'flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap'}
                >
                  <LinkExternalIcon size={16}/>
                  View Source
                </a>
            )}
          </div>
        </div>

        {/* Description */}
        {comment && (
            <div className={'px-6 py-4 border-b border-gray-200 dark:border-gray-700'}>
              <p className={'text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap'}>
                {comment}
              </p>
            </div>
        )}

        {/* Example */}
        {example && (
            <div className={'px-6 py-4'}>
              <h3 className={'text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 uppercase tracking-wide'}>
                Example
              </h3>
              <Highlight
                  {...defaultProps}
                  theme={theme}
                  code={example.replace(/```(ts|typescript|js|javascript)?\n?/g, '').replace(/```$/g, '').trim()}
                  language={'typescript' as Language}
              >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={`${className} p-4 rounded-lg overflow-x-auto text-sm`} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                              <span key={key} {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </div>
        )}

        {/* No data found message */}
        {!apiData && (
            <div className={'px-6 py-4 text-gray-500 dark:text-gray-400 text-sm'}>
              <p>⚠️ No documentation data found for this API. Please check the method name and namespace.</p>
            </div>
        )}
      </Box>
  )
}