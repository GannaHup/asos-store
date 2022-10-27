import React, { useState } from "react";
import Image from 'next/image'
import AsosLogo from '@/assets/images/asos-logo.png'
import SearchInput from "@/components/molecules/SearchInput";
import "./styles.scss";
import Icon from "@/assets/Icons";

const HomeScreen = () => {
  const [search, setSearch] = useState({
    q: ''
  })

  const onSearch = (keyword: string) => {
    setSearch(prevState => ({ ...prevState, q: keyword }))
  } 

  return (
    <div className="wrapper-home">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <Image
            src={AsosLogo}
            alt="Picture of the author"
            width={130}
          />
        </div>
        <div className="section-search">
          <SearchInput
            value={search.q}
            placeholder="Search..."
            onInput={onSearch}
          />
          <div className="filter-button">
            <Icon name="filter" color="white" width={30} height={30} />
            <span>Filter</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
