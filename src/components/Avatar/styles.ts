import styled from "styled-components";

type Props = {
  imageUrl: string;
};

export const Image = styled.div<Props>`
  min-width: 8.85rem;
  min-height: 8.85rem;
  background: green;
  border-radius: 50%;
  background: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
