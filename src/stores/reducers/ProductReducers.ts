import { AnyAction } from "redux";
import { SET_LOADING, SET_PRODUCT_LIST, SET_PRODUCT_DETAIL } from "@/constants/actions-store";
import { ProductList } from "@/data/entities/Product";
import { ProductDetail } from "@/data/entities/ProductDetail";

const initialState = {
  isLoading: true,
  dataProducts: new ProductList(),
  dataProductDetail: new ProductDetail()
};

export default function ProductsReducers(
  state = initialState,
  action: AnyAction
) {
  const { type, loading, products, productDetail } = action;

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

    case SET_PRODUCT_DETAIL:
      return {
        ...state,
        isLoading: false,
        dataProductDetail: productDetail
      }

    default:
      return state;
  }
}
