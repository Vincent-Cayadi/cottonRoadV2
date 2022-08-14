import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Deal from "../public/deals.svg";
import Stripe from "../public/stripe.svg";
import RecRight from "../public/recRight.svg";
export default function Index() {
  return (
    <>
      <Head>
        <title> Welcome | Cotton Road</title>
        <meta name="description" content="Welcome to Cotton Road" />
      </Head>
      <section className="grid w-3/4 h-screen mx-auto place-items-center">
        <div>
          <p className="text-2xl font-semibold align-middle sm:text-5xl ">
            Welcome to Cotton Road!
          </p>
          <div className="flex justify-start mt-4 sm:justify-center">
            <Link href="#lm">
              <a className="px-4 py-2 mr-4 text-base text-center text-white align-middle duration-300 bg-indigo-300 border-2 border-indigo-300 rounded-md cursor-pointer sm:text-lg sm:hover:bg-white sm:hover:text-black ">
                Learn More
              </a>
            </Link>
            <Link href="home">
              <a className="px-4 py-2 text-base text-center text-white align-middle duration-300 bg-indigo-300 border-2 border-indigo-300 rounded-md cursor-pointer x-4 sm:text-lg sm:hover:bg-white sm:hover:text-black ">
                Enter App
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="lm"
        className="relative grid w-2/3 h-screen grid-cols-1 mx-auto sm:grid-cols-2 sm:w-full place-items-center"
      >
        <div className="grid w-full h-1/5 place-items-center">
          <div>
            <p className="text-3xl text-center align-middle sm:text-left">
              A place where students can
            </p>
            <p className="text-3xl text-center align-middle sm:text-left">
              buy merchendise from one another
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <Deal className="block w-full h-full text-indigo-500" />
          <div className="absolute right-0 block w-2/4 overflow-hidden bg-purple-100 rounded-l-full bottom-20 -z-10 h-2/5"></div>
        </div>
      </section>
      <section className="relative grid w-2/3 h-screen grid-cols-1 mx-auto sm:grid-cols-2 sm:w-full place-items-center">
        <div className="w-full h-full">
          <Stripe className="block w-full h-full text-indigo-500" />
        </div>
        <div>
          <p className="text-3xl text-center align-middle sm:text-right">
            Payments are made secure using Stripe
          </p>
          <div className="absolute left-0 block w-2/4 overflow-hidden bg-purple-100 rounded-r-full bottom-20 -z-10 h-2/5"></div>
        </div>
      </section>
      <section className="grid w-3/4 h-screen mx-auto place-items-center">
        <div>
          <h1 className="text-2xl font-bold text-center sm:text-5xl">
            What are you waiting for
          </h1>
          <div className="flex justify-center mt-4">
            <Link href="home">
              <a className="px-4 py-2 text-base text-center text-white align-middle duration-300 bg-indigo-300 border-2 border-indigo-300 rounded-md cursor-pointer x-4 sm:text-lg sm:hover:bg-white sm:hover:text-black ">
                Shop Now!
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
