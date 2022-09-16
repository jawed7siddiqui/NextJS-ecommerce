/* eslint-disable @next/next/no-img-element */
import Button from "./Button";
import { FaCheck } from "react-icons/fa";
import React from "react";
import HomeForm from "../home-form/HomeForm";

export default function Section4() {
  return (
    <>
      <section className="body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-3/5 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man
                braid swag typewriter affogato, wolf narwhal dreamcatcher.
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
          </div>
          <div className="lg:w-2/5 md:w-1/2  flex flex-col md:ml-auto w-full md:mt-0">
            <HomeForm />
          </div>
        </div>
      </section>
    </>
  );
}
