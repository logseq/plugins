import * as fs from 'fs'
import * as path from 'path'
import mustache from 'mustache'

const ROOT = path.resolve('..')
const PAGES_ROOT = path.resolve('../pages')
const LS_ROOT = path.join(PAGES_ROOT, 'logseq')
const API_FILE = path.resolve('../../apis/out.json')
const TEMPLATE_PAGE = path.join(PAGES_ROOT, '_page.tpl')
const TEMPLATE_SIDEBAR = path.join(PAGES_ROOT, '_sidebar.tpl')

const apisData = JSON.parse(fs.readFileSync(API_FILE).toString())
const pageTemplateContent = fs.readFileSync(TEMPLATE_PAGE).toString()
const sidebarTemplateContent = fs.readFileSync(TEMPLATE_SIDEBAR).toString()

const apiMaps = {
  'ILSPluginUser': {},
  'IAppProxy': {},
  'IEditorProxy': {},
  'IDBProxy': {},
  'IGitProxy': {},
  'IUIProxy': {},
  'IAssetsProxy': {}
}

function getNsKey (name) {
  return name.substring(1).replace('Proxy', '')
}

function shouldIgnoreItem (name) {
  return name &&
    (name.startsWith('_') ||
      ['Editor', 'DB', 'Git', 'App', 'UI', 'Assets',
        'emit', 'on', 'off', 'once'].some(it => {
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
      acc[ns] = Object.keys(v).filter(name => !shouldIgnoreItem(name))
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
