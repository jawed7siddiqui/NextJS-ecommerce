import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import HeroSVG from "../components/svg/HeroSVG";

export default function About() {
  return (
    <>
      <section className="text-textColor body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <HeroSVG className={"w-full h-fit"} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center">
            <h3
              className="sm:text-6xl text-left text-4xl mb-4 font-extrabold"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              <span className="text-pink">LAPAAS&#32;</span> - A Marketing
              Agency That Cares About You
            </h3>
            <p
              className="leading-relaxed text-xl"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Lapaas Digital is a leading marketing company which helps
              businesses to grow their digital presence. Lapaas Digital not only
              follows the latest trends in digital marketing, but also focuses
              on core fundamentals of business and marketing to help your
              business reach its full potential through well-planned strategies.{" "}
              <span className="bg-primaryLight">
                With over 10 years of experience under our belt, we are experts
                at what we do.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* <section className=" dark:bg-lightGray py-20 md:py-14 ">
        <div className="text-textColor dark:text-white">
          <div className="flex px-5 md:px-32 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
              <HeroSVG className={"w-full h-fit"} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center w-full">
              <h1
                className="sm:text-6xl text-4xl mb-4 font-extrabold"
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
                digital marketing agency that truly cares about your success
                then look no further than Lapaas!
              </p>
              <div
                className="flex justify-center items-center gap-4"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Link href="#pricing" passHref>
                  <button className="flex justify-center items-center text-white bg-[#fc5185] border-0 py-3 px-10 focus:outline-none hover:bg-[#ff3f79] rounded-full text-lg uppercase">
                    Services
                  </button>
                </Link>
                <Link href="#pricing" passHref>
                  <button className="flex justify-center items-center text-white bg-[#fc5185] border-0 py-3 px-10 focus:outline-none hover:bg-[#ff3f79] rounded-full text-lg uppercase">
                    Get Quote
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
