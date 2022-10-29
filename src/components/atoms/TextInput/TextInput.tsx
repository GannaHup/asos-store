import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";
import { TextInputProps } from "@/types/components/TextInput.type";
import "./style.scss";

const TextInput = (props: TextInputProps) => {
  const {
    canEnter,
    value,
    customClass,
    placeholder,
    type,
    onInput,
    onKeyDown,
  } = props;
  const [wrapperClass, setWrapperClass] = useState("wrapper-text-input");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;
    if (onInput) onInput(value);
  };

  const onKeyDownInput = (event: KeyboardEvent<HTMLInputElement>) => {
    if ((event.code === "Enter" || event.keyCode === 13) && canEnter) {
      if (onKeyDown) onKeyDown();
    }
  };

  useEffect(() => {
    if (customClass) {
      setWrapperClass(`wrapper-text-input ${customClass}`);
    }
  }, [customClass]);

  return (
    <div className={wrapperClass}>
      <input
        value={value}
        type={type}
        tabIndex={-1}
        className="input"
        placeholder={placeholder}
        onChange={onChangeInput}
        onKeyDown={onKeyDownInput}
      />
    </div>
  );
};

TextInput.defaultProps = {
  canEnter: false,
  customClass: "",
  placeholder: "",
  type: "text",
  tabIndex: 0,
};

export default TextInput;
