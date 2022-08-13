import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Cotton Road</title>
        <meta name="description" content="Home Page of Cotton Road" />
      </Head>
      <div className="grid w-screen h-screen place-items-center">
        <p className="text-4xl font-bold align-middle font-manrope">
          Welcome to Cotton Road!
        </p>
      </div>
    </>
  );
}
