import { ProductList } from "@/data/entities/Product"

export interface HomeProps {
  keyword: string
  priceMin: number
  priceMax: number
  sort: string
  productList: ProductList
}
