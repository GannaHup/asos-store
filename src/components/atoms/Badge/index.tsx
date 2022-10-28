import React from "react"
import './style.scss'

const Badge = (props: any) => {
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
