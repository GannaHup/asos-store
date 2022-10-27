import React from "react";
import Icon from "@/assets/Icons";
import TextInput from "@/components/atoms/TextInput/TextInput";
import { SearchInputProps } from "@/types/components/SearchInput.type";
import "./style.scss";

const SearchInput = (props: SearchInputProps) => {
  const { value, placeholder, onInput, onKeyDown } = props;

  const onChangeInput = (value: string) => {
    if (onInput) onInput(value);
  };

  const onKeyDownInput = () => {
    if (onKeyDown) onKeyDown();
  };

  return (
    <div className="wrapper-search-input">
      <TextInput
        value={value}
        placeholder={placeholder}
        customClass="search-input"
        onInput={onChangeInput}
        onKeyDown={onKeyDownInput}
      />
      <div className="icon-search">
        <Icon name="search" />
      </div>
    </div>
  );
};

SearchInput.defaultProps = {
  placeholder: "",
};

export default SearchInput;
