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
        <section className="grid w-full h-screen place-items-center">
          <h1 className="text-2xl">🏗️ Under Construction 🏗️</h1>
        </section>
      </main>
    </>
  );
}
