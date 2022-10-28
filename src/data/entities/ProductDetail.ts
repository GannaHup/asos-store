export class ProductVariant {
  id?: number
  brandSize?: string
  colour?: string

  constructor(
    id?: number,
    brandSize?: string,
    colour?: string
  ) {
    this.id = id
    this.brandSize = brandSize
    this.colour = colour
  }
}

export class ProductImages {
  public id?: number
  public url?: string
  public type?: string

  constructor(
    id?: number,
    url?: string,
    type?: string
  ) {
    this.id = id
    this.url = url
    this.type = type
  }
}

export class ProductDetail {
  public id?: number
  public name?: string
  public aboutMe?: string
  public description?: string
  public gender?: string
  public brandName?: string
  public variants?: ProductVariant[]
  public images?: ProductImages[]
  public sizeAndFit?: string
  public currentPrice?: string
  public oldPrice?: string

  constructor(
    id?: number,
    name?: string,
    aboutMe?: string,
    description?: string,
    gender?: string,
    brandName?: string,
    variants?: ProductVariant[],
    images?: ProductImages[],
    sizeAndFit?: string,
    currentPrice?: string,
    oldPrice?: string
  ) {
    this.id = id
    this.name = name
    this.aboutMe = aboutMe
    this.description = description
    this.gender = gender
    this.brandName = brandName
    this.variants = variants
    this.images = images
    this.sizeAndFit = sizeAndFit
    this.currentPrice = currentPrice
    this.oldPrice = oldPrice
  }
}
