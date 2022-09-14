/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import { FaCheck } from "react-icons/fa";

export default function Section6() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <p className="font-bold text-base md:text-xl text-primary text-center">
            Show Why Other People Are Switching to Your Product
          </p>
          <h2 className="h2 text-center mt-6 mb-10">Customers Review</h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
              </a>
              <div className="mt-6">
                <p className="font-bold text-base md:text-xl text-primary text-center">
                  The Catalyzer
                </p>
                <p className="sm-para text-center">Startup Founder</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
              </a>
              <div className="mt-6">
                <p className="font-bold text-base md:text-xl text-primary text-center">
                  Shooting Stars
                </p>
                <p className="sm-para text-center">Startup Founder</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
              </a>
              <div className="mt-6">
                <p className="font-bold text-base md:text-xl text-primary text-center">
                  The Catalyzer
                </p>
                <p className="sm-para text-center">Startup Founder</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
              </a>
              <div className="mt-6">
                <p className="font-bold text-base md:text-xl text-primary text-center">
                  Shooting Stars
                </p>
                <p className="sm-para text-center">Startup Founder</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
              </a>
              <div className="mt-6">
                <p className="font-bold text-base md:text-xl text-primary text-center">
                  Neptune
                </p>
                <p className="sm-para text-center">Startup Founder</p>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 p-4 w-full">
              <a className="block relative h-72 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
              </a>
              <div className="mt-6">
                <p className="font-bold text-base md:text-xl text-primary text-center">
                  The 400 Blows
                </p>
                <p className="sm-para text-center">Startup Founder</p>
              </div>
            </div>
          </div>
          <p className="sm-para text-center my-14 w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit cumque eum
            ab cupiditate eaque ullam sequi inventore, exercitationem sapiente.
          </p>
          <div className="flex justify-center items-center">
            <button className="flex flex-col justify-center items-center bg-primary rounded-md w-full md:w-2/5 h-20 md:h-24 text-white">
              <span className="font-bold text-base md:text-xl">
                Start Free 14 Day Trial Now
              </span>
              <span className="text-gray-400 text-xs md:text-sm">
                Start Using Product Right Now!
              </span>
            </button>
          </div>
          <p className="sm-para text-center mt-6 w-1/2 mx-auto">
            No commitment, cancle anytime!
          </p>
        </div>
      </section>
    </>
  );
}
