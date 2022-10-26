import Head from "next/head";
import Navbar from "../components/navbar";

export default function Cart() {
  return (
    <>
      <Head>
        <title> Cart | Cotton Road</title>
        <meta name="description" content="Cart | Cotton Road" />
      </Head>
      <main>
        <Navbar />
      </main>
    </>
  );
}
