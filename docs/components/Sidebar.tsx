import Link from 'next/link'
import sidebarData from './Sidebar.json'

export function Sidebar () {
  return (
    <aside className={'nav'}>
      {Object.entries(sidebarData).map(([k, v]) => {
        const isRoot = (k === 'logseq')
        return (
          <dl className={'nav-item'} key={k}>
            <dt className={'py-1 px-2'} id={'ns-' + k}>{!isRoot && 'logseq.'}{k}</dt>
            {v.map(it => {
              const href = `/${ isRoot ? '' : 'logseq/'}${k}/${it}`
              return (
                <Link key={it} href={href} scroll={false}>
                  <dd className={`p-1 ${global?.location?.href?.endsWith(href) ? 'active' : ''}`}
                      id={k + '-' + it}>
                  <span className={'pl-2'}>
                    {it}
                  </span>
                  </dd>
                </Link>)
            })}
          </dl>
        )
      })}
    </aside>
  )
}