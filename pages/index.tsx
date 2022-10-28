import React, { useEffect } from "react"
import HomeScreen from "@/screens/Home/index"
import { useAppDispatch } from "@/stores"
import { setLoading } from "@/stores/actions/ProductAction"

export default function HomePage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setLoading(false))
  }, [])
  return (
    <HomeScreen />
  )
}
