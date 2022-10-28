import React from "react";
import Image from "next/image";
import { CardProps } from "@/types/components/Card.type";
import './style.scss'

const Card = (props: CardProps) => {
  const { data, onClick } = props
  return (
    <div className="card" onClick={onClick}>
      <Image
        id="image-card"
        src={`https://${data.imageUrl}`}
        alt={data.name || ''}
        width={313}
        height={400}
      />
      <span className="name-card">{data.name}</span>
      <div className="info-card">
        <div className="info-price">
          {data.price?.previous && (
            <span className="old-price">{data.price?.previous}</span>
          )}
          <span className="new-price">{data.price?.current}</span>
        </div>
        <span>{data.brandName}</span>
      </div>
    </div>
  );
};

export default Card;
