export function LogseqLogo (props: {
  color: string,
  [key: string]: string
}) {
  return (
    <svg viewBox="0 0 195 183"
         version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
    >
      <g id="Page-1"
         stroke="none"
         stroke-width="1"
         fill={props.color}
      >
        <g transform="translate(-158.000000, -224.000000)"
           fill={props.color}
        >
          <g id="Group" transform="translate(158.000000, 224.000000)">
            <ellipse transform="translate(110.659272, 22.925413) rotate(-3.979972) translate(-110.659272, -22.925413)"
                     cx="110.659272" cy="22.925413" rx="28.3722" ry="17.8866075"></ellipse>
            <ellipse transform="translate(38.043962, 36.796097) rotate(120.984959) translate(-38.043962, -36.796097)"
                     cx="38.0439618" cy="36.7960966" rx="25.4500205" ry="29.0935349"></ellipse>
            <ellipse transform="translate(116.569592, 115.861268) rotate(13.618922) translate(-116.569592, -115.861268)"
                     cx="116.569592" cy="115.861268" rx="67.0920027" ry="52.8263438"></ellipse>
          </g>
        </g>
      </g>
    </svg>
  )
}

type ISpriteIconProps = { x: number, y: number, className: string } & Record<any, any>

export function SpriteIcon (
  props: ISpriteIconProps
) {
  const { x, y, className, ...rest } = props

  return (
    <span className={'lsp-sprite-icon ' + (className || '')}
          style={{ backgroundPosition: `${x}px ${y}px` }}
          {...rest}></span>
  )
}

export function SpriteIconProperty () {
  return (<SpriteIcon x={-204} y={0} className={'ml-1'}/>)
}

export function SpriteIconMethod () {
  return (<SpriteIcon x={-204} y={-68} className={'ml-1'}/>)
}

export function SpriteIconInterface (props: any) {
  return (<SpriteIcon x={0} y={-68} {...props}/>)
}