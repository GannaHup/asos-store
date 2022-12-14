import { AnyAction, CombinedState, combineReducers } from "redux"
import ProductReducers from '@/stores/reducers/ProductReducers'
import { ReducersAllTypes } from "@/types/store/index"

const appReducers = combineReducers<ReducersAllTypes>({
  products: ProductReducers
})

const rootReducer = (state: CombinedState<ReducersAllTypes> | undefined, action: AnyAction) => {
  return appReducers(state, action)
}

export default rootReducer
