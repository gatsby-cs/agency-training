import React from 'react'
import loadable from '@loadable/component'

import * as styles from './icon.module.scss'

type IconProps = {
  iconName: string
}

const CustomIcon: React.FC<IconProps> = ({ iconName }) => {
  // @ts-ignore
  const Icon = loadable(() => import(`react-icons/fa/index.js`), {
    // @ts-ignore
    resolveComponent: (el: JSX.Element) => el[iconName],
  })
  //@ts-ignore
  return <Icon className={styles.svg} />
}

export default CustomIcon

type SpriteIconProps = {
  iconName: string
  color?: string
  size?: string
}

export const SpriteIcon: React.FC<SpriteIconProps> = ({
  iconName,
  color,
  size,
}) => {
  return (
    <svg width="100" viewBox="0 0 1000 500" fill={color}>
      <use href={'/sprite.svg' + `#${iconName}`} />
    </svg>
  )
}
