"use client";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <Link href="/">
        <h1 className="absolute z-10 left-10 top-10 text-lg md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Social Share
        </h1>
      </Link>

      <div className="absolute z-10 top-10 right-10">
        <Link href="/sign-in">
          <button className="hover:to-neutral-400 bg-gradient-to-b from-neutral-700 to-neutral-500 h-11 rounded-full px-8 mr-2">
            Sign in
          </button>
        </Link>

        <Link href="/home">
          <button className="hover:to-neutral-400 bg-gradient-to-b from-neutral-500 to-neutral-300 h-11 rounded-full px-4 ml-2">
            Get Started
          </button>
        </Link>
      </div>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Social Share
        </h1>
        <p className="text-neutral-500 max-w-xl mx-auto my-2 text-2xl text-center relative z-10 mt-10 from-neutral-200">Social Share makes it simple to create share-ready content in seconds!</p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-md text-center relative z-10 mt-6">
        Welcome to Social Share, your ultimate tool for transforming and optimizing your media for social media platforms. With Social Share, you can effortlessly upload your cherished memories and convert them into the perfect format for Instagram, Twitter, Facebook, and more.
        </p>
        <div className="flex justify-center mt-8 relative z-10">
          <Link href="/home">
            <button className="hover:to-neutral-400 bg-gradient-to-b from-neutral-700 to-neutral-500 h-11 rounded-full px-8">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
