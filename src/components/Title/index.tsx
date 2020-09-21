import React from "react";

import { LargeText } from "./styles";

type Props = {
  children?: any;
};

export const Title: React.FC = (props: Props) => {
  return <LargeText>{props.children}</LargeText>;
};
