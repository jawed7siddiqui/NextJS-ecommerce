/* eslint-disable @next/next/no-img-element */
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="text-white  bg-textColor">
      <div className="container mx-auto space-y-10 px-5 pt-14 pb-16 md:pb-24">
        <div>
          <h1 className="flex justify-center text-3xl sm:text-4xl md:text-5xl  font-extrabold mb-0 text-center">
            Become Digital Marketing Scientist
          </h1>
          <h2 className="flex justify-center text-3xl sm:text-4xl md:text-5xl  mt-3 italic font-light text-center">
            In 90 Days With Practical Assignments
          </h2>
        </div>
        <div className="flex md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-12 md:mb-0 items-center text-center">
            <div className="flex w-full md:justify-start justify-center items-end">
              <iframe
                className="w-full aspect-video border-textColor border rounded-sm"
                src="https://www.youtube.com/embed/LkBE8IFeFiM"
                title="video"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="my-auto">
              <div className="flex items-center text-lg text-left">
                <div className="text-3xl sm:text-5xl mr-2">
                  <FaCheckCircle className="" />
                </div>
                <p className="text-xl">
                  Grow your own business or start consulting for others
                </p>
              </div>
              <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                <div className="text-3xl sm:text-5xl mr-2">
                  <FaCheckCircle className="" />
                </div>
                <p className="text-xl">200+ Hours of Content</p>
              </div>
              {/* <div className="flex items-center text-lg text-left mt-3 md:mt-9">
              <div className="text-3xl sm:text-5xl mr-2">
                <FaCheckCircle className="" />
              </div>
               <p className="text-xl">200+ hours of training</p>
            </div> */}
              <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                <div className="text-3xl sm:text-5xl mr-2">
                  <FaCheckCircle className="" />
                </div>
                <p className="text-xl">
                  100% Job Assistance to all the Students
                </p>
              </div>
              <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                <div className="text-3xl sm:text-5xl mr-2">
                  <FaCheckCircle className="" />
                </div>
                <p className="text-xl">
                  Practical Assignment with Hand Holding Support
                </p>
              </div>
              <div className="flex items-center text-lg text-left mt-3 md:mt-9">
                <div className="text-3xl sm:text-5xl mr-2">
                  <FaCheckCircle className="" />
                </div>
                <p className="text-xl">100% Job Placement By Jobwala99.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
