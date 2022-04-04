import React from 'react'
import { SpriteIcon } from '../components/icon/icon'
import { iconList } from './svg-import'

function uncamelize(str: string, separator: string) {
  // Assume default separator is a single space.
  if (typeof separator == 'undefined') {
    separator = ' '
  }
  // Replace all capital letters by separator followed by lowercase one
  var str = str.replace(/[A-Z]/g, function (letter) {
    return separator + letter.toLowerCase()
  })
  // Remove first separator
  str = str.replace('/^' + separator + '/', '')
  return str.substring(4)
}

function SvgSprite() {
  return (
    <h3>
      {iconList.map((iconName) => {
        return (
          <SpriteIcon
            key={iconName}
            iconName={`${uncamelize(iconName, '-')}`}
          />
        )
      })}
    </h3>
  )
}

export default SvgSprite
