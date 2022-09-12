/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Section1() {
  return (
    <>
      <section>
        <div className="container mx-auto -mt-40">
          <p className="text-2xl text-primary font-bold mb-6">
            Watch the Demo:
          </p>
          <div className="md:grid grid-cols-3 gap-10">
            <div className="border-[3px] border-primary rounded-md h-72">
              <img
                className="w-full h-full"
                src="https://dummyimage.com/600x400/fff/047857.png"
                alt=""
              />
            </div>
            <div className="border-[3px] text-primary text-center border-primary rounded-md col-span-2 h-72 flex justify-center items-center bg-white">
              <div className="space-y-6">
                <p className="capitalize text-xl font-bold">
                  Describe how you make an impact
                </p>
                <p className="text-lg w-4/6 mx-auto font-medium">
                  Add social proof early on to show how many similar people are
                  using your product and get amazing results.
                </p>
                <div className="flex space-x-10 justify-center items-center">
                  <div className="flex flex-col justify-center items-center">
                    <span className="text-4xl font-bold">100K</span>
                    <span className="text-lg">Active Users</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="text-4xl font-bold">50M</span>
                    <span className="text-lg">Downloads</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <span className="text-4xl font-bold">$70B</span>
                    <span className="text-lg">Sales Generated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
