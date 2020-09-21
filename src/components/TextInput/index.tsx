import React from "react";
import { Input } from "./styles";

interface Props {
  placeholder?: any;
  onKeyDown?: any;
  onChange?: any;
}

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <Input
      name="text"
      type="text"
      placeholder={props.placeholder}
      onKeyDown={props.onKeyDown}
      onChange={props.onChange}
    />
  );
};
