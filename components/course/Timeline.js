import React from "react";

export default function Timeline() {
  return (
    <>
      <section className="bg-primaryLight text-white mt-14">
        <div className="container mx-auto space-y-10 px-5 py-14">
          <h2 className="text-3xl sm:text-4xl font-bold pt-5 text-center text-textColor capitalize">
            how this course will change you
          </h2>
          {/* component */}
          <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative ">
            <div className="border-l-2 mt-10">
              {/* Card 1 */}
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                {/* Dot Follwing the Left Vertical Line */}
                <div className="w-5 h-5 bg-pink absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
                {/* Line that connecting the box with the vertical line */}
                <div className="w-10 h-1 bg-pink absolute -left-10 z-0" />
                {/* Content that showing in the box */}
                <div className="flex-auto">
                  <h2 className="text-2xl font-bold capitalize">
                    Enroll in Course
                  </h2>
                  <p>
                    If you want to transform yourself into a successful digital
                    marketer then first you have to Enrol in our course.
                  </p>
                </div>
              </div>
              {/* Card 2 */}
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-[#193247] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                {/* Dot Follwing the Left Vertical Line */}
                <div className="w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
                {/* Line that connecting the box with the vertical line */}
                <div className="w-10 h-1 bg-white absolute -left-10 z-0" />
                {/* Content that showing in the box */}
                <div className="flex-auto">
                  <h2 className="text-2xl font-bold capitalize">
                    Take Live Classes
                  </h2>
                  <p>
                    Attend Daily Live Classes to learn all the modules in detail
                  </p>
                </div>
              </div>
              {/* Card 3 */}
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                {/* Dot Follwing the Left Vertical Line */}
                <div className="w-5 h-5 bg-pink absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
                {/* Line that connecting the box with the vertical line */}
                <div className="w-10 h-1 bg-pink absolute -left-10 z-0" />
                {/* Content that showing in the box */}
                <div className="flex-auto">
                  <h2 className="text-2xl font-bold capitalize">
                    Complete the Assignment
                  </h2>
                  <p>
                    Work on all the assignments you have got after taking each
                    live class
                  </p>
                </div>
              </div>
              {/* Card 4 */}
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-[#193247] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                {/* Dot Follwing the Left Vertical Line */}
                <div className="w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
                {/* Line that connecting the box with the vertical line */}
                <div className="w-10 h-1 bg-white absolute -left-10 z-0" />
                {/* Content that showing in the box */}
                <div className="flex-auto">
                  <h2 className="text-2xl font-bold capitalize">
                    Discuss your learning with others
                  </h2>
                  <p>
                    If you have any doubt or you want to discuss something you
                    can discuss it with your peers and team lapaas.
                  </p>
                </div>
              </div>
              {/* Card 5 */}
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-pink text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                {/* Dot Follwing the Left Vertical Line */}
                <div className="w-5 h-5 bg-pink absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
                {/* Line that connecting the box with the vertical line */}
                <div className="w-10 h-1 bg-pink absolute -left-10 z-0" />
                {/* Content that showing in the box */}
                <div className="flex-auto">
                  <h2 className="text-2xl font-bold capitalize">
                    Complete Live Projects
                  </h2>
                  <p>
                    Work on live projects to gain more experience in digital
                    marketing.
                  </p>
                </div>
              </div>
              {/* Card 6 */}
              <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-white text-[#193247] rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                {/* Dot Follwing the Left Vertical Line */}
                <div className="w-5 h-5 bg-white absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0" />
                {/* Line that connecting the box with the vertical line */}
                <div className="w-10 h-1 bg-white absolute -left-10 z-0" />
                {/* Content that showing in the box */}
                <div className="flex-auto">
                  <h2 className="text-2xl font-bold capitalize">
                    You have become Master
                  </h2>
                  <p>
                    After completing all the steps you will become a master in
                    digital marketing skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
