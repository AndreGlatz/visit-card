import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background: linear-gradient(to bottom, #6800d0 50%, #332d39 0%);
`;

export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  padding-left: 10px;
  bottom: 0;
  font-size: 0.8rem;
  color: #ededed;

  a {
    color: #8a789c;
  }
`;
