import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "@/components/molecules/Navbar";
import FilterSearch from "@/components/molecules/FilterSearch";
import Card from "@/components/atoms/Card";
import { OPTIONS_SORT_PRODUCT } from "@/constants/product";
import { Product } from "@/data/entities/Product";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setLoading } from "@/stores/actions/ProductAction";
import { Options } from "@/types/components/Dropdown.type";
import { HomeProps } from "@/types/pages/home";
import IllNotFound from "@/assets/svg/ill_not_found.svg";
import "./style.scss";
import Icon from "@/assets/icons";

const SearchScreen = (props: HomeProps) => {
  const { keyword, priceMin, priceMax, sort } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, dataProducts } = useAppSelector((state) => state.products);
  const [filter, setSearch] = useState({
    q: keyword || "",
    store: "US",
    priceMin: priceMin,
    priceMax: priceMax,
    sort: OPTIONS_SORT_PRODUCT[0],
  });
  const [showFilter, setShowFilter] = useState(false);

  const onSearch = (keyword: string | number) => {
    setSearch((prevState) => ({ ...prevState, q: keyword as string }));
  };

  const onChangeInput = (value: string | number, key: string) => {
    setSearch((prevState) => ({ ...prevState, [key]: value }));
  };

  const onToggleFilter = () => {
    setShowFilter((prevState) => !prevState);
  };

  const onSearchProduct = () => {
    dispatch(setLoading(true));
    const sortBy = filter.sort.value || "freshness";
    router.replace({
      query: {
        ...filter,
        sort: sortBy,
      },
    });
  };

  const onSortProduct = (selected: Options) => {
    setSearch((prevState) => ({ ...prevState, sort: selected }));
  };

  useEffect(() => {
    if (sort) {
      const selectedSort =
        OPTIONS_SORT_PRODUCT.find((option) => option.value === sort) ||
        OPTIONS_SORT_PRODUCT[0];
      setSearch((prevState) => ({ ...prevState, sort: selectedSort }));
    }
  }, [sort]);
  console.log(dataProducts);

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

      {isLoading && (
        <div className="loading-state">
          <Icon name="loading-bubble" />
        </div>
      )}

      {!isLoading && dataProducts && dataProducts.products.length > 0 && (
        <div className="section-product-list">
          <div className="wrapper-product-list">
            {dataProducts.products?.map((product: Product, idx: number) => {
              return <Card data={product} key={idx} />;
            })}
          </div>
        </div>
      )}

      {!isLoading && dataProducts && dataProducts.products.length === 0 && (
        <div className="empty-state">
          <h2 className="text-empty-state">
            Result for <span className="keyword-empty-state">{keyword}</span>{" "}
            not found
          </h2>
          <Image
            src={IllNotFound}
            alt="Illustrations Not Found"
            className="illustration-not-found"
          />
        </div>
      )}
    </div>
  );
};

export default SearchScreen;
