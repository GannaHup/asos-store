import React from "react"
import Image from "next/image"
import AsosLogo from '@/assets/images/asos-logo.png'
import Icon from "@/assets/icons"
import TextInput from "@/components/atoms/TextInput/TextInput"
import { NavbarProps } from "@/types/components/Navbar.type"
import './style.scss'
import { useRouter } from "next/router"

const Navbar = (props: NavbarProps) => {
  const { value, placeholder, onInput, onSearch, onFilter } = props
  const router = useRouter()

  const onChangeInput = (value: string | number) => {
    if (onInput) onInput(value);
  }

  const onKeyDownInput = () => {
    if (onSearch) onSearch()
  }

  const onClickFilter = () => {
    onFilter()
  }

  return (
    <div className="navbar">
      <div className="logo" onClick={() => router.push('/')}>
        <Image
          src={AsosLogo}
          alt="Picture of the author"
          width={130}
        />
      </div>
      <div className="section-search">
        <div className="wrapper-search-input">
          <TextInput
            value={value}
            canEnter={true}
            placeholder={placeholder}
            customClass="search-input"
            onInput={onChangeInput}
            onKeyDown={onKeyDownInput}
          />
          <div className="icon-search" onClick={onKeyDownInput}>
            <Icon name="search" />
          </div>
        </div>
        <div className="filter-button" onClick={onClickFilter}>
          <Icon name="filter" color="white" width={30} height={30} />
          <span>Filter</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
