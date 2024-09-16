"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* <Link href="/">
        <h1 className="absolute z-10 left-4 top-4 text-base md:text-lg lg:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Social Share
        </h1>
      </Link> */}

      <div className="absolute z-10 top-0 right-0 md:top-4 md:right-4">
        <div className="md:hidden">
          {/* Hamburger Menu Icon */}
          <button
            className="text-neutral-200 focus:outline-none"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 absolute z-10 top-4 right-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 absolute z-10 top-4 right-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-0 right-0 bg-slate-700 shadow-lg flex flex-col space-y-2 w-[224px] h-screen py-16">
              <Link href="/sign-in">
                <button className="block text-left text-xl w-full px-6 py-2 text-neutral-100 hover:bg-neutral-800">
                  Sign in
                </button>
              </Link>
              <Link href="/home">
                <button className="block text-left text-xl w-full px-6 py-2 text-neutral-100 hover:bg-neutral-800">
                  Get Started
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="hidden md:flex space-x-2">
          {/* <Link href="/sign-in">
            <button className="hover:to-neutral-600 bg-gradient-to-b from-neutral-900 to-neutral-700 h-11 rounded-full px-8">
              Sign in
            </button>
          </Link> */}
          {/* <Link href="/home">
            <button className="hover:to-neutral-400 bg-gradient-to-b from-neutral-500 to-neutral-300 h-11 rounded-full px-8">
              Get Started
            </button>
          </Link> */}
        </div>
      </div>

      <div className="max-w-lg md:max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Social Share
        </h1>
        <p className="text-neutral-500 max-w-md md:max-w-xl mx-auto my-2 text-lg md:text-2xl text-center relative z-10 mt-6 md:mt-10">
          Social Share makes it simple to create share-ready content in seconds!
        </p>
        <p className="text-neutral-500 max-w-sm md:max-w-lg mx-auto my-2 text-sm md:text-md text-center relative z-10 mt-4 md:mt-6">
          Welcome to Social Share, your ultimate tool for transforming and
          optimizing your media for social media platforms. With Social Share,
          you can effortlessly upload your cherished memories and convert them
          into the perfect format for Instagram, Twitter, Facebook, and more.
        </p>
        <div className="flex justify-center mt-6 md:mt-8 relative z-10">
          <div className="hidden md:flex space-x-2">
            <Link href="/home">
              <button className="hover:to-neutral-400 bg-gradient-to-b from-neutral-700 to-neutral-500 h-9 md:h-11 rounded-full px-6 md:px-6">
                Get Started
              </button>
            </Link>
            <Link href="/sign-in">
              <button className="hover:to-neutral-600 bg-gradient-to-b from-neutral-900 to-neutral-700 h-11 rounded-full md:px-10">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}