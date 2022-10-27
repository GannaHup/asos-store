import axiosApi from "@/services/index"
import { serializeQuery } from "@/utils/serializeQuery"

export const getProductList = (params: any) => {
  axiosApi
    .get(`/products/v2/list?${serializeQuery(params)}`)
}
