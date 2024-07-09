import { Icon } from '@iconify/react'
import { CSSProperties } from 'react';


interface IProps {
  name: string
  className?: string
  prefix?: string
  size?: number
  color?: string
  style?: CSSProperties
  onClick?: () => void
}

export default function SvgIcon(props: IProps) {
  const { name, className = '', prefix = 'icon', color = 'currentColor', style = {}, size = 14, onClick } = props
  const svgStyle: CSSProperties = {
    verticalAlign: 'middle',
    width: `${size}px`,
    height: `${size}px`,
    color,
    ...style,
  };
  return (
    name.includes(':')
      ? <Icon className={`overflow-hidden fill-[currentcolor] ${className}`}
        style={{ width: `${size}px`, height: `${size}px` }}
        icon={name} color={color}
        onClick={onClick} />
      : (
        <svg className={`overflow-hidden fill-[currentcolor] ${className}`}
          aria-hidden="true" style={svgStyle} onClick={onClick}>
          <use xlinkHref={`#${prefix}-${name}`} fill="currentColor" />
        </svg>
      )
  )
}
