import React from "react";
import { Input, Container } from "./styles";

interface Props {
  placeholder?: any;
  onKeyDown?: any;
  onChange?: any;
}

export const TextInput: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <img src="/at.svg" alt="search" id="at" />
      <img src="/github.svg" alt="GitHub Logo" id="github-logo" />
      <Input
        name="text"
        type="text"
        placeholder={props.placeholder}
        onKeyDown={props.onKeyDown}
        onChange={props.onChange}
      />
    </Container>
  );
};
