

import React from 'react'

// Common
import ChevronIcon from './common/icon_chevron'
import FilterIcon from './common/icon_filter'
import LoadingBubbleIcon from './common/icon_loading_bubble'
import SearchIcon from './common/icon_search'
import TagIcon from './common/icon_tag'

const iconTypes: any = {
  chevron: ChevronIcon,
  filter: FilterIcon,
  'loading-bubble': LoadingBubbleIcon,
  search: SearchIcon,
  tag: TagIcon
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
