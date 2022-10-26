import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux"
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '@/stores/reducers'

const store = configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
