import React, { useEffect, useState } from "react"
import { ButtonProps } from "@/types/components/Button.type"
import './style.scss'

const Button = (props: ButtonProps) => {
  const { customClass, text, onClick } = props
  const [wrapperClass, setWrapperClass] = useState('button')

  useEffect(() => {
    if (customClass) {
      setWrapperClass(`button ${customClass}`)
    }
  }, [customClass])

  return (
    <button className={wrapperClass} onClick={onClick}>
      {text}
    </button>
  )
}

Button.defaultProps = {
  text: 'OKE'
}

export default Button
