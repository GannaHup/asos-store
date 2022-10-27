import React from "react"
import HomeScreen from "@/screens/HomeScreen/index"
import { getProductList } from "@/services/ProductApi"
import { HomeProps } from "@/types/pages/home"
import { PageProps, ServerSidePropsContext } from "@/types/pages/ssr"

export default function HomePage(props: HomeProps) {
  console.log(props)
  return (
    <HomeScreen {...props} />
  )
}

export async function getServerSideProps(
  context: ServerSidePropsContext
): Promise<PageProps<HomeProps>> {
  const {
    q = '',
    store,
    priceMin = 0,
    priceMax = 1000,
    sort = 'freshness'
  } = context.query

  const productList = await getProductList({
    q: q || '',
    store,
    priceMin,
    priceMax,
    sort
  })

  return {
    props: {
      keyword: q || '',
      priceMin: priceMin,
      priceMax: priceMax,
      sort: sort,
      productList: productList
    },
  };
}
