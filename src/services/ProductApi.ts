import axiosApi from "@/services/index"
import { serializeQuery } from "@/utils/serializeQuery"
import { ProductMapper } from '@/data/mappers/ProductMapper'

const mapper = new ProductMapper()

export const getProductList = async (params: any) => {
  return await axiosApi
    .get(`/products/v2/list?${serializeQuery(params)}`)
    .then(res => {
      const result = JSON.stringify(mapper.convertProductList(res))
      return JSON.parse(result)
    })
    .catch(err => console.log(err))
}

export const getProductDetail = async (params: any) => {
  return await axiosApi
    .get(`/products/v3/detail?${serializeQuery(params)}`)
    .then(res => {
      const result = JSON.stringify(mapper.convertProductDetail(res))
      return JSON.parse(result)
    })
    .catch(err => console.log(err))
}
