import React from "react";
import { Container } from "./styles";

type Props = {
  children?: any;
};

export const Layout: React.FC<Props> = (props: Props) => {
  return <Container>{props.children}</Container>;
};
