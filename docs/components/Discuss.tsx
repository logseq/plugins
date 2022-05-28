import useScript from '../helpers/useScript'
import { useEffect } from 'react'

export function Discuss (
  props: { ns: string, name: string }
) {

  const status = useScript(
    'https://utteranc.es/client.js',
    {
      'repo': 'xyhp915/plugins',
      'issue-term': `🧩 ${props.ns === '.' ? 'logseq' : `logseq.${props.ns}`}.${props.name}`,
      'theme': `preferred-color-scheme`,
      'crossorigin': 'anonymous'
    }, '#discuss-container')

  useEffect(() => {
    console.debug('===>', status)
  }, [status])

  return (
    <div id="discuss-container">
    </div>
  )
}