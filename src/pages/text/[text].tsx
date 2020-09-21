import { Layout } from "@App/components";
import { useRouter } from "next/router";
import React from "react";

const Text: React.FC = () => {
  const router = useRouter();
  const { text } = router.query;

  return (
    <Layout>
      <h1>{text}</h1>
    </Layout>
  );
};

export default Text;
