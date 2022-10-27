import React from "react";
import Image from "next/image";
import './style.scss'

const Card = (props: any) => {
  const Data = {
    id: 203370895,
    name: "Topman velvet revere shirt in animal design",
    price: {
      current: {
        value: 65,
        text: "$65.00",
      },
      previous: {
        value: null,
        text: "",
      },
      currency: "USD",
    },
    colour: "Black and white",
    colourWayId: 203370906,
    brandName: "Topman",
    hasVariantColours: false,
    hasMultiplePrices: false,
    groupId: null,
    productCode: 120689154,
    productType: "Product",
    url: "topman/topman-velvet-revere-shirt-in-animal-design/prd/203370895?clr=black-and-white&colourWayId=203370906",
    imageUrl:
      "images.asos-media.com/products/topman-velvet-revere-shirt-in-animal-design/203370895-1-blackandwhite",
    videoUrl: null,
    isSellingFast: false,
  };
  return (
    <div className="card">
      <Image
        id="image-card"
        src={`https://${Data.imageUrl}`}
        alt={Data.name}
        width={313}
        height={400}
      />
      <span>{Data.name}</span>
      <div className="info-card">
        <div className="info-price">
          <span className="old-price">$65.00</span>
          <span className="new-price">$65.00</span>
        </div>
        <span>{Data.brandName}</span>
      </div>
    </div>
  );
};

export default Card;
