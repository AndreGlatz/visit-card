import { Layout, Title, ArrowBack } from "@App/components";
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
      <ArrowBack href="http://localhost:3000" />
      <Title>{text}</Title>
    </Layout>
  );
};

export default Text;
