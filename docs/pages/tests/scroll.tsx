import { useEffect, useRef, useState } from 'react'

function waitForScrollEnd () {
  let last_changed_frame = 0
  let last_x = window.scrollX
  let last_y = window.scrollY
  return new Promise((resolve, reject) => {
    function tick (frames: number) {
      // until 20 frames with
      // no change have been observed.
      if (frames - last_changed_frame > 50) {
        resolve(null)
      } else {
        if (window.scrollX != last_x || window.scrollY != last_y) {
          last_changed_frame = frames
          last_x = window.scrollX
          last_y = window.scrollY
        }
        requestAnimationFrame(tick.bind(null, frames + 1))
      }
    }

    tick(0)
  })
}

export default function Tests () {
  const waitPendingRef = useRef<any>(null)
  const [scrollFlag, setScrollFlag] = useState(0)

  const onScroll = () => {
    if (waitPendingRef.current) return

    waitPendingRef.current =
      waitForScrollEnd().finally(() => {
        setScrollFlag(scrollFlag + 1)
        waitPendingRef.current = null
      })
  }

  useEffect(() => {
    if (scrollFlag === 0) return

    console.log('[scroll end once]...')
  }, [scrollFlag])

  return (
    <div
      className={'flex-1 h-screen overflow-scroll p-10 relative'}
      onScroll={onScroll}
    >
      <button className={'fixed right-0 p-5 bg-green-600'}>
        1
      </button>
      <hr/>
      {Array.from({ length: 1000 })
        .map(it => {
          return (<p>1000</p>)
        })}
    </div>
  )
}