/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout";
import HeroSVG from "../components/svg/HeroSVG";
import "aos/dist/aos.css";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import HomeForm from "../components/home-form/HomeForm";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../components/home/Button";
import Offer from "../components/home/Offer";
import Faq from "../components/home/Faq";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
    });
  }, []);

  return (
    <Layout title="Home Page">
      {/* Hero  */}
      <section className=" dark:bg-lightGray py-14 md:py-24 ">
        <div className="text-textColor dark:text-white">
          <div className="flex px-5 md:px-32 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center w-full space-y-5">
              <h1
                className="sm:text-6xl text-5xl font-bold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Take Your Business Online In Less Than
                <span className="text-pink">&#32;60 Seconds!</span>
              </h1>
              <p
                className="leading-relaxed text-xl w-5/6"
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
                <Button />
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
      {/* Section  */}
      <section className="text-white bg-textColor">
        <div className="container mx-auto px-5 py-24 flex flex-col gap-10">
          <div className="text-center space-y-5">
            <h2 className="text-4xl md:text-5xl font-bold">
              Create Your Store in 3 Simple Step
            </h2>
            <p className="md:w-1/2 text-xl mx-auto">
              Let us show you how easy it is to build your own store
            </p>
          </div>
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:max-w-2xl lg:w-full md:w-1/2 w-5/6">
              <div
                className="relative h-0 overflow-hidden max-w-full w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/y-cJuCMzpdA"
                  frameBorder={0}
                  allowFullScreen=""
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              {/* <iframe
                className="w-full h-[25rem] rounded-sm border-2 border-primaryLight"
                // width="300"
                // height="500"
                src="https://www.youtube-nocookie.com/embed/y-cJuCMzpdA"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe> */}
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center space-y-8">
              <div className="bg-white rounded p-5 text-textColor max-w-md">
                <h3 className="text-2xl font-bold">Fill Up Basic Details</h3>
                <p>
                  Register with your mobile number or email id and provide basic
                  details of your business.
                </p>
              </div>
              <div className="bg-white rounded p-5 text-textColor max-w-md">
                <h3 className="text-2xl font-bold">Fill Up Basic Details</h3>
                <p>
                  Register with your mobile number or email id and provide basic
                  details of your business.
                </p>
              </div>
              <div className="bg-white rounded p-5 text-textColor max-w-md">
                <h3 className="text-2xl font-bold">Fill Up Basic Details</h3>
                <p>
                  Register with your mobile number or email id and provide basic
                  details of your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className=" dark:bg-lightGray py-20 md:py-24 ">
        <div className="text-textColor dark:text-white">
          <div className="flex px-5 md:px-32 gap-10 flex-col items-center">
            <div className="flex flex-col items-center w-2/3 mx-auto">
              <div
                className="relative h-0 overflow-hidden max-w-full w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  src="https://www.youtube-nocookie.com/embed/y-cJuCMzpdA"
                  frameBorder={0}
                  allowFullScreen=""
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            </div>
            <div className="text-center space-y-5">
              <h2 className="text-4xl md:text-5xl font-bold">
                Get The Online Presence Of Your Business Up And Running In Less
                Than 60 Seconds
              </h2>
              <p className="text-xl mx-aut">
                Start selling your Products Online and Grow Your Business Faster
                than ever
              </p>
              <ul className="space-y-5 w-2/3 mx-auto mt-10 text-center text-textColor text-xl">
                <li className="flex justify-center gap-5">
                  <div className="pt-1 text-2xl">
                    <FaCheck />
                  </div>
                  Introducing the perfect way to get your online presence. We
                  will make your online presence a breeze and will help you to
                  grow your business quickly.
                </li>
                <li className="flex justify-center gap-5">
                  <div className="pt-1 text-2xl">
                    <FaCheck />
                  </div>
                  A big part of building a successful online store is that you
                  need technical knowledge about it. But with no coding skills
                  needed, Lapaas does all the hard work for you.
                </li>
                <li className="flex justify-center gap-5">
                  <div className="pt-1 text-2xl">
                    <FaCheck />
                  </div>
                  Do not waste hours or days trying to build your own website or
                  store. With Lapaas, you can set up an online shop in less than
                  60 seconds without any technical knowledge.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="text-textColor bg-primaryLight">
        <div className="container mx-auto px-5 py-20 flex flex-col gap-10">
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <HeroSVG className={"w-full h-fit"} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center space-y-8">
              <h3
                className="sm:text-5xl text-left text-3xl font-bold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                The Easiest Way To Build An Online Store.
              </h3>
              <p
                className="leading-relaxed text-xl"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Lapaas is a very easy to use online store builder that makes it
                simple to create an online store. You only have to provide basic
                details about your business.
              </p>
              <Button />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center space-y-8">
              <h3
                className="sm:text-5xl text-left text-3xl font-bold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Build Your Online Store With Few Clicks
              </h3>
              <p
                className="leading-relaxed text-xl"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Why spend days building your store from scratch? You can create
                an online store with Lapaas in less than 60 seconds without any
                experience.
              </p>
              <Button />
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <HeroSVG className={"w-full h-fit"} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <HeroSVG className={"w-full h-fit"} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center space-y-8">
              <h3
                className="sm:text-5xl text-left text-3xl font-bold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                No Coding Knowledge Required
              </h3>
              <p
                className="leading-relaxed text-xl"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                No need for expensive designers or developers. We use an
                intuitive drag-and-drop interface to make it easy for you to
                create a beautiful store in no time.
              </p>
              <Button />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left items-center space-y-8">
              <h3
                className="sm:text-5xl text-left text-3xl font-bold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Zero Commission
              </h3>
              <p
                className="leading-relaxed text-xl"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                We do not take any cut of your sale. You are free to choose from
                any payment gateway and making it easy and affordable to start
                your own online business.
              </p>
              <Button />
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <HeroSVG className={"w-full h-fit"} />
            </div>
          </div>
          <div className="flex md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <HeroSVG className={"w-full h-fit"} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center space-y-8">
              <h3
                className="sm:text-5xl text-left text-3xl font-bold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Create A Store, Without The Cost
              </h3>
              <p
                className="leading-relaxed text-xl"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Lapaas is the world&#39;s first online store builder that allows
                you to start selling in minutes with no subscription plan. It is
                100% free.
              </p>
              <Button />
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-3/5 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center gap-5">
              <img
                className="object-cover object-center rounded-full w-16 h-16"
                alt=""
                src="https://dummyimage.com/600x400/ff7070/262626.png"
              />
              <h3 className="sm:text-5xl text-left text-3xl font-bold text-textColor">
                Note Sure How You Can Use Your Product?
              </h3>
              <p className="leading-relaxed text-xl text-textColor">
                Chillwave portland ugh, knausgaard fam polaroid iPhone. Man
                braid swag typewriter affogato, wolf narwhal dreamcatcher.
              </p>
              {/* Steps  */}
              <div className="flex justify-center items-center space-x-5">
                <div>
                  <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                    <img
                      className="w-28 h-28"
                      src="https://dummyimage.com/600x400/ff7070/262626.png"
                      alt=""
                    />
                    <div className="text-lg text-textColor">
                      <FaCheck />
                    </div>
                  </div>
                  <span className="text-xl text-textColor font-bold ml-6">
                    Step 1
                  </span>
                </div>
                <div>
                  <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                    <img
                      className="w-28 h-28"
                      src="https://dummyimage.com/600x400/ff7070/262626.png"
                      alt=""
                    />
                    <div className="text-lg text-textColor">
                      <FaCheck />
                    </div>
                  </div>
                  <span className="text-xl text-textColor font-bold ml-6">
                    Step 2
                  </span>
                </div>
                <div>
                  <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                    <img
                      className="w-28 h-28"
                      src="https://dummyimage.com/600x400/ff7070/262626.png"
                      alt=""
                    />
                    <div className="text-lg text-textColor">
                      <FaCheck />
                    </div>
                  </div>
                  <span className="text-xl text-textColor font-bold ml-6">
                    Step 3
                  </span>
                </div>
                <div>
                  <div className="flex gap-5 justify-center items-center mb-3 mt-10">
                    <img
                      className="w-28 h-28"
                      src="https://dummyimage.com/600x400/ff7070/262626.png"
                      alt=""
                    />
                  </div>
                  <span className="text-xl text-textColor font-bold ml-6">
                    Step 4
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 md:w-1/2  flex flex-col md:ml-auto w-full md:mt-0">
            <HomeForm />
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="bg-textColor dark:bg-slate-900 text-white dark:text-white">
        <div className="container md:px-5 py-8 mx-auto lg:py-16">
          <div className="space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 my-10">
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-2xl text-left font-semibold text-textColor">
                  Fast Loading Speed
                </h4>
                <p className="font-light text-left sm:text-lg text-textColor">
                  Do you know one in four visitors abandon a website if it takes
                  more than 4 seconds to load? But Don’t worry with us your
                  website will be super fast.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-2xl text-left font-semibold text-textColor">
                  Pre Loaded Products
                </h4>
                <p className="font-light text-left sm:text-lg text-textColor">
                  Do you think Uploading your products will take a huge time and
                  it will be highly expensive? But Don’t worry, we already have
                  a pre-made product library so you don’t have to do hard work.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-2xl text-left font-semibold text-textColor">
                  Mobile Friendly
                </h4>
                <p className="font-light text-left sm:text-lg text-textColor">
                  Do you know 70% of web traffic comes from mobile phones? So
                  it&#39;s very important for your website to be mobile
                  friendly, with us your website will be mobile friendly so you
                  don&#39;t lose your potential customers.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-2xl text-left font-semibold text-textColor">
                  User Friendly Interface
                </h4>
                <p className="font-light text-left sm:text-lg text-textColor">
                  Do you think you need technical knowledge to manage and run
                  your online business? If so, it’s not true, with our easy to
                  understand, user friendly interface you can manage your online
                  store very easily.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-2xl text-left font-semibold text-textColor">
                  Advanced Analytics
                </h4>
                <p className="font-light text-left sm:text-lg text-textColor">
                  Do you know how important it is to know important metrics for
                  your business such as customer acquisition cost, your top
                  performing products etc? With our advanced analytics features
                  you will have all the important metrics at your finger.
                </p>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-2xl text-left font-semibold text-textColor">
                  Advanced Customer Management
                </h4>
                <p className="font-light text-left sm:text-lg text-textColor">
                  As a business owner you know how important it is for you to
                  manage and understand your customer. With our advanced
                  customer management feature you can know how much value a
                  customer holds for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="bg-white dark:bg-slate-900 text-textColor dark:text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <Offer />
          </div>
          <Faq />
        </div>
      </section>
    </Layout>
  );
}
