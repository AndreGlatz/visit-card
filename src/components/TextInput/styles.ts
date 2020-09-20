import styled from "styled-components";

export const Input = styled.input`
  height: 13%;
  width: 50%;
  background: #f5f5f5;
  border: 2px solid #67319c;
  box-sizing: border-box;
  box-shadow: 1px 10px 22px -2px rgba(0, 0, 0, 0.63);
  border-radius: 10px;
  padding: 0em 2.3em;
  font-size: 1.3rem;

  ${this}::placeholder {
    font-size: 1.3rem;
  }
`;
