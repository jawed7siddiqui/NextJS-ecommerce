/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

export default function Section2() {
  return (
    <>
      <section>
        <div className="container mx-auto px-5 py-24">
          <h2 className="h2 text-center">Create Your Store in 3 Simple Step</h2>
          <p className="para w-1/2 text-center">
            Let us show you how easy it is to build your own store
          </p>
          <div className="grid grid-cols-3 gap-10 pt-14 px-10">
            <div className="col-span-2">
              {/* <iframe
                className="w-full aspect-video "
                src="https://www.youtube.com/watch?v=y-cJuCMzpdA"
              ></iframe> */}
              <iframe
                className="aspect-video w-full h-[28rem] rounded-sm"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/y-cJuCMzpdA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
              <div className="">
                <h2 className="h2 mt-14 w-4/6 mx-auto text-center">
                  What is [Brand Name] and Who is it for?
                </h2>
                <p className="para text-center">
                  Start selling your Products Online and Grow Your Business
                  Faster than ever
                </p>
                <ul className="space-y-6 mt-10">
                  <li className="sm-para flex justify-center gap-5">
                    <div className="pt-1 text-2xl">
                      <FaCheck />
                    </div>
                    We have made running an online store easy. You can set up
                    your store in just a few minutes, and start selling to
                    customers from all over the world.
                  </li>
                  <li className="sm-para flex justify-center gap-5">
                    <div className="pt-1 text-2xl">
                      <FaCheck />
                    </div>
                    A big part of building a successful online store is that you
                    need technical knowledge about it. But with no coding skills
                    needed, Lapaas does all the hard work for you.
                  </li>
                  <li className="sm-para flex justify-center gap-5">
                    <div className="pt-1 text-2xl">
                      <FaCheck />
                    </div>
                    Do not waste hours or days trying to build your own website
                    or store. With Lapaas, you can set up an online shop in less
                    than 60 seconds without any technical knowledge.
                  </li>
                </ul>
              </div>
            </div>
            {/* Right Side  */}
            <div className="space-y-8">
              <div className="flex justify-around items-top">
                <div>
                  <img
                    className="w-40 border-[3px] border-primary rounded-md"
                    src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                    alt=""
                  />
                  <div className="border-[3px] border-primary text-2xl text-primary p-1 rounded-full w-fit mt-5 mx-auto">
                    <BsChevronDown />
                  </div>
                </div>
                <h3 className="mt-2 text-center text-primary text-2xl font-bold ">
                  Register
                  <span className="block font-medium text-base mt-1">
                    Register with your mobile number or email id and provide
                    basic details of your business.
                  </span>
                </h3>
              </div>
              <div className="flex justify-around items-top">
                <div>
                  <img
                    className="w-40 border-[3px] border-primary rounded-md"
                    src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                    alt=""
                  />
                  <div className="border-[3px] border-primary text-2xl text-primary p-1 rounded-full w-fit mt-5 mx-auto">
                    <BsChevronDown />
                  </div>
                </div>
                <h3 className="mt-2 text-center text-primary text-2xl font-bold ">
                  Choose Your Products
                  <span className="block font-medium text-base mt-1">
                    Select your products from our product library, you can also
                    add your products from scratch.
                  </span>
                </h3>
              </div>
              <div className="flex justify-around items-top">
                <div>
                  <img
                    className="w-40 border-[3px] border-primary rounded-md"
                    src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                    alt=""
                  />
                  <div className="border-[3px] border-primary text-2xl text-primary p-1 rounded-full w-fit mt-5 mx-auto">
                    <BsChevronDown />
                  </div>
                </div>
                <h3 className="mt-2 text-center text-primary text-2xl font-bold ">
                  You’re Store is Ready
                  <span className="block font-medium text-base mt-1">
                    Hurray! You store is ready now you can start selling your
                    products
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
