import Head from "next/head";
import Hero from "../components/Hero";
import Stream from "../components/Stream";

export default function Home() {
  return (
    <>
      <Head>
        <title>funXshow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Stream />
    </>
  );
}
