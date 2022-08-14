import Head from "next/head";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <Head>
        <title> Welcome | Cotton Road</title>
        <meta name="description" content="Welcome to Cotton Road" />
      </Head>
      <section className="grid w-3/4 h-screen mx-auto place-items-center">
        <div>
          <p className="text-2xl font-bold align-middle sm:text-4xl font-manrope">
            Welcome to Cotton Road!
          </p>
          <div className="flex justify-start mt-4 sm:justify-center">
            <Link href="#lm">
              <a className="px-4 py-2 mr-2 text-base text-center text-white align-middle duration-300 border-2 rounded-md cursor-pointer sm:text-lg border-neutral-900 bg-neutral-900 sm:text-bold font-manrope sm:hover:bg-transparent sm:hover:text-neutral-900">
                Learn More
              </a>
            </Link>
            <Link href="home">
              <a className="px-4 py-2 text-base text-center text-white align-middle duration-300 border-2 rounded-md cursor-pointer sm:text-lg border-neutral-900 bg-neutral-900 sm:text-bold font-manrope sm:hover:bg-transparent sm:hover:text-neutral-900">
                Enter App
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section id="lm" className="h-screen bg-slate-400">
        Hello
      </section>
    </>
  );
}
