import { Layout, Title } from "@App/components";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const Text: React.FC = () => {
  const router = useRouter();
  const { text } = router.query;

  return (
    <Layout>
      <Head>
        <title>Your text ❤️</title>
      </Head>
      <Title>{text}</Title>
    </Layout>
  );
};

export default Text;
