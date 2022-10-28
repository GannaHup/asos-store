export class Price {
  text?: string
  value?: number

  constructor(text?: string,value?: number) {
    this.text = text
    this.value = value
  }
}

export class ProductPrice {
  current?: string
  previous?: string | null
  currency?: string

  constructor(
    current?: string,
    previous?: string | null,
    currency?: string
  ) {
    this.current = current
    this.previous = previous
    this.currency = currency
  }
}

export class Product {
  id?: number
  name?: string
  price?: ProductPrice
  colour?: string
  colourWayId?: number
  brandName?: string
  hasVariantColours?: boolean
  hasMultiplePrices?: boolean
  groupId?: string | null
  productCode?: number
  productType?: string
  url?: string
  imageUrl?: string
  videoUrl?: string | null
  isSellingFast?: boolean

  constructor(
    id?: number,
    name?: string,
    price?: ProductPrice,
    colour?: string,
    colourWayId?: number,
    brandName?: string,
    hasVariantColours?: boolean,
    hasMultiplePrices?: boolean,
    groupId?: string | null,
    productCode?: number,
    productType?: string,
    url?: string,
    imageUrl?: string,
    videoUrl?: string | null,
    isSellingFast?: boolean
  ) {
    this.id = id
    this.name = name
    this.price = price
    this.colour = colour
    this.colourWayId = colourWayId
    this.brandName = brandName
    this.hasVariantColours = hasVariantColours
    this.hasMultiplePrices = hasMultiplePrices
    this.groupId = groupId
    this.productCode = productCode
    this.productType = productType
    this.url = url
    this.imageUrl = imageUrl
    this.videoUrl = videoUrl
    this.isSellingFast = isSellingFast
  }
}

export class ProductList {
  public itemCount?: number
  public products?: Product[]

  constructor(
    itemCount?: number,
    products?: Product[]
  ) {
    this.itemCount = itemCount
    this.products = products
  }
}
