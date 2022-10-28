import { ProductList } from "@/data/entities/Product"
import { ProductDetail } from "@/data/entities/ProductDetail"

export interface TProductsState {
  isLoading: boolean
  dataProducts: ProductList
  dataProductDetail: ProductDetail
}

export interface ReducersAllTypes  {
  products: TProductsState | any
}
