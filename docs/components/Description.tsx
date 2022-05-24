import { useEffect, useRef } from 'react'
import { lspApisEndpoint } from '../helpers/env'

type DescriptionProps = {
  ns: string,
  name: string,
  comment: string
}

export function Description (
  props: DescriptionProps
) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const readyRef = useRef(false)

  useEffect(() => {
    setTimeout(() => {
      if (readyRef.current) return
      iframeRef.current?.contentWindow?.postMessage('ready', '*')
      readyRef.current = true
    }, 100)

    iframeRef.current?.addEventListener('load', (e) => {
      iframeRef.current?.contentWindow?.postMessage('ready', '*')
      readyRef.current = true
    }, {
      once: true
    })

    const sizeHandler = (e: any) => {
      let data = e.data
      if (typeof data !== 'string') return

      try {
        data = JSON.parse(data)
        if (data?.type !== 'size') return
        const height = data.payload?.height
        if (!height) return
        iframeRef.current!.style.height = height + 'px'
      } catch (e) {
        console.log(e)
      }
    }

    window.addEventListener('message', sizeHandler)

    return () => {
      window.removeEventListener('message', sizeHandler)
    }
  }, [iframeRef.current])

  const entryHtml = props.ns === '.' ?
    'ILSPluginUser' : `I${props.ns}Proxy`
  return (
    <div>
      <div className={'p-4'}>
        <code>logseq</code>
        {props.ns != '.' && (<code>.{props.ns}</code>)}
      </div>

      <iframe
        ref={iframeRef}
        className={'w-full min-h-fit px-5'}
        style={{ colorScheme: 'light' }}
        src={`${lspApisEndpoint}/${entryHtml}.html#${props.name}`}></iframe>
    </div>
  )
}