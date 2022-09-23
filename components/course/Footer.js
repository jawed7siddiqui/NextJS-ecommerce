/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <section>
      <div className="border-t-2 border-textColor px-20 w-5/6 mx-auto"></div>
      <div className=" p-8 flex justify-center items-center flex-col">
        <img
          src="/Lapaas Voice Logo.svg"
          alt="Lapaas-logo"
          className="h-20 w-20"
        />
        <p className="text-center w-full md:w-3/5 md:text-xl mt-10">
          Lapaas Learning is an initiative by Lapaas where you will get value
          rich courses which will help you to enhance and polish your skills. We
          make it easier to learn new skills so you can easily master the field
          in which you want to build your career.
        </p>
      </div>
      <div className="bg-textColor px-2">
        <p className="text-base text-gray-300 text-center py-4">
          &copy;2022 Lapaas Digital Pvt. Ltd. <br className="block md:hidden" />{" "}
          All Rights Reserved
        </p>
      </div>
    </section>
  );
}
