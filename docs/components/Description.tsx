import { Box } from '@primer/react'
import { useEffect, useRef, useState } from 'react'
import { lspApisEndpoint } from '../helpers/env'
import { LogoGithubIcon } from '@primer/octicons-react'
import { LogseqLogo } from '@/components/Icons'
import Link from 'next/link'

type DescriptionProps = {
  ns: string,
  name: string,
  comment: string
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
  props: Partial<DescriptionProps>
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
        <Link href="https://badge.fury.io/js/@logseq%2Flibs"
           target={'_blank'}
           className={'opacity-80'}
        >
          <img src="https://badge.fury.io/js/@logseq%2Flibs.svg"
               alt="@logseq/libs"
               height="18"
          /></Link>

        <a href={''}>
          <LogoGithubIcon/>
        </a>
      </div>
    </Box>
  )
}

export function Description (
  props: DescriptionProps
) {
  const [loaded, setLoaded] = useState(false)
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
        iframeRef.current!.style.visibility = 'visible'
        setLoaded(true)
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
    <Box className={'main-description mx-8'}
         borderBottomColor={'border.default'}
    >
      <Box className={'rounded-xl'}>
        {!loaded && <Skeleton/>}

        <iframe
          ref={iframeRef}
          className={'w-full min-h-fit'}
          style={{ colorScheme: 'light' }}
          src={`${lspApisEndpoint}/${entryHtml}.html#${props.name}`}></iframe>
      </Box>
    </Box>
  )
}