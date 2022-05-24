const sidebarData = {{&navigateData}}

export function Sidebar () {
  return (
    <aside className={'nav'}>
      {Object.entries(sidebarData).map(([k, v]) => {
        return (
          <dl className={'nav-item'}>
            <dt className={'hover:bg-gray-100'}>{k}</dt>
            {v.map(it => {
              return (
                <dd className={'hover:bg-gray-100'}>
                  <span className={'pl-2'}>
                    {it}
                  </span>
                </dd>)
            })}
          </dl>
        )
      })}
    </aside>
  )
}