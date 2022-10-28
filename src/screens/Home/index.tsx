import React from "react";
import Image from "next/image";
import Icon from "@/assets/icons";
import IllShopping from '@/assets/svg/ill_shopping.svg'
import AsosLogo from '@/assets/images/asos-simple-logo.png'
import { useAppSelector } from "@/stores";
import "./style.scss";

const HomeScreen = () => {
  const { isLoading } = useAppSelector(state => state.products)

  if (isLoading) {
    return (
      <div className="loading-state">
        <Icon name="loading-bubble" />
      </div>
    )
  }
  return (
    <div className="wrapper-home">
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
