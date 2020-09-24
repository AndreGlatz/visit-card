import React, { useState } from "react";
import { Layout, TextInput } from "@App/components";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const [value, setValue] = useState("");

  function redirect(event: React.KeyboardEvent<HTMLInputElement>) {
    const key = event.key;
    const host = window.location.href;

    if (key === "Enter") {
      router.push(`${host}users/${value}`);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <TextInput
        placeholder="Write your GitHub user"
        onChange={handleChange}
        onKeyDown={redirect}
      />
    </Layout>
  );
}
