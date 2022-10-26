import Head from "next/head";
import Navbar from "../components/navbar";
import Card from "../components/card";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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
          <h1 className="w-full my-2 text-2xl text-left">New Arrivals</h1>
          <h1 className="w-full my-2 text-2xl text-left">Schools</h1>
          <h1 className="w-full my-2 text-2xl text-left">Projects</h1>
        </section>
      </main>
    </>
  );
}
