import React from "react";
import {
  Container,
  ProfileContainer,
  ProfileInfo,
  ProfileName,
  ProfileNumber,
  ProfileBio,
} from "./styles";
import { Avatar } from "@App/components";
import { User } from "@App/model/User";

type Props = {
  user?: User;
};

export const Card: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <img src="/github-solid.svg" alt="github logo" className="github" />
      <ProfileContainer>
        <Avatar avatarUrl={props.user?.avatar_url} />
        <ProfileInfo>
          <ProfileName>{props.user?.name}</ProfileName>
          <ProfileNumber>
            {`${props.user?.followers} followers • ${props.user?.following} following • ${props.user?.public_repos} Repositories`}
          </ProfileNumber>
          <h3>{props.user?.login}</h3>
          <ProfileBio>{props.user?.bio}</ProfileBio>
        </ProfileInfo>
      </ProfileContainer>
    </Container>
  );
};
