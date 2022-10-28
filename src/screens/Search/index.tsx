import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Icon from "@/assets/icons";
import Card from "@/components/atoms/Card";
import { Product } from "@/data/entities/Product";
import { useAppDispatch, useAppSelector } from "@/stores";
import { SearchProps } from "@/types/pages/search";
import IllNotFound from "@/assets/svg/ill_not_found.svg";
import "./style.scss";
import { setLoading } from "@/stores/actions/ProductAction";

const SearchScreen = (props: SearchProps) => {
  const { keyword } = props;
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { isLoading, dataProducts } = useAppSelector((state) => state.products);

  const onSeeDetail = (id: number) => {
    dispatch(setLoading(true))
    router.push(`/product/${id}`)
  }

  return (
    <div className="wrapper-home">
      {isLoading && (
        <div className="loading-state">
          <Icon name="loading-bubble" />
        </div>
      )}

      {!isLoading && dataProducts && dataProducts.products.length > 0 && (
        <div className="section-product-list">
          <div className="wrapper-product-list">
            {dataProducts.products?.map((product: Product, idx: number) => {
              return <Card data={product} key={idx} onClick={() => onSeeDetail(product.id as number)} />;
            })}
          </div>
        </div>
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
