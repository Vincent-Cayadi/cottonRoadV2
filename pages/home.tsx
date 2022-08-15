import Head from "next/head";
import Link from "next/link";

import {
  AiOutlineFire,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | Cotton Road</title>
        <meta name="description" content="Home | Cotton Road" />
      </Head>
      <main>
        <div className="sticky top-0 hidden sm:block ">
          <nav className="flex justify-between w-full py-4 mx-auto bg-white">
            <p className="m-auto text-left align-middle ">Cotton Road</p>
            <input
              type="text"
              placeholder="Search.."
              className="w-2/3 px-4 py-2 duration-300 border border-gray-300 rounded-md hover:border-gray-900 "
            />

            <div className="m-auto">
              <Link href="/latest">
                <div className="inline-block mx-4 cursor-pointer">
                  <AiOutlineFire size="1.8rem" className="mx-auto" />
                  <p className="text-sm align-middle ">Latest</p>
                </div>
              </Link>
              <Link href="/cart">
                <div className="inline-block mx-4 cursor-pointer">
                  <AiOutlineShoppingCart size="1.8rem" className="mx-auto" />
                  <p className="text-sm align-middle">Cart</p>
                </div>
              </Link>
              <div className="inline-block mx-4 cursor-pointer">
                <AiOutlineUser size="1.8rem" className="mx-auto" />
                <p className="text-sm align-middle">Login</p>
              </div>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
}
