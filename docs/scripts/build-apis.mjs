import * as fs from 'fs'
import * as path from 'path'
import mustache from 'mustache'

const ROOT = path.resolve('..')
const PAGES_ROOT = path.resolve('../pages')
const LS_ROOT = path.join(PAGES_ROOT, 'logseq')
const API_FILE = path.resolve('../../out.json')
const TEMPLATE_PAGE = path.join(PAGES_ROOT, '_page.tpl')

const apisData = JSON.parse(fs.readFileSync(API_FILE).toString())
const pageTemplateContent = fs.readFileSync(TEMPLATE_PAGE).toString()

const apiMaps = {
  'ILSPluginUser': {},
  'IAppProxy': {},
  'IEditorProxy': {},
  'IDBProxy': {},
  'IGitProxy': {},
  'IUIProxy': {},
  'IAssetsProxy': {},

  'FileStorage': {}
}

function getNsKey (name) {
  if (name?.includes('Proxy')) {
    return name.substring(1).replace('Proxy', '')
  } else {
    return name
  }
}

function shouldIgnoreItem (name) {
  return name &&
    (name.startsWith('_') ||
      ['Editor', 'DB', 'Git', 'App', 'UI', 'Assets', 'Request', 'caller',
        'FileStorage', 'Experiments',
        'emit', 'on', 'off', 'once', 'listeners', 'listenerCount',
        'eventNames', 'addListener', 'removeListener', 'removeAllListeners'
      ].some(it => {
        return name.toLowerCase() === it.toLowerCase()
      }))
}

function inflateApiMaps () {
  const nodes = apisData.children
  const apiKeys = Object.keys(apiMaps)

  nodes.forEach(it => {
    const name = it.name
    if (!name || !apiKeys.includes(name)) return
    it.children.forEach(it => {
      apiMaps[name][it.name] = it
    })
  })

  return apiMaps
}

function pickItemComment (item) {
  if (!item) return ''
  const ret = [item.comment?.shortText]

  if (item.signatures?.length) {
    item.signatures.forEach(it => {
      if (it.comment?.shortText) {
        ret.push(item.comment?.shortText)
      }
    })
  }

  return ret.join('\n')
}

/**
 * build pages
 */
function build () {
  inflateApiMaps()

  const rootKey = 'ILSPluginUser'

  if (!fs.existsSync(PAGES_ROOT)) {
    fs.mkdirSync(PAGES_ROOT)
  }

  // region build navigate data
  const navigateData = Object.entries(apiMaps)
    .reduce((acc, [name, v]) => {
      const ns = (rootKey === name) ? 'logseq' : getNsKey(name)
      const values = Object.entries(v)
        .reduce((acc, [k, p]) => {
          if (!shouldIgnoreItem(k)) {
            acc.push([k, p.kindString])
          }
          return acc
        }, [])
        // .filter(name => !shouldIgnoreItem(name))
      acc[ns] = values
      return acc
    }, {})

  const fileDest = path.join(ROOT, 'components', 'Sidebar.json')
  const fileContent = JSON.stringify(navigateData, null, 2)
  fs.writeFileSync(fileDest, fileContent)
  // endregion

  Object.entries(apiMaps).forEach(([k, v]) => {
    let ns = ''
    const nsDest = path.join(
      PAGES_ROOT, 'logseq',
      (ns = (rootKey === k) ? '.' : getNsKey(k))
    )

    if (!fs.existsSync(nsDest)) {
      fs.mkdirSync(nsDest)
    }

    let count = 0

    Object.entries(v).forEach(([name, item]) => {
      if (shouldIgnoreItem(name)) {
        return
      }

      const fileDest = path.join(nsDest, `${name}.tsx`)
      const comment = pickItemComment(item)
      const data = { ns, name, comment }
      const fileContent = mustache.render(pageTemplateContent, data)

      fs.writeFileSync(fileDest, fileContent)
      count += 1
    })

    console.log(`===== ${path.basename(nsDest)} :generate ${count} pages =====`)
  })
}

// console.log(
//   // mustache.render(
//   //   pageTemplateContent,
//   //   { name: 'ProvideUI' }
//   // ),
//   // apisData
//   // inflateApiMaps()
// )

build()
