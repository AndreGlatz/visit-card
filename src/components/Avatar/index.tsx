import React from "react";
import { Image } from "./styles";

type Props = {
  avatarUrl?: string;
};

export const Avatar: React.FC<Props> = (props: Props) => {
  return <Image imageUrl={props.avatarUrl ?? "/anon.jpg"} />;
};
