"use client";
import { useUserContext } from "@/context/userContext";
import Link from "next/link";

const Navbar = () => {
  const { loggedInUser, logout } = useUserContext();

  return (
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
        <div className="bg-gradient-to-r from-purple-400 to-red-400 w-10 h-10 rounded-lg"></div>
        <h1 className="text-3xl text-gray-600 ml-2">Logo</h1>
      </div>
      <div className="mt-2">
        <Link
          href="/"
          className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
        >
          Home
        </Link>
        {loggedInUser && (
          <Link
            href="/products"
            className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
          >
            Products
          </Link>
        )}
        <Link
          href="/"
          className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
        >
          Contact
        </Link>
        {loggedInUser ? (
          <Link
            href="/"
            onClick={() => logout()}
            className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
          >
            Logout
          </Link>
        ) : (
          <Link
            href="/login"
            className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"
          >
            Login
          </Link>
        )}
        {loggedInUser && (
          <Link
            href="/cart"
            className="bg-purple-600 text-gray-50 hover:bg-purple-700 p-3 px-3 sm:px-5 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 inline-block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Cart (0)
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
