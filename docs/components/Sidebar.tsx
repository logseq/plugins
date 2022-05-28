import Link from 'next/link'
import sidebarData from './Sidebar.json'
import { ChevronDownIcon, ChevronLeftIcon, SearchIcon } from '@primer/octicons-react'
import { useLocalStorage } from '../helpers/useLocalStorage'
import { Dialog } from '@primer/react/lib-esm/Dialog/Dialog'
import { Box, FilterList, TextInput } from '@primer/react'
import { useEffect, useRef, useState } from 'react'
import { LogseqLogo, SpriteIconInterface, SpriteIconMethod, SpriteIconProperty } from '@/components/Icons'
import Fuse from 'fuse.js'
import { useRouter } from 'next/router'

let fuseInstance: any = null

export function ItemLabel (props: { name: string, kind: string }) {
  const { name, kind } = props
  const isStartOnProperty = name?.startsWith('on')
  const isProperty = (kind === 'Property') && !isStartOnProperty
  const isMethod = (kind === 'Method') || isStartOnProperty

  return (
    <div className={'flex items-center'}>
      {isProperty ? (<SpriteIconProperty />) : (
        isMethod ? (<SpriteIconMethod/>) : null
      )}
      <span className={'pl-1'}>{name}</span>
    </div>)
}

export function SearchDialogContent (
  props: {
    closeDialog: () => void
  }
) {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const elRef = useRef<HTMLDivElement>(null)
  const [searchResult, setSearchResult] = useState({
    items: [],
    selected: 0
  })
  const goToItem = (item: { name: string, kink: string }) => {
    const paths = item.name.split('.')

    if (paths?.[0] !== 'logseq') {
      paths.unshift('logseq')
    }

    router.push('/' + paths.join('/'))
  }

  useEffect(() => {
    if (!fuseInstance) {
      fuseInstance = new Fuse(
        Object.entries(sidebarData)
          .reduce((acc: any, it) => {
            const [ns, vs] = it
            vs?.forEach(v => {
              acc.push({
                name: `${ns}.${v[0]}`,
                kind: v[1]
              })
            })
            return acc
          }, []),
        {
          includeMatches: true,
          includeScore: true,
          keys: ['name'],
          minMatchCharLength: 2,
          threshold: 0.1
        }
      )
    }
  }, [])

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

  const onSearchHandle = (value: string) => {
    value = value?.trim()

    const result = fuseInstance?.search(value)

    setSearchResult({
      items: result, selected: 0
    })
  }

  return (
    <div className="lsp-search-content"
         ref={elRef}
    >
      {/* search input*/}
      <div>
        <TextInput
          ref={inputRef}
          leadingVisual={SearchIcon}
          aria-label="Search"
          placeholder="Search"
          autoComplete="off"
          size={'large'}
          className={'block w-full p-5'}
          onChange={e => onSearchHandle(e.target.value)}
          onKeyDown={e => {
            const which = e.which
            const isDown = which === 40
            const isUp = which === 38
            const isEsc = which === 27
            const isEnter = which === 13
            const inResultingLength = +searchResult.items?.length
            const stopEvent = () => {
              e.stopPropagation()
              e.preventDefault()
            }

            if (isEsc) {
              if (inResultingLength) {
                inputRef.current!.value = ''
                setSearchResult({
                  items: [],
                  selected: 0
                })
                stopEvent()
              }

              return
            }

            if (isEnter && inResultingLength) {
              const selectedItem: any =
                searchResult.items[searchResult.selected]
              goToItem(selectedItem?.item)
              props.closeDialog()
              return
            }

            if (isDown || isUp) {
              if (inResultingLength) {
                let selected = searchResult.selected + (isDown ? 1 : -1)

                if (selected >= inResultingLength) {
                  selected = 0
                } else if (selected < 0) {
                  selected = inResultingLength - 1
                }

                setSearchResult({ ...searchResult, selected })
                stopEvent()
              }
            }
          }}
        />
      </div>

      {/* search result*/}
      {(searchResult?.items?.length > 0) && (
        <div className={'lsp-search-result-wrap'}>
          <FilterList>
            {searchResult.items.map((it, idx) => {
              const { item }: any = it
              return (
                <FilterList.Item
                  key={item.name}
                  selected={searchResult.selected === idx}
                  className={'select-none'}
                  onClick={() => {
                    goToItem(item)
                    props.closeDialog()
                  }}
                >
                  <ItemLabel name={item.name} kind={item.kind}/>
                </FilterList.Item>
              )
            })}
          </FilterList>
        </div>)}
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
      <span className={'flex items-center'}>
        <LogseqLogo
          className={'w-5 h-5 mr-10'}
          color={'#ffffff'}/>

        <span className={'opacity-90'}>
        Plugin API Docs
        </span>
      </span>

        <a className={'cursor-pointer hover:opacity-80 active:opacity-50'}
           onClick={() => setActiveSearch(true)}>
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
                <div className={'flex items-center'}>
                  <SpriteIconInterface className={'mr-1'}/>
                  <span>
                  {!isRoot && 'logseq.'}{k}
                </span>
                </div>

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
                    <dd className={`flex items-center p-1 ${global?.location?.href?.endsWith(href) ? 'active' : ''}`}
                        id={k + '-' + name}>
                      <ItemLabel name={name} kind={kind}/>
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