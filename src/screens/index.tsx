import React, { useEffect, useState } from "react"
import { AppProps } from "next/app"
import { useRouter } from 'next/router';
import FilterSearch from "@/components/molecules/FilterSearch";
import Navbar from "@/components/molecules/Navbar";
import { OPTIONS_SORT_PRODUCT } from '@/constants/product';
import { useAppDispatch } from "@/stores"
import { setLoading } from '@/stores/actions/ProductAction';
import { Options } from "@/types/components/Dropdown.type";
import { serializeQuery } from "@/utils/serializeQuery";
import './style.scss'
import clearEmptyObject from "@/utils/clearEmptyObject";

const MainPage = ({ Component, pageProps }: AppProps) => {
  const { keyword, priceMin, priceMax, page } = pageProps
  const router = useRouter();
  const { pathname } = router
  const dispatch = useAppDispatch();
  const [filter, setSearch] = useState({
    q: keyword || "",
    store: "US",
    priceMin: priceMin,
    priceMax: priceMax,
    sort: OPTIONS_SORT_PRODUCT[0],
    page: page || 1
  });
  const [showFilter, setShowFilter] = useState(false);

  const onSearch = (keyword: string | number) => {
    setSearch((prevState) => ({ ...prevState, q: keyword as string }));
  };

  const onToggleFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  const onSearchProduct = () => {
    dispatch(setLoading(true));
    const sortBy = filter.sort.value || "freshness";
    if (pathname !== '/search') {
      const params = clearEmptyObject({ ...filter, sort: sortBy })
      router.push(`/search?${serializeQuery(params)}`)
    } else {
      router.replace({
        query: clearEmptyObject({ ...filter, sort: sortBy }),
      });
    }
    setShowFilter(false)
  };

  const onChangeInput = (value: string | number, key: string) => {
    setSearch((prevState) => ({ ...prevState, [key]: value }));
  };

  const onSortProduct = (selected: Options) => {
    setSearch((prevState) => ({ ...prevState, sort: selected }));
  };

  return (
    <div className="main-wrapper">
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
        onSearch={onSearchProduct}
      />
      <Component {...pageProps} />
    </div>
  )
}

export default MainPage
