import { AxiosResponse } from "axios";
import { ProductDetail, ProductImages, ProductVariant } from "@/data/entities/ProductDetail";
import { PRODUCT_DETAIL } from "@/constants/product";

export class ProductDetailMapper {
  public convertProductDetail(result?: AxiosResponse) {
    // const { data } = result
    const data = PRODUCT_DETAIL
    return new ProductDetail(
      data.id,
      data.name,
      data.info.aboutMe,
      data.description,
      data.gender,
      data.brand.name,
      data.variants.map((variant: ProductVariant) => {
        return new ProductVariant(
          variant.id,
          variant.brandSize,
          variant.colour
        )
      }),
      data.media.images.map((image: ProductImages, idx: number) => {
        return new ProductImages(
          idx + 1,
          image.url,
          image.type
        )
      }),
      data.info.sizeAndFit,
      data.price.current.text,
      data.price.previous.text,
    )
  }
}
