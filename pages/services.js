/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout";
import HeroSVG from "../components/svg/HeroSVG";
import "aos/dist/aos.css";

export default function Services() {
  return (
    <Layout>
      {/* Hero  */}
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
                digital marketing agency that truly cares about your success
                then look no further than Lapaas!
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
      {/* Section  */}
      <section className="bg-textColor text-primaryLight ">
        <div className="container mx-auto px-5 py-12 md:py-24 flex justify-center items-center gap-10">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/3 mb-10 px-4">
              <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center bg-pink rounded border-8 border-[#C1EFFF] shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
                <h2 className="text-white bg-textColor p-3 rounded text-4xl top-4">
                  Branding
                </h2>
                <img src="/assets/Marketing.svg" alt="" className="h-80" />
              </div>
            </div>
            <div className="sm:w-1/3 mb-10 px-4">
              <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center   bg-primaryLight rounded border-8 border-[#C1EFFF] shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
                <h2 className="text-white bg-textColor p-3 rounded text-4xl top-4">
                  Marketing
                </h2>
                <img
                  src="/assets/Application-development.svg"
                  alt=""
                  className="h-80"
                />
              </div>
            </div>
            <div className="sm:w-1/3 mb-10 px-4">
              <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center   bg-pink rounded border-8 border-[#C1EFFF] shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
                <h2 className="text-white bg-textColor p-3 rounded text-4xl top-4">
                  Development
                </h2>
                <img src="/assets/Marketing.svg" alt="" className="h-80" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="text-textColor body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center bg-pink rounded shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
              <h2 className="text-white bg-textColor p-3 rounded text-4xl top-4">
                Branding
              </h2>
              <img src="/assets/Marketing.svg" alt="" className="h-80" />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center space-y-8">
            <h3
              className="sm:text-6xl text-left text-4xl font-extrabold"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Build A Powerfull Image
            </h3>
            <p
              className="leading-relaxed text-xl"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              We know how important it is for your business to have an identity
              that’s unique and consistent, so we work with you every step of
              the way.
              <span className="bg-primaryLight ml-1">
                Our branding services are designed to help you build a strong
                foundation for your company.
              </span>
            </p>
            <div
              className="flex flex-wrap justify-center items-center gap-4"
              //   data-aos="fade-up"
              //   data-aos-duration="800"
            >
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none rounded-full text-base">
                  Services
                </button>
              </Link>
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                  Get Quote
                </button>
              </Link>
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                  Get Quote
                </button>
              </Link>
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="text-textColor bg-primaryLight">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="flex cursor-pointer flex-col p-6 mx-auto transition duration-500 ease-out text-center bg-pink rounded shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white space-y-3">
              <h2 className="text-white bg-textColor p-3 rounded text-5xl top-4">
                Branding
              </h2>
              <img src="/assets/Marketing.svg" alt="" className="h-80" />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center space-y-8">
            <h3
              className="sm:text-6xl text-left text-4xl font-extrabold"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              Get More Sales Easily
            </h3>
            <p
              className="leading-relaxed text-xl"
              data-aos="fade-down"
              data-aos-duration="800"
            >
              We have a proven track record of success in the performance
              marketing space. Our team has been working with clients for over
              10 years and we have seen it all!
              <span className="bg-primary ml-1">
                Let us help you drive more traffic, lower costs and provide real
                results.
              </span>
            </p>
            <div
              className="flex flex-wrap justify-center items-center gap-4"
              //   data-aos="fade-up"
              //   data-aos-duration="800"
            >
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                  Behavioural Marketing
                </button>
              </Link>
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                  Intent Marketing
                </button>
              </Link>
              <Link href="#" passHref>
                <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                  Integrated Marketing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className=" dark:bg-lightGray py-20 md:py-24 ">
        <div className="text-textColor dark:text-white">
          <div className="flex px-5 md:px-32 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-10 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center w-full">
              <h2
                className="sm:text-6xl text-4xl mb-4 font-extrabold"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                Conceptualization <br className="hidden md:block" /> Your
                <span className="text-pink">&#32;Idea</span>
              </h2>
              <p
                className="mb-8 leading-relaxed text-xl"
                data-aos="fade-down"
                data-aos-duration="800"
              >
                We help you take your product from concept to reality. We
                specialise in rapid prototyping, which allows us to create a
                prototype in a fraction of the time it would take using
                traditional methods. This means you can test your product&#39;s
                feasibility and get feedback from potential customers faster
                than ever before. We want to help you bring your product to
                market as quickly and efficiently as possible.
              </p>
              <div
                className="flex flex-wrap justify-center items-center gap-4"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <Link href="#" passHref>
                  <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                    Prototyping
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                    MVP
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                    Development
                  </button>
                </Link>
                <Link href="#" passHref>
                  <button className="flex justify-center items-center text-white bg-pinkDark border-0 py-2 px-5 focus:outline-none  rounded-full text-base">
                    App Development
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
              <HeroSVG className={"w-full h-fit"} />
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="bg-textColor dark:bg-slate-900 text-white dark:text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 my-10">
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-3xl font-semibold text-textColor">
                  Market Research
                </h4>
                <p className="font-light sm:text-lg text-textColor">
                  Market research refers to identifying the target audience for
                  your audience because you wouldn&#39;t wish to target
                  everyone. Then we research your competitor and analyse what
                  they are offering and how they are marketing their product.
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
                <h4 className="mb-4 text-3xl font-semibold text-textColor">
                  Competitor Analysis
                </h4>
                <p className="font-light sm:text-lg text-textColor">
                  We research your competitors, what are their USP’s, pricing,
                  market share, etc. We analyse how your competitor markets
                  their products/services, what marketing tactics they are
                  following and how they are engaging with their customers.
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
                <h4 className="mb-4 text-3xl font-semibold text-textColor">
                  Strategy formulation
                </h4>
                <p className="font-light sm:text-lg text-textColor">
                  We make custom strategies on the behalf of the information we
                  gathered and take the most appropriate actions to achieve your
                  organisational vision.
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
                <h4 className="mb-4 text-3xl font-semibold text-textColor">
                  Execution
                </h4>
                <p className="font-light sm:text-lg text-textColor">
                  After creating strategies, we will implement all actions in
                  the best possible way, so the product/service can reach the
                  maximum audience.
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
                <h4 className="mb-4 text-3xl font-semibold text-textColor">
                  Measure
                </h4>
                <p className="font-light sm:text-lg text-textColor">
                  After properly executing actions, we gather the data and
                  analyse it to make more improvements in the product/service.
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
                <h4 className="mb-4 text-3xl font-semibold text-textColor">
                  Report
                </h4>
                <p className="font-light sm:text-lg text-textColor">
                  We provide a detailed report sheet to our clients of their
                  campaign’s activity.
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
            <h2
              data-aos="fade-up"
              className="mb-4 text-4xl tracking-tight font-extrabold   dark:text-white"
            >
              How Lapaas Can Help Your Business To Grow
            </h2>
            <p
              data-aos="fade-up"
              className="mb-5 font-light sm:text-xl dark:text-slate-400"
            >
              You deserve an experienced team who can make sense of your
              marketing campaigns and help you get the most out of your
              advertising spend.
            </p>
            <p
              data-aos="fade-up"
              className="mb-5 font-light sm:text-xl dark:text-slate-400"
            >
              Our team has been working with clients for over 11 years and we
              have seen it all! You can trust our expertise when it comes to
              making sure that your campaign is maximising its potential at
              every stage of the process.
            </p>
          </div>
          <div className="space-y-10 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 my-10">
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col p-/ mx-auto max-w-2xl transition duration-500 ease-out w-full text-center py-7 px-5 space-y-1 md:space-y-3 bg-textColor rounded-lg shadow-xl dark:border-slate-600 xl:p-10 dark:bg-slate-800 dark:text-white"
            >
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  CAC
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  AOV
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  AOV
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  CR
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  LTV
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "66%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  ORDER
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  TRAFFIC
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col p-/ mx-auto max-w-2xl transition duration-500 ease-out w-full text-center py-7 px-5 space-y-1 md:space-y-3 bg-textColor rounded-lg shadow-xl dark:border-slate-600 xl:p-10 dark:bg-slate-800 dark:text-white"
            >
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  CAC
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  AOV
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  AOV
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "45%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  CR
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  LTV
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "66%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  ORDER
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "75%" }}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-7 items-center">
                <div className="text-lg md:text-xl font-medium text-white uppercase">
                  TRAFFIC
                </div>
                <div className="w-4/6 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-pinkDark h-2.5 rounded-full dark:bg-pinkDark"
                    style={{ width: "33%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section  */}
      <section className="bg-primaryLight dark:bg-slate-900 text-textColor dark:text-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2
              data-aos="fade-up"
              className="mb-4 text-4xl tracking-tight font-extrabold   dark:text-white"
            >
              Why Choose US
            </h2>
            <p
              data-aos="fade-up"
              className="mb-5 font-light sm:text-xl dark:text-slate-400"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
              aliquid!
            </p>
          </div>
          <div className="space-y-10 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 my-10">
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col p-6 mx-auto max-w-lg transition duration-500 ease-out w-full text-center   bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white"
            >
              <h4 className="mb-4 text-3xl font-semibold">Proven Strategies</h4>
              <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
                We use advanced and proven strategies to bring results in a cost
                effective manner.
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="100"
              data-aos-duration="800"
              className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
            >
              <div className="p-8">
                <h4 className="mb-4 text-3xl font-semibold">
                  11+ Years Of Experience
                </h4>
                <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
                  We have 11+ years of experience so we know what works or what
                  doesn&#39;t work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
