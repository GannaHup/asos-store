import React, { useEffect, useState } from "react"
import Icon from "@/assets/icons"
import { DropdownSelectProps, Options } from "@/types/components/Dropdown.type"
import './style.scss'

const DropdownSelect = (props: DropdownSelectProps) => {
  const { value, options, customClass, onSelectOption } = props
  const [showOptions, setShowOptions] = useState(false)
  const [wrapperClass, setWrapperClass] = useState('wrapper-dropdown-select')

  const onClick = () => {
    setShowOptions(prevState => !prevState)
  }

  const selectOption = (option: Options) => {
    if (onSelectOption) onSelectOption(option)
    setShowOptions(false)
  }

  useEffect(() => {
    if (customClass) {
      setWrapperClass(`wrapper-dropdown-select ${customClass}`)
    }
  }, [customClass])

  return (
    <div className={wrapperClass}>
      <div
        className={showOptions ? 'dropdown-select active' : 'dropdown-select'}
        onClick={onClick}
      >
        <span>{value.label}</span>
        <div className="chevron-dropdown-select">
          <Icon name="chevron" />
        </div>
      </div>

      {/* Options */}
      {showOptions && (
        <div className="wrapper-options">
          {options.map((option: Options, idx: number) => {
            return (
              <div
                className={option.value === value.value ? 'option active' : 'option'}
                key={idx}
                onClick={() => selectOption(option)}
              >{option.label}</div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default DropdownSelect
