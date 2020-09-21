import React, { ReactNode } from "react";
import { Container, Image } from "./styles";

type Props = {
  href?: string;
  children?: ReactNode;
};

export const ArrowBack: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <a href={props.href}>
        <Image src="/arrow-back.svg" />
      </a>
    </Container>
  );
};
