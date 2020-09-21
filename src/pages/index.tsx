import React, { useState } from "react";
import { Layout, TextInput } from "@App/components";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function redirect(event: React.KeyboardEvent<HTMLInputElement>) {
    const key = event.key;

    if (key === "Enter") {
      router.push(`http://localhost:3000/${value}`);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Layout>
      <TextInput
        placeholder="Write anything"
        onChange={handleChange}
        onKeyDown={redirect}
      />
    </Layout>
  );
}
