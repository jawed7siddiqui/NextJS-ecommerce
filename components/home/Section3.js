/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

export default function Section3() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-full h-full"
              alt=""
              src="https://dummyimage.com/720x600/67cf99/262626.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* <img
              className="object-cover object-center rounded-full w-16 h-16"
              alt=""
              src="https://dummyimage.com/600x400/67cf99/262626.png"
            /> */}
            <h2 className="h2 my-6">
              the easiest way to build an online store.
            </h2>
            <p className=" sm-para">
              Lapaas is a very easy to use online store builder that makes it
              simple to create an online store. You only have to provide basic
              details about your business.
            </p>
            {/* <div className="mt-10 space-y-6">
              <div className="flex justify-center items-center gap-6">
                <img
                  className="object-cover object-center rounded-md w-16 h-16"
                  alt=""
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
                <p className="uppercase text-primary tracking-[.3rem] font-medium">
                  Benefit or feature one
                </p>
              </div>
              <div className="flex justify-center items-center gap-6">
                <img
                  className="object-cover object-center rounded-md w-16 h-16"
                  alt=""
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
                <p className="uppercase text-primary tracking-[.3rem] font-medium">
                  Benefit or feature one
                </p>
              </div>
              <div className="flex justify-center items-center gap-6">
                <img
                  className="object-cover object-center rounded-md w-16 h-16"
                  alt=""
                  src="https://dummyimage.com/600x400/67cf99/262626.png"
                />
                <p className="uppercase text-primary tracking-[.3rem] font-medium">
                  Benefit or feature one
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* <img
              className="object-cover object-center rounded-full w-16 h-16"
              alt=""
              src="https://dummyimage.com/600x400/67cf99/262626.png"
            /> */}
            <h2 className="h2 my-6">Build Your Online Store with few clicks</h2>
            <p className="sm-para">
              Why spend days building your store from scratch? You can create an
              online store with Lapaas in less than 60 seconds without any
              experience.
            </p>
            <Button />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/67cf99/262626.png"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/67cf99/262626.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* <img
              className="object-cover object-center rounded-full w-16 h-16"
              alt=""
              src="https://dummyimage.com/600x400/67cf99/262626.png"
            /> */}
            <h2 className="h2 my-6">No coding knowledge required</h2>
            <p className="sm-para">
              No need for expensive designers or developers. We use an intuitive
              drag-and-drop interface to make it easy for you to create a
              beautiful store in no time.
            </p>
            <Button />
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* <img
              className="object-cover object-center rounded-full w-16 h-16"
              alt=""
              src="https://dummyimage.com/600x400/67cf99/262626.png"
            /> */}
            <h2 className="h2 my-6">Zero commission</h2>
            <p className="sm-para">
              We do not take any cut of your sale. You are free to choose from
              any payment gateway and making it easy and affordable to start
              your own online business.
            </p>
            <Button />
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/67cf99/262626.png"
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600/67cf99/262626.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            {/* <img
              className="object-cover object-center rounded-full w-16 h-16"
              alt=""
              src="https://dummyimage.com/600x400/67cf99/262626.png"
            /> */}
            <h2 className="h2 my-6">Create a store, without the cost</h2>
            <p className="sm-para">
              Lapaas is the world&apos;s first online store builder that allows
              you to start selling in minutes with no subscription plan. It is
              100% free.
            </p>
            <Button />
          </div>
        </div>
      </section>
    </>
  );
}
