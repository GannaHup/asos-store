import React, { useEffect, useState } from "react"
import { BadgeProps } from "@/types/components/Badge.type"
import './style.scss'

const Badge = (props: BadgeProps) => {
  const { text, textClass } = props
  const [customClass, setCustomClass] = useState('text-badge')

  useEffect(() => {
    if (textClass) {
      setCustomClass(`text-badge ${textClass}`)
    }
  }, [textClass])

  return (
    <div className="badge">
      <span className={customClass}>{text}</span>
    </div>
  )
}

Badge.defaultProps = {
  text: 'Badge'
}

export default Badge
