import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: #332d39;
  border: 1px solid #a54bff;
  box-sizing: border-box;
  box-shadow: 0px 10px 15px -2px rgba(5, 5, 5, 0.63);
  border-radius: 7px;
  padding: 0em 2.3em;
  font-size: 1.3rem;
  color: #f5f5f5;
  caret-color: #6800d0;
  line-height: 1000px;

  ${this}::placeholder {
    color: #818181;
    font-size: 1.3rem;
  }

  ${this}:focus {
    outline: 0;
  }

  ${this}:-webkit-autofill, ${this}:-webkit-autofill:hover, ${this}:-webkit-autofill:focus {
    border: 1px solid #a54bff;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0 10px #332d39 inset;
    box-shadow: 1px 10px 22px -2px rgba(0, 0, 0, 0.63);
    transition: background-color 5000s ease-in-out 0s;
    background: #332d39;
    outline: 0;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 11.3%;
  min-height: 70px;
  width: 48.5%;
  min-width: 260px;

  img {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  #at {
    left: 17px;
    width: 1.5em;
    height: 1.5em;
  }

  #github-logo {
    right: 17px;
    width: 2.3em;
    height: 2.3em;
  }
`;
