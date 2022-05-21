import React from "react";

function InputComponent({
  type,
  placeholder,
  required,
  value,
  name,
  handleInput,
}) {
  return (
    <input
      onChange={handleInput}
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      required={required}
    />
  );
}

export default InputComponent;
