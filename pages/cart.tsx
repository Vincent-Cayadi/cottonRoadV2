import Head from "next/head";
import Navbar from "../components/navbar";

export default function Cart() {
  return (
    <>
      <Head>
        <title> Cart | Cotton Road</title>
        <meta name="description" content="Cart | Cotton Road" />
      </Head>
      <main>
        <Navbar />
        <div className="grid w-2/3 h-screen grid-cols-3 p-4 mx-auto">
          <div className="col-span-1 border-r-2">
            <div className="w-full h-full px-4 ">
              <div className="p-2 border rounded-md shadow-md shadow-cyan-100 h-1/5">
                <div className="grid h-full place-items-center">
                  <p>Product 1</p>
                </div>
              </div>
              <div className="p-2 mt-4 border rounded-md shadow-md shadow-cyan-100 h-1/5">
                <div className="grid h-full place-items-center">
                  <p>Product 2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid w-full col-span-2 p-4 mx-4 border rounded-md drop-shadow-md h-2/3">
            This is the price list
          </div>
        </div>
      </main>
    </>
  );
}
