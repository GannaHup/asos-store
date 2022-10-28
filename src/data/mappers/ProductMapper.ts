import { AxiosResponse } from "axios";
import { Price, Product, ProductList, ProductPrice } from "@/data/entities/Product";

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
}
