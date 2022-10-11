import Head from "next/head";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Cotton Road</title>
        <meta name="description" content="Home | Cotton Road" />
      </Head>
      <Navbar />
      <main>
        <section className="mx-auto sm:w-4/5 bg-grey-600">
          <h1 className="w-full text-2xl text-center">New Arrivals</h1>
        </section>
      </main>
    </>
  );
}
