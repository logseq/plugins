import Link from 'next/link'
import sidebarData from './Sidebar.json'

export function Sidebar () {
  return (
    <aside className={'nav'}>
      {Object.entries(sidebarData).map(([k, v]) => {
        return (
          <dl className={'nav-item'} key={k}>
            <dt className={'p-1 hover:bg-gray-100'} id={'ns-' + k}>{k}</dt>
            {v.map(it => {
              return (
                <Link key={it} href={`/${k === 'logseq' ? '' : 'logseq/'}${k}/${it}`} scroll={false}>
                  <dd className={'p-1 hover:bg-gray-100'} id={k + '-' + it}>
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