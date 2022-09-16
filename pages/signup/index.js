/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Layout from "../../components/Layout";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import { Checkbox } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Layout title={"Sign Up"}>
      {" "}
      <div className=" py-12 h-full overflow-hidden w-full flex flex-col justify-center items-center ">
        <div className="fadeIn w-11/12 md:w-4/12  bg-white rounded-xl shadow-2xl flex flex-col px-8 py-16">
          {/* Body  */}
          <div className="body">
            <h2 className="text-2xl font-medium">Create a Lapaas ID</h2>
            <p className="text-gray-700 text-sm mt-1">
              One last step before starting your free trial.
            </p>
            <div className="my-5 space-y-5">
              {/* Email  */}
              <div>
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              {/* Password  */}
              <div>
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <div className="relative text-gray-600 focus-within:text-gray-400 ">
                  <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                    <button type="submit" className="h-full px-3">
                      {open === false ? (
                        <FaEyeSlash onClick={toggle} className="text-2xl" />
                      ) : (
                        <FaEye onClick={toggle} className="text-2xl" />
                      )}
                    </button>
                  </span>
                  <input
                    type={open === false ? "password" : "text"}
                    id="password"
                    name="password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              {/* Confirm Password  */}
              <div>
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Confirm Password
                </label>
                <div className="relative text-gray-600 focus-within:text-gray-400 ">
                  <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                    <button type="submit" className="h-full px-3">
                      {open === false ? (
                        <FaEyeSlash onClick={toggle} className="text-2xl" />
                      ) : (
                        <FaEye onClick={toggle} className="text-2xl" />
                      )}
                    </button>
                  </span>
                  <input
                    type={open === false ? "password" : "text"}
                    id="confirm-password"
                    name="confirm-password"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <Checkbox
                label="Remember Me"
                className="leading-7 text-sm text-gray-600"
              />
              <button className="text-white bg-gray-900 py-2 px-6 focus:outline-none rounded text-lg w-full border-2 border-gray-900">
                Sign Up
              </button>
              <div className="flex justify-center items-center gap-3">
                <div className="border-t border-gray-500 w-full"></div>
                <button>or</button>
                <div className="border-t border-gray-500 w-full"></div>
              </div>
              <div className="flex justify-center items-center gap-10">
                <div>
                  <img
                    src="/facebook-round-color-icon.svg"
                    alt=""
                    className="w-7 h-7 cursor-pointer"
                  />
                </div>
                <div>
                  <FcGoogle className="text-3xl cursor-pointer" />
                </div>
              </div>
            </div>
            {/* <p className="text-gray-700 text-sm">
              By proceeding, you agree to the{" "}
              <a href="#">
                <span className="text-teal-500 hover:underline cursor-pointer">
                  Terms and Conditions
                </span>
              </a>
            </p> */}
            <p className="text-gray-700 text-sm mt-5 text-center">
              Already have a Lapaas ID?{" "}
              <a href="#">
                <span className="text-teal-500 hover:underline cursor-pointer">
                  Log in
                </span>
              </a>
            </p>
            {/* <div className="font-medium text-sm flex justify-end items-center text-gray-700 gap-8 mt-16">
              <p className="cursor-pointer">Help</p>
              <p className="cursor-pointer">Privacy</p>
              <p className="cursor-pointer">Terms</p>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
