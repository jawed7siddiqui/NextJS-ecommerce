import React from "react";

export default function FirstCta() {
  return (
    <section className="">
      <div className="container mx-auto space-y-10 px- pt-10">
        <div className="h-full sm:h-full pb-6 text-center">
          <h2 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0">
            Hurry Up Don’t Miss The Opportunity
          </h2>
          <p className="flex justify-center text-2xl sm:text-3xl md:text-4xl font-semibold  my-4 sm:my-8">
            <span className="text-pink line-through">
              <span className="">₹72,798 </span>
            </span>
            <span className="ml-5">₹39,999 - 51% Off </span>
          </p>
          <div className="flex justify-center uppercase cursor-pointer">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
              <button
                type="button"
                className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-textColor text-lg sm:text-2xl text-white font-medium uppercase"
              >
                become digital marketing scientist
              </button>
            </a>
          </div>
          <p className="italic md:w-1/2 text-xl mx-5 md:mx-auto mt-4 text-center">
            Professional Teaching in less than ₹175/hr
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
            <button
              type="button"
              className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-primaryLight text-lg sm:text-2xl text-textColor font-medium mt-5"
            >
              Join the Waiting List
            </button>
          </a>
          <p className="italic md:w-2/5 text-xl mx-5 md:mx-auto mt-5">
            200+ Hours of Content + 25+ Resources + Private WhatsApp Group + 6
            Months Support + Mentorship + <br /> Practical Assignment
          </p>
        </div>
      </div>
    </section>
  );
}
