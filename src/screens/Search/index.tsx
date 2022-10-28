import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Icon from "@/assets/icons";
import Card from "@/components/atoms/Card";
import { Product } from "@/data/entities/Product";
import { useAppDispatch, useAppSelector } from "@/stores";
import { SearchProps } from "@/types/pages/search";
import IllNotFound from "@/assets/svg/ill_not_found.svg";
import { setLoading } from "@/stores/actions/ProductAction";
import Pagination from "@/components/atoms/Pagination";
import clearEmptyObject from "@/utils/clearEmptyObject";
import "./style.scss";

const SearchScreen = (props: SearchProps) => {
  const { keyword, page, priceMin, priceMax, sort, store } = props;
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isLoading, dataProducts } = useAppSelector((state) => state.products);

  const onSeeDetail = (id: number) => {
    dispatch(setLoading(true))
    router.push(`/product/${id}`)
  }

  const onSetPagination = (pageNumber: number) => {
    dispatch(setLoading(true))
    const params = {
      q: keyword,
      store,
      priceMin,
      priceMax,
      sort,
      page: pageNumber
    }
    router.replace({
      query: clearEmptyObject(params),
    });
  }

  return (
    <div className="wrapper-home">
      {isLoading && (
        <div className="loading-state">
          <Icon name="loading-bubble" />
        </div>
      )}

      {!isLoading && dataProducts && dataProducts.products.length > 0 && (
        <>
          <div className="section-product-list">
            <div className="wrapper-product-list">
              {dataProducts.products?.map((product: Product, idx: number) => {
                return <Card data={product} key={idx} onClick={() => onSeeDetail(product.id as number)} />;
              })}
            </div>
          </div>

          <Pagination
            currentPage={Number(page)}
            totalItem={dataProducts.itemCount}
            perPage={48}
            onSetPage={onSetPagination}
          />
        </>
      )}

      {!isLoading && dataProducts && dataProducts.products.length === 0 && (
        <div className="empty-state">
          <h2 className="text-empty-state">
            Search result for <span className="keyword-empty-state">{keyword}</span> not found
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
