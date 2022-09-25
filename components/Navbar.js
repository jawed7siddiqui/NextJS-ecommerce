/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";

import { RiMenu5Fill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import Link from "next/link";
import LapaasLogo from "./svg/LapaasLogo";
import { FaLock } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between pt-5 items-center container mx-auto px-10 border-b-[3px] border-textColor pb-4">
        <Link href={"/"}>
          <div className="flex justify-center place-items-end">
            <img src="/Logo.png" className="h-14" alt="Logo" />
            <h2 className="text-4xl cursor-pointer text-textColor">LAPAAS</h2>
          </div>
        </Link>
        {/* <LapaasLogo /> */}
        <div className="hidden md:block">
          <div className="flex justify-center items-center gap-5">
            <ul className="text-textColor text-xl flex justify-center items-center gap-5">
              <Link href={"/"}>
                <li className="cursor-pointer hover:text-pinkDark transition-all duration-300 ease-in-out">
                  Home
                </li>
              </Link>
              <Link href={"/services"}>
                <li className="cursor-pointer hover:text-pinkDark transition-all duration-300 ease-in-out">
                  Services
                </li>
              </Link>
              <Link href={"/course"}>
                <li className="cursor-pointer hover:text-pinkDark transition-all duration-300 ease-in-out">
                  Course
                </li>
              </Link>
              <Link href={"/consultation"}>
                <li className="cursor-pointer hover:text-pinkDark transition-all duration-300 ease-in-out">
                  Consultation
                </li>
              </Link>
              <Link href={process.env.NEXT_PUBLIC_BLOG_ADDRESS} target="_blank">
                <li className="cursor-pointer hover:text-pinkDark transition-all duration-300 ease-in-out">
                  Blog
                </li>
              </Link>
            </ul>
            <Link href={"/login"}>
              <button className="flex justify-center items-center bg-pinkDark text-white rounded-sm py-1 px-2 text-xl gap-2">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <button className="block md:hidden bg-textColor text-primaryLight rounded-full p-2 text-3xl">
          {isOpen ? (
            <HiX className="text-3xl" onClick={() => setIsOpen(!isOpen)} />
          ) : (
            <RiMenu5Fill
              className="text-3xl"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </button>
      </nav>
      {isOpen && (
        <div className="backdrop-blur-md z-50 flex m-auto py-5 items-center fixed inset-0 h-full w-full">
          <div className="mx-auto p-8 md:p-20 h-full flex-col flex justify-evenly items-center gap-5 w-11/12 rounded bg-textColor relative ">
            <button className="flex top-5 right-5 absolute bg-primaryLight rounded-full p-2 text-textColor text-xl justify-center items-center gap-3">
              <div>
                {isOpen ? (
                  <HiX
                    className="text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                ) : (
                  <RiMenu5Fill
                    className="text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                )}
              </div>
            </button>
            <div>
              <h2 className="text-5xl text-white">LAPAAS</h2>
            </div>
            <div className="space-y-5">
              <Link href={"/"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Home
                </h2>
              </Link>
              <Link href={"/services"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Services
                </h2>
              </Link>
              <Link href={"/consultancy"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Consultation
                </h2>
              </Link>
              <Link href={"/course"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Course
                </h2>
              </Link>
              <Link href={"/signup"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Sign In
                </h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
