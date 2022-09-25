/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import HeroSVG from "../components/svg/HeroSVG";

const Hero = () => {
  return (
    <section className=" dark:bg-lightGray py-14 md:py-14 ">
      <div className="text-textColor dark:text-white">
        <div className="flex px-5 md:px-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center w-full">
            <h1
              className="sm:text-6xl text-5xl mb-4 font-extrabold"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Transform Your Business <br className="hidden md:block" /> With
              <span className="text-pink">&#32;LAPAAS</span>
            </h1>
            <p
              className="mb-8 leading-relaxed text-xl w-5/6"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              We pride ourselves on being able to provide high quality work at
              affordable prices without sacrificing any quality. If you want a
              digital marketing agency that truly cares about your success then
              look no further than Lapaas!
            </p>
            <div
              className="flex justify-center items-center gap-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Link href="#pricing" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 md:py-3 px-5 md:px-10 focus:outline-none rounded-full text-base md:text-lg uppercase">
                  Services
                </button>
              </Link>
              <Link href="#pricing" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 md:py-3 px-5 md:px-10 focus:outline-none  rounded-full text-base md:text-lg uppercase">
                  Get Quote
                </button>
              </Link>
            </div>
            {/* <div
              className="flex justify-center items-center gap-1 mt-10"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div>
                <FaCheck className="text-[#1ea19a] text-sm" />
              </div>
              <span className="text-lg">30-day money-back guarantee</span>
            </div> */}
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
            {/* <img
              className="object-cover dark:hidden object-center rounded"
              alt="hero"
              src="/assets/hero-img.webp"
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="800"
            /> */}
            <HeroSVG className={"w-full h-fit"} />
            {/* <img
              className="object-cover hidden dark:block object-center rounded"
              alt="hero"
              src="/assets/Dark Hero Image.jpg"
              data-aos="zoom-in"
              // data-aos-offset="00"
              data-aos-duration="800"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

{
  /* <section className="mt-16">
  <h1 className="text-7xl font-bold">
    Hi I am <span className="dark:text-red-600">Abhishek</span>
  </h1>

  <h3 className="text-4xl my-3">I am Web Designer</h3>
  <p className="text-gray-700 mb-8">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quibusdam
    autem doloremque beatae iure, nihil fugit doloribus cum soluta modi!
  </p>
  <Button className="bg-purple-600 text-white px-6">Hire Me!</Button>
</section>; */
}
