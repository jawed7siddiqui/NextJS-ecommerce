/* eslint-disable @next/next/no-img-element */
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import React from "react";

export default function Section4() {
  return (
    <>
      <section className="bg-primaryLight">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <img
              className="object-cover object-center rounded-full w-16 h-16"
              alt=""
              src="https://dummyimage.com/600x400/67cf99/262626.png"
            />
            <h2 className="h2 my-6">
              Note sure how you can <br /> use your product?
            </h2>
            <p className="sm-para">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid
              swag typewriter affogato, wolf narwhal dreamcatcher.
            </p>
            {/* Steps  */}
            <div className="flex justify-center items-center space-x-5">
              <div>
                <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                  <img
                    className="w-28 h-28"
                    src="https://dummyimage.com/600x400/67cf99/262626.png"
                    alt=""
                  />
                  <div className="text-lg text-primary">
                    <FaCheck />
                  </div>
                </div>
                <span className="text-xl text-primary font-bold ml-6">
                  Step 1
                </span>
              </div>
              <div>
                <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                  <img
                    className="w-28 h-28"
                    src="https://dummyimage.com/600x400/67cf99/262626.png"
                    alt=""
                  />
                  <div className="text-lg text-primary">
                    <FaCheck />
                  </div>
                </div>
                <span className="text-xl text-primary font-bold ml-6">
                  Step 2
                </span>
              </div>
              <div>
                <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                  <img
                    className="w-28 h-28"
                    src="https://dummyimage.com/600x400/67cf99/262626.png"
                    alt=""
                  />
                  <div className="text-lg text-primary">
                    <FaCheck />
                  </div>
                </div>
                <span className="text-xl text-primary font-bold ml-6">
                  Step 3
                </span>
              </div>
              <div>
                <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                  <img
                    className="w-28 h-28"
                    src="https://dummyimage.com/600x400/67cf99/262626.png"
                    alt=""
                  />
                </div>
                <span className="text-xl text-primary font-bold ml-6">
                  Step 4
                </span>
              </div>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 space-y-6">
            <div className="border-[3px] border-primary p-4 text-center rounded-sm">
              <p className="text-primary font-medium text-lg md:text-xl ">
                Lorem ipsum dolor sit amet elit. Autem expedita tempore quidem.
              </p>
            </div>
            <div className="border-[3px] border-primary p-4 text-center rounded-sm space-y-5">
              <h3 className="text-xl font-bold md:text-2xl text-primary capitalize">
                Which of these best <br /> describes your business
              </h3>
              <div className="w-full h-2 bg-primary rounded-full"></div>
              <ul className="text-primary text-xl font-medium space-y-3 text-left ml-10">
                <li>Target Group One</li>
                <li>Target Group One</li>
                <li>Target Group One</li>
                <li>Target Group One</li>
                <li>Target Group One</li>
                <li>Target Group One</li>
              </ul>
              <button className="flex flex-col justify-center items-center bg-primary rounded-md w-full mx-auto md:w-4/5 h-20 md:h-24 mt-10 text-white">
                <span className="font-bold text-base md:text-xl">
                  Go to step #2 Now
                </span>
                <span className="text-gray-400 text-xs md:text-sm">
                  Lorem ipsum dolor sit amet consectetur elit.
                </span>
              </button>
              <p className="sm-para">
                Lorem ipsum dolor sit amet elit. Autem expedita tempore quidem.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
