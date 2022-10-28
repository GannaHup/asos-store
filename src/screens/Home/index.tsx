import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "@/components/molecules/Navbar";
import FilterSearch from "@/components/molecules/FilterSearch";
import { Options } from "@/types/components/Dropdown.type"
import { OPTIONS_SORT_PRODUCT } from "@/constants/product";
import IllShopping from '@/assets/svg/ill_shopping.svg'
import AsosLogo from '@/assets/images/asos-simple-logo.png'
import { serializeQuery } from "@/utils/serializeQuery";
import "./style.scss";

const HomeScreen = () => {
  const router = useRouter();
  const [filter, setSearch] = useState({
    q: '',
    store: 'US',
    priceMin: 0,
    priceMax: 1000,
    sort: OPTIONS_SORT_PRODUCT[0]
  })
  const [showFilter, setShowFilter] = useState(false)

  const onSearch = (keyword: string | number) => {
    setSearch(prevState => ({ ...prevState, q: (keyword as string) }))
  }

  const onChangeInput = (value: string | number, key: string) => {
    setSearch(prevState => ({ ...prevState, [key]: value }))
  }

  const onToggleFilter = () => {
    setShowFilter(prevState => !prevState)
  }

  const onSearchProduct = () => {
    const sortBy = filter.sort.value || 'freshness'
    const params = { ...filter, sort: sortBy }
    router.push(`/search?${serializeQuery(params)}`)
  }

  const onSortProduct = (selected: Options) => {
    setSearch(prevState => ({ ...prevState, sort: selected }))
  }

  return (
    <div className="wrapper-home">
      {/* Navbar */}
      <Navbar
        value={filter.q}
        placeholder="Search..."
        onInput={onSearch}
        onFilter={onToggleFilter}
        onSearch={onSearchProduct}
      />

      {/* Filter */}
      <FilterSearch
        show={showFilter}
        priceMin={filter.priceMin}
        priceMax={filter.priceMax}
        sort={filter.sort}
        onChangeInput={onChangeInput}
        onSortProduct={onSortProduct}
      />

      <div className="content-home">
        <Image src={IllShopping} alt="Illustrations Shopping" className="illustration-shopping" />
        <div className="text-content">
          <div className="asos-title">
            <Image src={AsosLogo} alt="Asos" width={66} className="asos-simple-logo" />
            <h2 className="title-text-content">SOS</h2>
          </div>
          <span className="tagline-text-content">Discover Fashion Online</span>
          <p className="describe-content">Discover the latest fashion trends with ASOS. Shop the new collection of clothing, footwear, accessories, beauty products and more. Order today from ASOS.</p>
        </div>
      </div>
    </div>
  )
}

export default HomeScreen
