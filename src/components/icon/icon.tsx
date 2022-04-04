import React from 'react'
import loadable from '@loadable/component'

import * as Fa from 'react-icons/fa'

type IconProps = {
  iconName: string
}

const CustomIcon: React.FC<IconProps> = ({ iconName }) => {
  // @ts-ignore
  const Icon = loadable(() => import(`react-icons/fa/index.js`), {
    // @ts-ignore
    resolveComponent: (el: JSX.Element) => el[iconName],
  })
  return <Icon />
}

export default CustomIcon

// type IconProps = {
//   name: string
//   color: string
//   size: string
// }

// export const Icon: React.FC<IconProps> = ({ name, color, size }) => {
//   return (
//     <svg
//       style={{ position: 'absolute' }}
//       width={size}
//       viewBox="0 0 1000 500"
//       fill={color}
//     >
//       <use href={Icons + `#${name}`} />
//     </svg>
//   )
// }
