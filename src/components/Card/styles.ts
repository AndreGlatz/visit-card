import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-width: 42%;
  max-width: 80%;
  min-height: 31.6%;
  max-height: 70%;
  background: #332d39;
  border: 2px solid #a54bff;
  box-shadow: 1px 10px 22px -2px rgba(0, 0, 0, 0.63);
  border-radius: 10px;
  padding: 0.79rem;

  .github {
    width: 2.25rem;
    height: 2.25rem;
    position: absolute;
    display: block;
    right: 0.79rem;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin: 1.5rem 1.3rem;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  max-width: 29rem;
  width: 100%;
  margin-left: 25px;

  h1,
  h3,
  p {
    display: block;
  }

  h3 {
    color: #c7c7c7;
    font-weight: 300;
    font-size: 1.2rem;
  }

  p {
    min-width: 20rem;
  }
`;

export const ProfileName = styled.h1`
  color: #ebebeb;
  font-size: 2.9rem;
  font-weight: 700;
`;

export const ProfileNumber = styled.p`
  color: #c7c7c7;
  font-size: 0.89rem;
`;

export const ProfileBio = styled.p`
  color: #ebebeb;
  font-size: 1.1rem;
  margin-top: 20px;
`;
