import { SET_LOADING, SET_PRODUCT_LIST } from "@/constants/actions-store";
import { ProductList } from "@/data/entities/Product";
import { AnyAction } from "redux";

const initialState = {
  isLoading: true,
  dataProducts: new ProductList()
};

export default function ProductsReducers(
  state = initialState,
  action: AnyAction
) {
  const { type, loading, products } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: loading,
      };

    case SET_PRODUCT_LIST:
      return {
        ...state,
        isLoading: false,
        dataProducts: products
      }

    default:
      return state;
  }
}
