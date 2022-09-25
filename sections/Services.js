/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AiFillFolder } from "react-icons/ai";
import Marketing from "../components/svg/Marketing";

export default function Services() {
  return (
    <>
      <section className="bg-textColor text-primaryLight ">
        <div className="container mx-auto px-5 md:px-0 py-12 md:py-24 flex justify-center items-center gap-10">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center bg-pink rounded border-8 border-[#C1EFFF] shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
                <h2 className="text-white bg-textColor p-3 rounded text-5xl top-4">
                  Marketing
                </h2>
                <img src="/assets/Marketing.svg" alt="" className="h-80" />
              </div>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center   bg-primaryLight rounded border-8 border-[#C1EFFF] shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
                <h2 className="text-white bg-textColor p-3 rounded text-5xl top-4">
                  Development
                </h2>
                <img
                  src="/assets/Application-development.svg"
                  alt=""
                  className="h-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
