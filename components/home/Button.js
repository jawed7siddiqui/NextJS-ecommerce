import Link from "next/link";
import React from "react";

export default function Button() {
  return (
    <>
      <Link href={"/onboarding"}>
        <button className="flex flex-col justify-center items-center bg-secondary rounded-md w-full md:w-4/5 h-20 md:h-24 mt-10 text-white">
          <span className="font-bold text-base md:text-xl">
            Build Your Store Now
          </span>
          <span className="text-gray-400 text-xs md:text-sm">
            It’s 100% FREE
          </span>
        </button>
      </Link>
    </>
  );
}
