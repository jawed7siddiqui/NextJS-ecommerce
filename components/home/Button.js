import Link from "next/link";
import React from "react";

export default function Button() {
  return (
    <>
      <button className="flex flex-col justify-center items-center bg-pinkDark text-white rounded-sm p-3 w-60 md:w-96">
        <span className="font-bold text-base md:text-xl ">
          Build Your Store Now
        </span>
        <span className="text-xs md:text-sm">It’s 100% FREE</span>
      </button>
    </>
  );
}
