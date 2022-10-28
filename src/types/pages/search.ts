import { ProductList } from "@/data/entities/Product"

export interface SearchProps {
  keyword: string
  priceMin: number
  priceMax: number
  sort: string
  productList?: ProductList
}
