import { Layout, Title } from "@App/components";
import { useRouter } from "next/router";
import React from "react";

const Text: React.FC = () => {
  const router = useRouter();
  const { text } = router.query;

  return (
    <Layout>
      <Title>{text}</Title>
    </Layout>
  );
};

export default Text;
