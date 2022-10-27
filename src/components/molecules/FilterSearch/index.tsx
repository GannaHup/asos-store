import React from "react";
import DropdownSelect from "@/components/atoms/Dropdown";
import TextInput from "@/components/atoms/TextInput/TextInput";
import { OPTIONS_SORT_PRODUCT } from "@/constants/product";
import { Options } from "@/types/components/Dropdown.type";
import './style.scss'

interface FilterSearchProps {
  show: boolean
  priceMin: number
  priceMax: number
  sort: Options
  onChangeInput: (val: string | number, key: string) => void
  onSortProduct: (selected: Options) => void
}

const FilterSearch = (props: FilterSearchProps) => {
  const { show, priceMin, priceMax, sort, onChangeInput, onSortProduct } = props

  return (
    <div className={show ? 'wrapper-filter' : 'wrapper-filter hide'}>
      <div className="section-title-filter">
        <span>Filter for your result</span>
      </div>

      <div className="section-field-filter">
        <div className="field-input-label">
          <span>Min Price</span>
          <TextInput
            type="number"
            placeholder="Min Price"
            customClass="filter-input"
            value={priceMin}
            onInput={(val) => onChangeInput(val, 'priceMin')}
          />
        </div>

        <div className="field-input-label">
          <span>Max Price</span>
          <TextInput
            type="number"
            placeholder="Max Price"
            customClass="filter-input"
            value={priceMax}
            onInput={(val) => onChangeInput(val, 'priceMax')}
          />
        </div>

        <div className="field-input-label">
          <span>Sort</span>
          <DropdownSelect value={sort} options={OPTIONS_SORT_PRODUCT} onSelectOption={onSortProduct} />
        </div>
      </div>
    </div>
  )
}

export default FilterSearch
