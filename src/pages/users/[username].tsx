import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Layout, Card, ArrowBack } from "@App/components";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { username } = router.query;

  const [host, setHost] = useState<string>("#");
  const [card, setCard] = useState<JSX.Element>();

  useEffect(() => {
    let tempHost = window.location.protocol + "//" + window.location.host;
    setHost(tempHost);
  }, []);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${username}`).then((response) => {
      setCard(<Card user={response.data} />);
    });
  }, [username]);

  return (
    <Layout>
      <Head>
        <title>User</title>
      </Head>
      <ArrowBack href={host} />
      {card}
    </Layout>
  );
}
