/* eslint-disable @next/next/no-img-element */
import React from "react";
import Offer from "./Offer";

export default function Section5() {
  return (
    <>
      <section>
        <div className="container mx-auto py-14 md:py-24">
          {/* <div className="bg-primaryLight flex flex-col justify-center items-center w-5/6 mx-auto text-primary space-y-10 py-20">
            <h2 className="h2">Watch Demo:</h2>
            <p className="para">
              In less than X minutes you can get [Desired Outcome]
            </p>
            <iframe
              className="aspect-video w-4/6 h-[28rem] rounded-sm"
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/y-cJuCMzpdA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
            <div className="flex justify-center items-center gap-5 w-4/6">
              <img
                className="w-24 h-24 border-[3px] border-primary rounded-full"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <p className="font-medium text-lg md:text-xl mx-auto">
                There really is no better way to gain trust and prove the
                validity of your brand quality features like customer feedback
                and testimonial.{" "}
                <span className="font-bold"> - Shane Jimenez</span>
              </p>
            </div>
            <button className="flex flex-col justify-center items-center bg-primary rounded-md w-full md:w-3/6 h-20 md:h-24 mt-10 text-white">
              <span className="font-bold text-base md:text-xl">
                Start Free 14 Day Trial Now
              </span>
              <span className="text-gray-400 text-xs md:text-sm">
                Start Using Product Right Now!
              </span>
            </button>
          </div> */}
        </div>
      </section>
      <section>
        <div className="container mx-auto h-full">
          <h2 className="w-1/2 h2 mx-auto text-center">Features</h2>
          <p className="para text-center w-3/5">
            Showcase some of the most used/popular features of your product and
            allow your reader to dive deeper to learn more about each of them.
          </p>
          <div className="mt-14 text-primary flex gap-12 justify-center items-center">
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">Fast Loading Speed </h3>
              <p className="sm-para text-center w-60">
                We provide very fast store loading speed and smooth experience
                for your customers so they can easily go through the product
                they need and faster checkout experience.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">Pre Loaded Products </h3>
              <p className="sm-para text-center w-60">
                We have a pre-made library of products from which you can choose
                your products, so you don’t have to add product description and
                any other details.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">Customised Store</h3>
              <p className="sm-para text-center w-60">
                We create your online store with the help of a few details,
                however store building on Lapaas is customizable, you can
                customise your store according to your needs.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">Mobile Friendly </h3>
              <p className="sm-para text-center w-60">
                We create mobile friendly and responsive stores, so your
                customer will get the best in class shopping experience which is
                very smooth and simple.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-14 text-primary flex gap-12 justify-center items-center">
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">User Friendly Interface</h3>
              <p className="sm-para text-center w-60">
                We keep it super simple because e-commerce should not be
                complicated. We provide a very simple interface for both store
                owners and customers as well.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">Advanced Analytics</h3>
              <p className="sm-para text-center w-60">
                We provide advanced analytics for business so they can make
                important decisions for their business easily and stay informed
                for their business.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">Discount Coupon </h3>
              <p className="sm-para text-center w-60">
                We also offer a discount coupon feature which allows you to
                provide discounts and exclusive sales deals to your customers.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                className="w-60 h-40 border-[3px] border-primary rounded-md"
                src="https://dummyimage.com/600x400/ECFDF5/047857.png"
                alt=""
              />
              <h3 className="text-2xl font-bold">
                Advanced Customer Management
              </h3>
              <p className="sm-para text-center w-60">
                We have an advanced customer management system where you can
                manage your customer very easily and you can also know more
                about them.
              </p>
              <button className="border-[3px] border-primary py-3 px-8 uppercase rounded-md text-base tracking-[.3rem] font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Offer />
    </>
  );
}
