function hide (el) {
  el.style.display = 'none'
}

function show (el, display = 'block') {
  el.style.display = display
}

function hideVisibility (el) {
  el.style.visibility = 'hidden'
}

function showVisibility (el) {
  el.style.visibility = 'visible'
}

function hideElements () {
  [
    '.col-content > .tsd-panel',
    '.container-main .col-menu.menu-highlight',
    '.tsd-page-title',
    '.tsd-page-toolbar',
    '.tsd-index-group',
    '.tsd-hierarchy'
  ].forEach(selector => {
    const els = document.querySelectorAll(selector)
    if (!els) return
    Array.from(els).forEach(it => {
      hide(it)
    })
  })

  const commentEl = document.querySelector('.tsd-comment')
  commentEl.style.display = 'none'

  const panelThs = document.querySelectorAll('.tsd-panel-group > h2')
  panelThs.forEach(it => {
    it.style.display = 'none'
  })

  const footerEl = document.querySelector('footer')
  footerEl.style.display = 'none'

  const genEl = document.querySelector('.tsd-generator')
  genEl.style.display = 'none'

  // region hide all-of-other panels
  const hashId = window.location.hash.replace('#', '')
  if (!hashId) {
    return
  }

  let targetSize = {}

  const memberEls = document.querySelectorAll('.tsd-member')
  memberEls.forEach(it => {
    const anchorEl = it.children.item(0)
    if (!anchorEl || anchorEl.tagName?.toLowerCase() !== 'a') {
      console.error('[Error anchorEl]', it)
      return
    }

    const memberKey = anchorEl.id.toLowerCase()

    if (memberKey !== hashId.toLowerCase()) {
      it.style.display = 'none'
    } else {
      it.style.position = 'fixed'
      it.style.left = '0px'
      it.style.top = '0px'
      it.style.width = '100%'
      it.style.zIndex = 999
      it.style.marginTop = '0px'

      // hide tsd-parameters
      ;[it.querySelector('.tsd-parameters'),
        it.querySelector('.tsd-parameters-title'),
        it.querySelector('.tsd-returns-title'),
        it.querySelector('.tsd-type-parameters-title'),
        it.querySelector('.tsd-type-parameters')
      ].forEach(it => it && hide(it))

      // apply size of body
      const { height } = it.getBoundingClientRect()
      Object.assign(
        document.body.style,
        {
          height: height + 'px',
          overflow: 'hidden',
          background: 'transparent'
        }
      )

      // apply link top open in new panel
      it.querySelectorAll('a').forEach(link => {
        if (!link.href) return
        link.setAttribute('target', '_blank')
      })

      targetSize.height = height
    }
  })
  // endregion

  return targetSize
}

function adjustElements () {
  const panels = document.querySelectorAll('.tsd-panel')

  Array.from(panels).forEach(it => {
    it.style.boxShadow = 'none'
    it.style.background = 'transparent'
  })

  const main = document.querySelector('.container-main .col-content')
  main.style.width = 'auto'
}

// entry
(function () {
  if (top !== this) {
    hideVisibility(document.documentElement)

    window.onmessage = (e) => {
      if (e?.data === 'ready') {

        const targetSize = hideElements()
        adjustElements()

        top.postMessage(JSON.stringify({
          type: 'size',
          payload: targetSize
        }), '*')

        setTimeout(() => {
          showVisibility(document.documentElement)
        }, 50)
      }
    }
  }
}())