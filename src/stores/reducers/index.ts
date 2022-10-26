import { CombinedState, combineReducers } from "redux"
import GoogleSearchReducers from '@/stores/reducers/GoogleSearchReducers'
import { ReducersAllTypes } from "@/types/store/index"

const appReducers = combineReducers<ReducersAllTypes>({
  google: GoogleSearchReducers
})

const rootReducer = (state: CombinedState<ReducersAllTypes> | undefined, action: any) => {
  return appReducers(state, action)
}

export default rootReducer
