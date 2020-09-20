import React, { useState } from "react";
import { Input } from "./styles";
import { useRouter } from "next/router";

type Props = {
  placeholder?: any;
};

const TextInput: React.FC<Props> = (props: Props) => {
  const router = useRouter();
  const [value, setValue] = useState("");

  function redirect(event: React.KeyboardEvent<HTMLInputElement>) {
    const key = event.key;

    if (key === "Enter") {
      router.push(`https://localhost:3000/${value}`);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Input
      name="text"
      type="text"
      placeholder={props.placeholder}
      onKeyDown={redirect}
      onChange={handleChange}
    />
  );
};

export default TextInput;
