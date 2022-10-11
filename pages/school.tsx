import Head from "next/head";
import Navbar from "../components/navbar";

export default function Cart() {
  return (
    <>
      <Head>
        <title> Schools | Cotton Road</title>
        <meta name="description" content="Cart | Cotton Road" />
      </Head>
      <main>
        <Navbar />
        <section className="w-full mx-auto text-center"></section>
      </main>
    </>
  );
}
