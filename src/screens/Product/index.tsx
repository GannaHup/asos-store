import React, { useEffect, useState } from "react";
import Image from "next/image";
import Icon from "@/assets/icons";
import Badge from "@/components/atoms/Badge";
import { ProductImages, ProductVariant } from "@/data/entities/ProductDetail";
import { useAppSelector } from "@/stores";
import "./style.scss";

const ProductScreen = () => {
  const { isLoading, dataProductDetail } = useAppSelector((state) => state.products);
  const [currentImage, setCurrentImage] = useState("");

  const textBadge = (variant: ProductVariant) => {
    if (variant.colour && !variant.brandSize) {
      return variant.colour;
    } else if (!variant.colour && variant.brandSize) {
      return variant.brandSize;
    } else {
      return `${variant.colour} - ${variant.brandSize}`;
    }
  };

  useEffect(() => {
    if (dataProductDetail.images && dataProductDetail.images.length > 0) {
      setCurrentImage(`https://${dataProductDetail.images[0].url}`);
    }
  }, [dataProductDetail.images]);

  if (isLoading) {
    return (
      <div className="loading-state">
        <Icon name="loading-bubble" />
      </div>
    )
  }
  return (
    <div className="wrapper-product-detail">
      <div className="content-product-detail">
        <div className="images-product-detail">
          <Image
            src={currentImage || ""}
            alt={dataProductDetail.name || ""}
            width={430}
            height={540}
          />
          <div className="wrapper-variant-images">
            {dataProductDetail.images?.map(
              (image: ProductImages, idx: number) => {
                return (
                  <div
                    key={idx}
                    className="option-image"
                    onClick={() => setCurrentImage(`https://${image.url as string}`)}
                  >
                    <Image
                      src={`https://${image.url}`}
                      alt={image.type || ""}
                      width={90}
                      height={90}
                      className={
                        currentImage.replace('https://', '') === image.url
                          ? "image-variant active"
                          : "image-variant"
                      }
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>

        <div className="info-product-detail">
          <h2 className="title-product">{dataProductDetail.name}</h2>
          <div className="brand-name">
            <Icon name="tag" width={20} height={20} />
            <span>{dataProductDetail.brandName}</span>
          </div>
          <div className="price-product">
            {(
              dataProductDetail.oldPrice &&
              dataProductDetail.oldPrice !== dataProductDetail.currentPrice
            ) && (
              <span className="old-price-product">
                {dataProductDetail.oldPrice} {dataProductDetail.current}
              </span>
            )}
            <span className="current-price-product">
              {dataProductDetail.currentPrice}
            </span>
          </div>

          <div className="info-field row">
            <span className="title-info">Variants: </span>
            <div className="list-variant">
              {dataProductDetail.variants?.map(
                (variant: ProductVariant, idx: number) => {
                  return <Badge text={textBadge(variant)} key={idx} />;
                }
              )}
            </div>
          </div>

          <div className="info-field">
            <span className="title-info">Descriptions: </span>
            <div
              dangerouslySetInnerHTML={{ __html: dataProductDetail.aboutMe || "" }}
              className="about-me-product"
            />
            <div
              dangerouslySetInnerHTML={{ __html: dataProductDetail.description || ""}}
              className="desc-info"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
