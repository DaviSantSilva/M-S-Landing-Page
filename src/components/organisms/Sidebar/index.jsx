import React, { useState } from "react";
import Image from "next/image";
import msLogo from "public/msloogo-branco-snome.png";

const Sidebar = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);

  return (
    <>
      <nav class="bg-ms-hard-blue px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div class="container flex flex-wrap items-center justify-between mx-auto ">
          <a href="https://flowbite.com/" class="flex items-center">
            <Image src={msLogo} height={70} alt="M&S logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap p-4 text-white ">
              M&S
            </span>
          </a>
          <div class="flex md:order-2">
            <button
              onClick={handleToggle}
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class={
              toggle
                ? "items-center justify-between w-full "
                : "md:flex md:w-auto md:order-1 hidden "
            }
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-clear-bege md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-clear-bege md:p-0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-clear-bege md:p-0 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-white md:hover:text-clear-bege md:p-0 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
