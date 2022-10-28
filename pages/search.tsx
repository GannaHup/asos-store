import React, { useEffect } from "react"
import SearchScreen from "@/screens/Search/index"
import { getProductList } from "@/services/ProductApi"
import { SearchProps } from "@/types/pages/search"
import { PageProps, ServerSidePropsContext } from "@/types/pages/ssr"
import { useAppDispatch } from "@/stores"
import { setProductList } from "@/stores/actions/ProductAction"
import { ProductList } from "@/data/entities/Product"

export default function SearchPage(props: SearchProps) {
  const { productList, keyword, priceMin, priceMax, sort, store, page } = props
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setProductList(productList as ProductList))
  }, [props.productList])

  return (
    <SearchScreen
      store={store}
      keyword={keyword}
      priceMin={priceMin}
      priceMax={priceMax}
      sort={sort}
      page={page}
    />
  )
}

export async function getServerSideProps(
  context: ServerSidePropsContext
): Promise<PageProps<SearchProps>> {
  const {
    q,
    page = 1,
    store,
    priceMin = 0,
    priceMax = 1000,
    sort = 'freshness'
  } = context.query

  if (!store || !q) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const productList = await getProductList({
    q: q || '',
    store,
    priceMin,
    priceMax,
    sort,
    page: page || 1
  })

  return {
    props: {
      keyword: q || '',
      priceMin: priceMin,
      priceMax: priceMax,
      store: store,
      sort: sort,
      page: page || 1,
      productList: productList
    },
  };
}
