import React from "react";
import { Container } from "./styles";

type Props = {
  children?: any;
};

const Background: React.FC<Props> = (props: Props) => {
  return <Container>{props.children}</Container>;
};

export default Background;
