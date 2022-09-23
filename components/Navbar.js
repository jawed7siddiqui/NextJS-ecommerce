import { useState, useEffect } from "react";

import { RiMenu5Fill } from "react-icons/ri";
import { HiX } from "react-icons/hi";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-between pt-5 items-center container mx-auto px-10 border-b-[3px] border-textColor pb-4">
        <Link href={"/"}>
          <h2 className="text-4xl cursor-pointer text-textColor">LAPAAS</h2>
        </Link>
        <button className="bg-textColor text-primaryLight rounded-full p-2 text-3xl">
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
                  Consultancy
                </h2>
              </Link>
              <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                Devlopment
              </h2>
              <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                Consultant
              </h2>
              <Link href={"/course"}>
                <h2 className="bg-primaryLight cursor-pointer text-xl md:text-2xl transition duration-300 ease-in-out p-3 rounded hover:scale-105">
                  Course
                </h2>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
