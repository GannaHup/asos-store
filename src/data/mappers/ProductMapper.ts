import { AxiosResponse } from "axios";
import { Price, Product, ProductList, ProductPrice } from "@/data/entities/Product";
import { ProductDetail, ProductImages, ProductVariant } from "@/data/entities/ProductDetail";
// import { PRODUCT_DETAIL } from "@/constants/product";

export class ProductMapper {
  public convertProductList(result: AxiosResponse) {
    const { data } = result
    return new ProductList(
      data.itemCount,
      data.products?.map((item: Product) => {
        return new Product(
          item.id,
          item.name,
          new ProductPrice(
            (<Price>item.price?.current).text,
            (<Price>item.price?.previous).text,
            item.price?.currency,
          ),
          item.colour,
          item.colourWayId,
          item.brandName,
          item.hasVariantColours,
          item.hasMultiplePrices,
          item.groupId,
          item.productCode,
          item.productType,
          item.url,
          item.imageUrl,
          item.videoUrl,
          item.isSellingFast,
        )
      }
      )
    )
  }

  public convertProductDetail(result: AxiosResponse) {
    const { data } = result
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
