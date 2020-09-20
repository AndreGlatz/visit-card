import React from "react";
import Background from "@App/components/Background";
import TextInput from "@App/components/TextInput";
import FlexContainer from "@App/components/FlexContainer";

export default function Home() {
  return (
    <Background>
      <FlexContainer>
        <TextInput placeholder="Write anything" />
      </FlexContainer>
    </Background>
  );
}
