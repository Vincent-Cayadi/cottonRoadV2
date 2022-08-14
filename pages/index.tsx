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
        className="relative flex flex-col-reverse justify-center w-2/3 mx-auto h-max sm:flex-row sm:h-screen sm:w-full"
      >
        <div className="block w-full h-full sm:w-1/2 sm:grid sm:place-items-center">
          <p className="text-xl text-center align-middle sm:text-2xl sm:text-left">
            A place where students can buy merchendise from one another
          </p>
        </div>
        <div className="grid w-full sm:w-1/2 place-items-center">
          <div className="w-full h-4/5">
            <Deal className="block w-full h-full text-indigo-500" />
            <div className="absolute right-0 invisible block w-2/4 bg-purple-200 rounded-l-full bottom-60 sm:visible -z-10 h-2/6"></div>
          </div>
        </div>
      </section>
      <section className="relative flex flex-col justify-center w-2/3 mx-auto h-max sm:h-screen sm:flex-row sm:w-full">
        <div className="grid w-full sm:w-1/2 place-items-center">
          <div className="w-full h-4/5">
            <Stripe className="block w-full h-full text-indigo-500" />
            <div className="absolute left-0 invisible block w-2/4 bg-purple-200 rounded-r-full bottom-60 sm:visible -z-10 h-2/6"></div>
          </div>
        </div>

        <div className="block w-full h-full sm:w-1/2 sm:grid sm:place-items-center">
          <p className="text-xl text-center align-middle sm:text-2xl sm:text-left">
            Payment is done securely through Stripe
          </p>
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
