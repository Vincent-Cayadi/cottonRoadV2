import Link from "next/link";

export default function Navbar() {
  const value = 0;
  return (
    <>
      <div className="sticky top-0 z-50 hidden w-full mx-auto mt-2 bg-white shadow-sm sm:block">
        <nav className="flex justify-between w-full py-4 mx-auto">
          <p className="m-auto text-left align-middle ">Cotton Road</p>

          <div className="m-auto text-center">
            <Link href="/school">
              <a className="mx-4 text-lg align-middle duration-300 border-b-2 border-white cursor-pointer duration-400 hover:border-black">
                Schools
              </a>
            </Link>
            <a className="mx-4 text-lg align-middle duration-300 border-b-2 border-white cursor-pointer duration-400 hover:border-black">
              SL Projects
            </a>
            <Link href="/cart">
              <div className="inline-block px-6 py-2 mx-4 text-center align-middle duration-300 border-2 border-black rounded-full cursor-pointer hover:bg-black hover:text-white">
                <div className="grid w-full h-full grid-cols-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 my-auto align-middle"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <p className="inline-block">{value}</p>
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
