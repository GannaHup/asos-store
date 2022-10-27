

import React from 'react'

// Common
import FilterIcon from './common/icon_filter'
import SearchIcon from './common/icon_search'

const iconTypes: any = {
  filter: FilterIcon,
  search: SearchIcon
}

interface Props {
  name: string
  width?: number
  height?: number
  color?: string
  path?: string
  index?: number
}

const Icon = (props: Props): any => {
  const name = props.name
  const Icon = iconTypes[name]

  if (name && iconTypes[name]) {
    return <Icon {...props} color={props.color} />
  } else {
    return ''
  }
}

export default Icon
