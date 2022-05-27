import Link from 'next/link'
import sidebarData from './Sidebar.json'
import { ChevronDownIcon, ChevronLeftIcon, SearchIcon } from '@primer/octicons-react'
import { useLocalStorage } from '../helpers/useLocalStorage'
import { Dialog } from '@primer/react/lib-esm/Dialog/Dialog'
import { Box, TextInput } from '@primer/react'
import { useEffect, useRef, useState } from 'react'

export function SearchDialogContent (
  props: {
    closeDialog: () => void
  }
) {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dialogEl = elRef.current?.closest('div[role=dialog]')
    dialogEl?.classList.add('lsp-search-dialog')
    const dialogElWrap = dialogEl?.parentElement
    dialogElWrap?.classList.add('lsp-search-dialog-wrap')

    dialogElWrap?.addEventListener('click', (e) => {
      const target = e.target
      if (target === dialogElWrap) {
        props.closeDialog()
      }
    })
  }, [])

  return (
    <div className="lsp-search-content"
         ref={elRef}
    >
      <TextInput
        leadingVisual={SearchIcon}
        aria-label="Search"
        placeholder="Search"
        autoComplete="off"
        size={'large'}
        className={'block w-full p-5'}
      />
    </div>
  )
}

export function SearchDialog (
  props: {
    visible: boolean,
    closeDialog: () => void
  }
) {

  return (
    <>
      {props.visible &&
        (<Dialog
          title="Dialog example"
          renderHeader={() => <></>}
          renderBody={() => <SearchDialogContent {...props}/>}
          onClose={props.closeDialog}
        >
          <Box fontFamily="sans-serif">Some content</Box>
        </Dialog>)
      }
    </>
  )
}

export function SidebarHeader () {
  const [activeSearch, setActiveSearch] = useState(false)

  // shortcuts
  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      const isCmd = e.metaKey || e.ctrlKey
      const which = e.which

      // skip active
      if (document.activeElement?.nodeName.toLowerCase() === 'input') {
        return
      }

      if (which === 191 || (isCmd && (which === 75))) { // slash || cmd + k
        setActiveSearch(true)
        e.preventDefault()
      }
    }

    document.addEventListener('keydown', keyboardHandler)

    return () => {
      document.removeEventListener('keydown', keyboardHandler)
    }
  }, [])

  return (
    <>
      <Box className={'nav-sidebar-header bg-gray-800/90 text-gray-50 flex items-center justify-between px-3'}>
      <span>
        <a href="https://badge.fury.io/js/@logseq%2Flibs"
           target={'_blank'}
        >
          <img src="https://badge.fury.io/js/@logseq%2Flibs.svg"
               alt="@logseq/libs"
               height="18"
          /></a>
      </span>

        <a onClick={() => setActiveSearch(true)}>
          <SearchIcon/>
        </a>
      </Box>

      <SearchDialog
        visible={activeSearch}
        closeDialog={() => setActiveSearch(false)}/>
    </>
  )
}

export function Sidebar () {
  const activeCacheKey = 'lsp-navs-active-state'
  const [itemActiveState, setItemActiveState] = useLocalStorage(
    activeCacheKey, {}
  )

  const toggleItemActive = (key: string) => {
    setItemActiveState(
      Object.assign({}, itemActiveState, {
        [key]: !itemActiveState[key]
      })
    )
  }

  return (
    <Box className={'nav-sidebar-container h-screen flex flex-col'}>
      <SidebarHeader/>

      <Box className={'nav-sidebar-content flex-1'}>
        {Object.entries(sidebarData).map(([k, v]) => {
          const isRoot = (k === 'logseq')
          return (
            <dl className={'nav-item'} key={k}>
              <dt className={'py-1 px-2 flex justify-between items-center active:opacity-80'}
                  id={'ns-' + k}
                  onClick={() => toggleItemActive(k)}
              >
              <span>
                {!isRoot && 'logseq.'}{k}
              </span>

                {itemActiveState[k] ?
                  <ChevronDownIcon/> :
                  <ChevronLeftIcon/>
                }
              </dt>

              {/* Sub items */}
              {itemActiveState[k] && v.map(([name, kind]) => {
                const href = `/${isRoot ? '' : 'logseq/'}${k}/${name}`
                return (
                  <Link key={name} href={href} scroll={false}>
                    <dd className={`p-1 ${global?.location?.href?.endsWith(href) ? 'active' : ''}`}
                        id={k + '-' + name}>
                  <span className={'pl-2'}>
                    {name} ({kind})
                  </span>
                    </dd>
                  </Link>)
              })}
            </dl>
          )
        })}
      </Box>
    </Box>
  )
}