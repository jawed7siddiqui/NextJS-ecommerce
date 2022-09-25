/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const customers = [
  {
    key: "1",
    profession: "Student ",
    description:
      "This course will help all the students to build a successful career in digital marketing. After completing this course you will get the job or you can start your own marketing agency.",
  },
  {
    key: "2",
    profession: "Business Owners",
    description:
      "This course will help all the business owners to grow their business through digital marketing. By completing this course you can save more than 2 lakh of cost for your business. ",
  },
  {
    key: "3",
    profession: "Freelancers ",
    description:
      "This course will help you to become a successful freelancer who can work from anywhere in the world. In this course you will also learn how you can get freelancing projects and how you can automate your freelancing business.",
  },
  {
    key: "4",
    profession: "Social Media Influencer ",
    description:
      "This Course will help you to become a successful  social media influencer. In this course you will learn in depth about social media and how you can build your personal brand. This program will also teach you how you can earn 6 figures as a social media influencer. ",
  },
  {
    key: "5",
    profession: "YouTubers",
    description:
      "This course will help all the youtubers who are already posting videos on youtube or people who want to start their own YouTube Channel. In this course you will learn everything about YouTube, Video Production, Editing and Science behind great videos. It will also help you to convert youtube channels into a successful business. ",
  },
  {
    key: "6",
    profession: "Who want to start their business ",
    description:
      "This course will help all the people who want to start their own business or startup. In this course you will learn very important core business and marketing concepts which will help every business owner in multiple ways.",
  },
];

export default function ProgramFor() {
  return (
    <>
      <section className="text-primaryLight bg-pink">
        <div className="container mx-auto px-5">
          <div className="max-w-screen-xl py-10 md:py-20 mx-auto">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-3xl font-bold sm:text-4xl text-textColor bg-white p-3 rounded">
                Who is this program for?
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-2 justify-center">
              {customers.map((customer) => (
                <div
                  key={customer.key}
                  className="bg-white mr-0 md:mr-6 p-4 flex transition shadow-xl rounded-sm"
                >
                  <div className="flex">
                    <svg
                      className="w-8 h-10 text-pink mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl mb-3 font-bold text-textColor">
                      {customer.profession}
                    </h3>
                    <p className="text-textColor font-medium">
                      {customer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white mr-0 md:mr-6 p-4 flex transition  shadow-xl rounded-sm mt-8">
              <div className="flex">
                <svg
                  className="w-8 h-10 text-pink mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl mb-3 font-bold text-textColor">
                  Agency Owners
                </h3>
                <p className="text-textColor font-medium">
                  This course will also help all digital marketing agency owners
                  and also those who want their own digital marketing agency.
                  You will get 25+ useful resources for your agency and you will
                  learn how you can start your agency or how you can grow your
                  digital marketing agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-textColor">
        <div className="container mx-auto px-5 py-14">
          <h2 className="text-4xl lg:text-4xl font-extrabold uppercase text-center">
            Know Your Mentor
          </h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-2 mx-8 ,mb-8 md:mx-20 lg:mx-28 pt-10 gap-6">
            <div className="text-center md:text-left">
              <p className="text-base md:text-xl md:leading-8">
                <span className="mr-1 font-semibold bg-primary  ">
                  Sahil Khanna
                </span>
                is an Engineer turned Digital Marketer. He is the founder of
                Intellectual Indies, a top digital marketing channel in India
                with more than
                <span className="ml-1 font-semibold bg-primary ">
                  11,00,000+ entrepreneurs across the globe
                </span>
                .
              </p>
              <p className="text-base md:text-xl md:leading-8 mt-4">
                Sahil loves to help people and his mission is to make internet
                marketing easy and fun for everyone. Sahil started his life as a
                perfectly imperfect child with many flaws.
              </p>
              <p className="text-base md:text-xl md:leading-8 mt-4">
                But he was never concerned about the end result. In his free
                time,
                <span className="mx-1 font-semibold bg-primary ">
                  Sahil loves investing, singing and playing cricket.
                </span>
                Money is something that doesn’t fascinate him but the impact and
                difference that could be created in someone’s life because of
                him does.
              </p>
            </div>
            <div className="flex">
              <img
                src="/Sahil1.jpg"
                alt="Sahil-Khanna"
                loading="lazy"
                className="object-contain mx-auto"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-5 pb-14">
          <div className="flex items-center justify-center flex-wrap">
            <button className="bg-[#FF0000] py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
              <FaYoutube className="w-10 h-10 fill-current" />
              <span className="text-2xl">1.13M</span>
            </button>
            <button className="bg-[#E1306C] py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
              <FaInstagram className="w-10 h-10 fill-current" />
              <span className="text-2xl">86.6K</span>
            </button>
            <button className="bg-[#0077b5] py-2 font-semibold text-white inline-flex items-center space-x-2 rounded-sm px-24 m-4">
              <FaLinkedinIn className="w-10 h-10 fill-current" />
              <span className="text-2xl">15.2K</span>
            </button>
          </div>
        </div>
      </section>
      <section className="bg-textColor">
        <div className="container mx-auto px-5 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold pt-5 text-center text-white">
            Featured In
          </h2>
          <div className=" grid xl:grid-cols-5 grid-cols-2 md:grid-cols-4 justify-center items-center gap-3 p-5 md:p-10">
            <div className="bg-white p-4">
              <img
                src="https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg"
                alt="outlookindia"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://www.telegraphindia.com/assets/images/tt_online_logo.png?v=1"
                alt="telegraphindia"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://www.asianage.com/images/logo.jpg"
                alt="asianage"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://www.deccanchronicle.com/images/DeccanChronicle_Logo.webp"
                alt="deccanchronicle"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://www.theweek.in/content/dam/week/logo/The-Week-Logo-Big.png"
                alt="theweek"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://www.tribuneindia.com/Content/images/Logo_eng.png"
                alt="tribuneindia"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://img.etimg.com/photo/msid-74451948,quality-100/et-logo.jpg"
                alt="the-economics-time"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://www.joshtalks.com/wp-content/themes/josh_talks/img/josh-logo.svg"
                alt="joshtalks"
                className="h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://i.postimg.cc/nVYVbVkD/download-12.png"
                alt="ted"
                className="h-5 sm:h-8 mx-auto"
              />
            </div>
            <div className="bg-white p-4">
              <img
                src="https://i.postimg.cc/c1Dj8V1z/download-11.png"
                alt="hindustan-times"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
