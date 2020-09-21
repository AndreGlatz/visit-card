import React from "react";
import { Container, Footer } from "./styles";

type Props = {
  children?: any;
};

export const Layout: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      {props.children}
      <Footer>
        <p>
          By <a href="https://github.com/andreglatz">André Glatz</a>{" "}
        </p>
      </Footer>
    </Container>
  );
};
