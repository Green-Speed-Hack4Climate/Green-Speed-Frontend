import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-green-700">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-none">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* <!-- Mobile menu button--> */}
            <button
              type="button"
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                class="hidden h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="flex items-center justify-between ">
            <div class="items-center">
              <img
                src="Green Speed.png"
                alt="Green speed logo"
                className="rounded-full h-24 w-24"
              />
            </div>
            <div class="sm:ml-6 sm:block">
              <div class="flex">
                <Link
                  to="/"
                  className=" text-white rounded-md px-3 py-2 text-sm font-medium relative"
                  aria-current="page"
                >
                  Home
                  <span class="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform scale-x-0 origin-left transition-transfor group-hover:scale-x-100"></span>
                </Link>
                <Link
                  to="/details"
                  className="text-white rounded-md px-3 py-2 text-sm font-medium relative">

                  Transport Vehicles
                 
                </Link>
                <Link
                  to="/contactus"
                  className="text-white rounded-md px-3 py-2 text-sm font-medium relative"
                >
            Contact Us
                 
                </Link>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex gap-4 items-center">
            <button className="rounded-full border-2 border-green-200 p-2 w-32 hover:bg-yellow-400 text-white">
              Sign Up
            </button>
            <button className="rounded-full border-2 border-green-200 p-2 w-32 hover:bg-yellow-400  text-white">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
