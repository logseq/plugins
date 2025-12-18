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
    '.col-sidebar',
    '.tsd-page-toolbar',
    'footer', '.tsd-anchor-link',
    '.col-content > .tsd-page-title',
    '.col-content > .tsd-signature',
    '.col-content > .tsd-sources',
    '.col-content > .tsd-index-group',
    '.col-content > .tsd-accordion > .tsd-accordion-summary',
  ].forEach(selector => {
    const els = document.querySelectorAll(selector)
    if (!els) return
    Array.from(els).forEach(it => {
      hide(it)
    })
  })

  // region hide all-of-other panels
  const hashId = window.location.hash.replace('#', '')
  if (!hashId) {
    return
  }

  let targetSize = {}

  const memberEls = document.querySelectorAll('.tsd-member')
  memberEls.forEach(it => {
    const anchorEl = it.querySelector('.tsd-anchor-link')
    if (!anchorEl) {
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
      ;[
        it.querySelector('.warning')?.remove(),
      ].forEach(it => it && hide(it))

      // apply size of body
      const { height } = it.getBoundingClientRect()
      Object.assign(
        document.body.style,
        {
          height: height + 'px',
          overflow: 'hidden',
          background: 'transparent',
        },
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

// entry
(function () {
  const debug = location.href.includes('lsp-debug')
  if (debug || top !== this) {
    hideVisibility(document.documentElement)

    const run = (e) => {
      try {
        const targetSize = hideElements()

        top.postMessage(JSON.stringify({
          type: 'size',
          payload: targetSize,
        }), '*')
      } catch (e) {
        console.error('LSP:', e)
      }

      setTimeout(() => {
        showVisibility(document.documentElement)
      }, 50)
    }

    document.addEventListener('DOMContentLoaded', () => {
      run()
    })
  }
}())