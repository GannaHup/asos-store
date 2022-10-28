import { Provider } from "react-redux"
import type { AppProps } from 'next/app'
import store from "@/stores"
import Main from "@/screens"
import '@/assets/styles/globals.scss'

export default function App(props: AppProps) {
  return (
    <Provider store={store}>
      <Main {...props} />
    </Provider>
  )
}
