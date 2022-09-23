import React from "react";
import { FaHandPointRight } from "react-icons/fa";

export default function Section3() {
  return (
    <>
      <div className="text-textColor">
        <div className="text-center">
          <h3 className=" text-3xl italic font-medium">Introducing…</h3>
          <h2 className="text-3xl sm:text-4xl font-bold pt-5">
            The Most Interactive and Practical <br /> Course on Digital
            Marketing
          </h2>
          <h3 className="text-2xl sm:text-3xl font-medium pt-5">
            Become a Digital Marketing Expert <br /> who is able to
            <span className="underline ml-2">grow any business</span>
          </h3>
        </div>
        <div className="px-7 md:px-32">
          <p className="text-center text-base sm:text-xl  font-medium pt-10">
            We at Lapaas are pleased to announce the launch of our new digital
            marketing program! <br /> This program will teach you all about how
            to best utilise your time in order to be successful in the digital
            marketing world. <br />
            <span className="font-extrabold underline mx-1">
              With 60 days worth of content + live classes + assessed homework
              assignments +mentorship.
            </span>
            <br />
            Our program is designed to give you all the skills and knowledge you
            need to be successful in digital marketing. <br /> You’ll learn how
            to create and execute successful marketing campaigns, measure their
            results, and optimise them for even better performance.
          </p>
        </div>
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight border p-4 rounded-md ">
                <div>
                  <FaHandPointRight className="text-4xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">Course will start on 16th October</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight border p-4 rounded-md ">
                <div>
                  <FaHandPointRight className="text-4xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">
                    Duration of the Program is <br /> 90 Days
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight border p-4 rounded-md ">
                <div>
                  <FaHandPointRight className="text-4xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p>Mon to Thu and Sunday 3 Hours Live Class Timing- 7 PM</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight border p-4 rounded-md ">
                <div>
                  <FaHandPointRight className="text-4xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p>
                    We will provide you weeekly assignments and you have to
                    complete that assignment in weekdays
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight border p-4 rounded-md ">
                <div>
                  <FaHandPointRight className="text-4xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p>
                    Sunday Class Timing will be 11 am to 2 PM and 3 PM TO 6 PM.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight border p-4 rounded-md ">
                <div>
                  <FaHandPointRight className="text-4xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p>
                    Whatsapp and Call Support will be provided by Team Lapaas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center uppercase mb-8 cursor-pointer">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
            <button
              type="button"
              className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-textColor text-lg sm:text-2xl text-white font-medium uppercase"
            >
              become digital marketing scientist
            </button>
          </a>
        </div>
        <div className="flex justify-center items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
            <button
              type="button"
              className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-primaryLight text-lg sm:text-2xl text-textColor font-medium"
            >
              Join the Waiting List
            </button>
          </a>
        </div>
        <p className="italic md:w-1/2 mx-5 md:mx-auto mt-5 text-center text-xl">
          200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
          Months Support + Mentorship + <br /> Practical Assignment
        </p>
      </div>
    </>
  );
}
