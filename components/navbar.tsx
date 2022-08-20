import Link from "next/link";

import {
  AiOutlineFire,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-50 hidden sm:block">
        <nav className="flex justify-between w-full py-4 mx-auto bg-white">
          <p className="m-auto text-left align-middle ">Cotton Road</p>
          <input
            type="text"
            placeholder="Search.."
            className="w-2/3 px-4 py-2 duration-300 border border-gray-300 rounded-md hover:border-gray-900 "
          />

          <div className="m-auto">
            <Link href="/cart">
              <div className="inline-block mx-4 cursor-pointer">
                <AiOutlineShoppingCart size="1.8rem" className="mx-auto" />
              </div>
            </Link>
            <div className="inline-block mx-4 cursor-pointer">
              <AiOutlineUser size="1.8rem" className="mx-auto" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
