import React from "react"
import { ProductDetailMapper } from "@/data/mappers/ProductDetailMapper"
import './style.scss'

const ProductScreen = () => {
  const mapper = new ProductDetailMapper()
  const data = mapper.convertProductDetail()
  console.log(data)
  return (
    <div>
      <h2>Product Screen</h2>
    </div>
  )
}

export default ProductScreen
