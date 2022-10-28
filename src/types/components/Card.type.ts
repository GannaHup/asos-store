import { Product } from "@/data/entities/Product";

export interface CardProps {
  data: Product
  onClick?: () => void
}
