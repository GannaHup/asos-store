import React from "react"
import { BadgeProps } from "@/types/components/Badge.type"
import './style.scss'

const Badge = (props: BadgeProps) => {
  const { text } = props
  return (
    <div className="badge">
      <span className="text-badge">{text}</span>
    </div>
  )
}

Badge.defaultProps = {
  text: 'Badge'
}

export default Badge
