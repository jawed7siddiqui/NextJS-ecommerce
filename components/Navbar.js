import { FaUserAlt } from "react-icons/fa";
import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="h-8 bg-primaryLight text-center flex justify-center items-center">
        <p className="text-primary font-bold text-sm md:text-base">
          Here goes your product promotional offer
        </p>
      </div>
      {/* <header className="text-primary body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl uppercase font-bold bg-primary text-primaryLight rounded-sm px-3 py-1">
              Lapaas
            </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center justify-center font-medium text-base md:text-xl gap-5">
            <a className="uppercase">Got any Questions?</a>
            <a className="uppercase">
              <div className="flex items-center space-x-2">
                <div>
                  <FaUserAlt className="bg-primary text-primaryLight rounded-full p-1 text-2xl md:text-3xl" />
                </div>
                <span>0987564123</span>
              </div>
            </a>
          </nav>
        </div>
      </header> */}
      <header className="py-3 md:py-5">
        <div className="flex justify-between container mx-auto px-5">
          <a className="flex font-medium items-center">
            <span className="text-xl uppercase font-bold bg-primary text-primaryLight rounded-sm px-3 py-1">
              Lapaas
            </span>
          </a>
          <div>
            <Link href="/onboarding">
              <button className="text-xl font-normal bg-primaryLight text-primary rounded px-3 py-1 flex justify-center items-center gap-3 shadow-lg border-2 border-primary hover:scale-105">
                <span className="hidden md:block">Create Site </span>
                <div>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="h-8 bg-primaryLight text-center flex justify-center items-center">
        <p className="text-primary text-sm md:text-base">
          [Brand Name]: Company slogan goes here
        </p>
      </div>
    </>
  );
}
