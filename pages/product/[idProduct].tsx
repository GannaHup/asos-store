import React, { useEffect } from "react";
import ProductScreen from "@/screens/Product";
import { getProductDetail } from "@/services/ProductApi";
import { useAppDispatch } from "@/stores";
import { setProductDetail } from "@/stores/actions/ProductAction";
import { PageProps, ServerSidePropsContext } from "@/types/pages/ssr";
import { ProductDetailProps } from "@/types/pages/productDetail";
import { ProductDetail } from "@/data/entities/ProductDetail";

export default function ProductPage(props: ProductDetailProps) {
  const { productDetail } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProductDetail(productDetail as ProductDetail));
  }, [productDetail]);

  return <ProductScreen />;
}

export async function getServerSideProps(
  context: ServerSidePropsContext
): Promise<PageProps<ProductDetailProps>> {
  const { idProduct } = context.query;

  const productDetail = await getProductDetail({ id: idProduct });

  return {
    props: {
      idProduct,
      productDetail,
    },
  };
}
