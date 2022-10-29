import React from "react";
import DropdownSelect from "@/components/atoms/Dropdown";
import TextInput from "@/components/atoms/TextInput/TextInput";
import Button from "@/components/atoms/Button";
import { OPTIONS_SORT_PRODUCT } from "@/constants/product";
import './style.scss'
import { FilterSearchProps } from "@/types/components/FilterSearch.type";

const FilterSearch = (props: FilterSearchProps) => {
  const { show, priceMin, priceMax, sort, onChangeInput, onSortProduct, onSearch } = props

  return (
    <div className={show ? 'wrapper-filter' : 'wrapper-filter hide'}>
      <div className="section-title-filter">
        <span>Filter for your result</span>
      </div>

      <div className="section-filter">
        <div className="section-field-filter">
          <div className="field-input-label">
            <span className="label-input">Min Price</span>
            <TextInput
              type="number"
              placeholder="Min Price"
              customClass="filter-input"
              value={priceMin}
              onInput={(val) => onChangeInput(val, 'priceMin')}
            />
          </div>

          <div className="field-input-label">
            <span className="label-input">Max Price</span>
            <TextInput
              type="number"
              placeholder="Max Price"
              customClass="filter-input"
              value={priceMax}
              onInput={(val) => onChangeInput(val, 'priceMax')}
            />
          </div>

          <div className="field-input-label">
            <span className="label-input">Sort</span>
            <DropdownSelect
              value={sort}
              options={OPTIONS_SORT_PRODUCT}
              customClass="filter-input"
              onSelectOption={onSortProduct}
            />
          </div>
        </div>
        <div className="wrapper-button-search">
          <Button text="Search" customClass="button-search" onClick={onSearch} />
        </div>
      </div>
    </div>
  )
}

export default FilterSearch
