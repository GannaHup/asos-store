import { Options } from "./Dropdown.type"

export interface FilterSearchProps {
  show: boolean
  priceMin: number
  priceMax: number
  sort: Options
  onChangeInput: (val: string | number, key: string) => void
  onSortProduct: (selected: Options) => void
  onSearch: () => void
}
