import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/molecules/Navbar";
import FilterSearch from "@/components/molecules/FilterSearch";
import { Options } from "@/types/components/Dropdown.type"
import { OPTIONS_SORT_PRODUCT } from "@/constants/product";
import { HomeProps } from "@/types/pages/home";
import "./styles.scss";
import Card from "@/components/atoms/Card";
import { useAppSelector } from "@/stores";

const HomeScreen = (props: HomeProps) => {
  const { keyword, priceMin, priceMax, sort } = props
  const router = useRouter();
  const { isLoading } = useAppSelector(state => state.products)
  const [filter, setSearch] = useState({
    q: keyword || '',
    store: 'US',
    priceMin: priceMin,
    priceMax: priceMax,
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
    router.replace({
      query: {
        ...filter,
        sort: sortBy
      }
    })
  }

  const onSortProduct = (selected: Options) => {
    setSearch(prevState => ({ ...prevState, sort: selected }))
  }

  useEffect(() => {
    if (sort) {
      const selectedSort = OPTIONS_SORT_PRODUCT.find(option => option.value === sort) || OPTIONS_SORT_PRODUCT[0]
      setSearch(prevState => ({ ...prevState, sort: selectedSort }))
    }
  }, [sort])

  useEffect(() => {
    // dispatch(setLoading(true))
    console.log('isLoading', isLoading)
  }, [])

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

      {isLoading ? (
        <div style={{ marginTop: 100 }}>Loading...</div>
      ) : (
        <div className="section-product-list">
          <div className="wrapper-product-list">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      )}
    </div>
  )
}

export default HomeScreen
