import React from "react";
import "aos/dist/aos.css";

export default function pricing() {
  return (
    <section className="bg-primaryLight dark:bg-slate-900 text-textColor dark:text-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2
            data-aos="fade-up"
            className="mb-4 text-4xl tracking-tight font-extrabold   dark:text-white"
          >
            Why Choose Us
          </h2>
          <p
            data-aos="fade-up"
            className="mb-5 font-light sm:text-xl dark:text-slate-400"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione,
            aliquid!
          </p>
        </div>
        <div className="space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 my-10">
          {/* Pricing Card */}
          <div
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="800"
            className="flex flex-col p-6 mx-auto max-w-lg transition duration-500 ease-out w-full text-center   bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white"
          >
            <h4 className="mb-4 text-3xl font-semibold">
              We Work Like Our Business
            </h4>
            <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
              We provide our services as it is our business. We offer an array
              of packages to suit all needs.
            </p>
          </div>
          {/* Pricing Card */}
          <div
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="800"
            className="flex flex-col  mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 dark:bg-slate-800 dark:text-white"
          >
            <div className="p-8">
              <h4 className="mb-4 text-3xl font-semibold">Affordable</h4>
              <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
                Our clients love us because we provide affordable services
                without losing the quality.
              </p>
            </div>
          </div>
          {/* Pricing Card */}
          <div
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-duration="800"
            className="flex flex-col p-6 mx-auto max-w-lg transition duration-500 ease-out w-full text-center  bg-white rounded-lg border border-slate-100 shadow dark:border-slate-600 xl:p-8 dark:bg-slate-800 dark:text-white"
          >
            <h4 className="mb-4 text-3xl font-semibold">
              Get Most Of Your Budget
            </h4>
            <p className="font-light text-slate-500 sm:text-lg dark:text-slate-400">
              Our team of experts work very hard for your business, so you can
              get maximum results from your resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
