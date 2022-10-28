import React from "react"
import { ButtonProps } from "@/types/components/Button.type"
import './style.scss'

const Button = (props: ButtonProps) => {
  const { text, onClick } = props

  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'OKE'
}

export default Button
