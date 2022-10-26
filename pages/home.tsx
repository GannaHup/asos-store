import React, { useEffect } from "react"
import HomeScreen from "@/screens/HomeScreen/index"
import { useAppDispatch } from "@/stores"
import { searchContent } from "@/stores/actions/GoogleSearchAction"
import { PageProps, ServerSidePropsContext } from "@/types/pages"

export default function HomePage(props: any) {
  console.log(props)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(searchContent())
  }, [])

  return (
    <HomeScreen />
  )
}

export async function getServerSideProps(
  context: ServerSidePropsContext
): Promise<PageProps<any>> {

  return {
    props: {
      store: 'store',
    },
  };
}
