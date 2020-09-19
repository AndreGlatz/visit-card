import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: darkblue;
  color: white;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  return <Container>Hello World!</Container>;
}
