import Head from "next/head";
import Navbar from "../components/navbar";


export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Cotton Road</title>
        <meta name="description" content="Home | Cotton Road" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
