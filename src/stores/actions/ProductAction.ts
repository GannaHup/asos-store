import { SET_LOADING, SET_PRODUCT_DETAIL, SET_PRODUCT_LIST } from "@/constants/actions-store";
import { ProductList } from "@/data/entities/Product";
import { ProductDetail } from "@/data/entities/ProductDetail";

export const setLoading = (bool: boolean) => {
  return { type: SET_LOADING, loading: bool };
};

export const setProductList = (data: ProductList) => {
  return { type: SET_PRODUCT_LIST, products: data };
};

export const setProductDetail = (data: ProductDetail) => {
  return { type: SET_PRODUCT_DETAIL, productDetail: data };
};
