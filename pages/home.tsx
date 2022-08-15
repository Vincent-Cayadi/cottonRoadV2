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
      <main className="mt-4">
        <div className="hidden sm:block">
          <nav className="flex justify-between w-full py-4 mx-auto border-b ">
            <p className="m-auto text-left align-middle ">Cotton Road</p>
            <input
              type="text"
              placeholder="Search.."
              className="w-3/5 px-4 py-2 duration-300 border border-gray-300 rounded-md hover:border-gray-900 "
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
        <div className="w-full mt-2">Hello</div>
      </main>
    </>
  );
}
