import React from "react";

export default function Recap() {
  return (
    <>
      <section className="text-textColor">
        <div className="container mx-auto pb-14">
          <div className="text-center ">
            <h2 className="text-3xl sm:text-4xl font-bold pt-10">
              Let’s Recap What you’re going to get
            </h2>
          </div>
          <div className="text-white bg-pink mb-8 mt-10 md:w-2/3 w-4/5 flex flex-col md:flex-row mx-auto text-lg font-semibold">
            <div className="py-3 w-full px-5 text-center md:text-left">
              200+ Hours of Live Training
            </div>
            <div className="py-3 pr-5 pl-5 md:pl-10 text-center">₹59999/-</div>
          </div>
          <div className="text-white my-8 bg-pink md:w-2/3 w-4/5 flex flex-col md:flex-row mx-auto text-lg font-semibold">
            <div className=" py-3 w-full px-5 text-center md:text-left">
              25+ Must Have Resources For Every Digital Marketer
            </div>
            <div className=" py-3 pr-5 pl-5 md:pl-10 text-center">₹11999/-</div>
          </div>
          <div className="text-white my-8 bg-pink md:w-2/3 w-4/5 flex flex-col md:flex-row mx-auto text-lg font-semibold">
            <div className="py-3 w-full px-5 text-center md:text-left">
              1 year Super Chatbot Subscription
            </div>
            <div className="py-3 pr-5 pl-5 md:pl-10 text-center ">₹7200/-</div>
          </div>
          <div className="text-white my-8 bg-pink md:w-2/3 w-4/5 flex flex-col md:flex-row mx-auto text-lg font-semibold">
            <div className="py-3 w-full px-5 text-center md:text-left">
              1 Year Lapaas V Card Tool Access
            </div>
            <div className="py-3 pr-5 pl-5 md:pl-10 text-center ">₹3600/-</div>
          </div>
          <div className="text-white my-8 bg-pink md:w-2/3 w-4/5 flex flex-col md:flex-row mx-auto text-lg font-semibold">
            <div className="py-3 w-full px-5 text-center md:text-left">
              6 Months Whatsapp and Call Support
            </div>
            <div className="py-3 pr-5 pl-5 md:pl-10 text-center ">
              Priceless
            </div>
          </div>
          <div className="text-white my-8 bg-pink md:w-2/3 w-4/5 flex flex-col md:flex-row mx-auto text-lg font-semibold mb-12">
            <div className="py-3 w-full px-5 text-center md:text-left">
              Private Whatsapp Group
            </div>
            <div className="py-3 pr-5 pl-5 md:pl-10 text-center ">
              Priceless
            </div>
          </div>
          <div className="flex justify-center uppercase">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
              <button
                type="button"
                className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-textColor text-lg sm:text-2xl text-white font-medium uppercase"
              >
                become digital marketing scientist
              </button>
            </a>
          </div>
          <div className="flex justify-center items-center mt-8">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdo-ItFZwrSoRgFDkAYgdtaTmtmBBEEBpGHfVXbs3vfAwEI-w/viewform?usp=sf_link">
              <button
                type="button"
                className="relative inline-flex items-center mx-7 px-7 py-3.5 rounded-sm border border-transparent bg-primaryLight text-lg sm:text-2xl text-textColor font-medium"
              >
                Join the Waiting List
              </button>
            </a>
          </div>
          <div>
            <h2 className="flex justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0 mt-5">
              Total Value Rs
              <span className="text-pink line-through  ml-2 md:ml-3">
                <span className="text-textColor">₹72,798</span>
              </span>
            </h2>
            <h2 className="flex w-fit mx-auto p-2 rounded-sm justify-center text-2xl sm:text-3xl md:text-4xl  font-bold mb-0 mt-3 bg-textColor text-primaryLight text-center">
              Todays Special Price: ₹39,999
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
