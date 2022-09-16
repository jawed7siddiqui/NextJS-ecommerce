/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="">
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <h1 className="text-4xl font-bold lg:text-5xl text-center text-white flex flex-col gap-1 md:gap-3 capitalize">
                Create your online store in Less than <br /> 60 seconds!
              </h1>
              <p className="mt-6 text-white text-center font-medium text-xl md:text-2xl w-5/6 mx-auto">
                A tool that allows you to build your online store in a few
                seconds without any technical knowledge and without paying any
                commission or monthly charges.
              </p>
              <div className="flex justify-center items-center">
                <Button />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 p-5">
            <img
              className="w-full h-full lg:max-w-2xl rounded-sm"
              src="https://dummyimage.com/600x400/67cf99/262626.png"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
