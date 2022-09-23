import { FaCheck } from "react-icons/fa";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function ImpModule() {
  const resources = [
    {
      title: "100+ Social Media Posts Templates",
      description:
        "With these templates, you can easily create interesting and engaging posts that will capture the attention of your followers.",
      price: "₹450",
    },
    {
      title: "Website Checklist",
      description:
        "Website Checklist that will give you a comprehensive overview of everything that's important for a website.",
      price: "₹300",
    },
    {
      title: "Brand Kit Guide",
      description:
        "Brand Kit Guide a collection of all the essential elements you need to create a consistent, on-brand look for your business across all channels.",
      price: "₹750",
    },
    {
      title: "SEO Cheat Sheet",
      description:
        " We’ve compiled all the best tips and tricks into one place so you can start seeing results fast.",
      price: "₹300",
    },
    {
      title: "Ads Cheat Sheet",
      description:
        "A step-by-step guide that will show you how to create Facebook Ads that capture attention, generate interest, and inspire desire.",
      price: "₹450",
    },
    {
      title: "Social Media Cheat Sheet",
      description:
        "Social Media Cheat Sheet to help you make the most of social media without feeling overwhelmed. ",
      price: "₹450",
    },
    {
      title: "Social Media Checklist",
      description:
        "Social Media Checklist that takes the guesswork out of social media and helps you create a strategy that works for your business.",
      price: "₹300",
    },
    {
      title: "Copywriting Cheat Sheet",
      description:
        "Copywriting Cheat Sheet a guide that will help you write attention-grabbing headlines, create interesting content, and produce persuasive sales materials.",
      price: "₹300",
    },
    {
      title: "Email Templates",
      description:
        " With our easy-to-use templates, you can create beautiful and professional emails in minutes.",
      price: "₹300",
    },
    {
      title: "Copywriting Templates",
      description:
        " Just fill in the blanks, and you’ll have a finished piece ready to go in no time.",
      price: "₹300",
    },
    {
      title: "Website Wireframes",
      description:
        "With our wireframes, you can quickly create a blueprint of your website that will help you visualise how everything is going to look and function.",
      price: "₹750",
    },
    {
      title: "Digital Marketing Audit Template",
      description:
        "It will help you get the most out of digital marketing. It includes all the steps you need to take, as well as a checklist of items to review.",
      price: "₹400",
    },
    {
      title: "Social Media Marketing Audit",
      description:
        "You'll be able to see what's working and what's not, so you can make the necessary changes and improve your social media marketing strategy.",
      price: "₹350",
    },
    {
      title: "SEO Audit Templates",
      description:
        "It will help you to audit any website and identify any areas that need improvement.",
      price: "₹350",
    },
    {
      title: "Website Audit Template",
      description:
        "It can help determine what areas of a website need improvement.",
      price: "₹350",
    },
    {
      title: "Digital Marketing Proposal Template",
      description:
        "You’ll be able to quickly put together a professional-looking proposal that will help you win new business.",
      price: "₹450",
    },
    {
      title: "Digital Marketing Client Agreement",
      description:
        "It will make sure that your clients are happy with your services, so this agreement allows for regular reviews of the work you’re doing together.",
      price: "₹400",
    },
    {
      title: "SEO Marketing Report Template",
      description:
        "It will show where the website stands in terms of organic search engine visibility and traffic.",
      price: "₹300",
    },
    {
      title: "PPC Marketing Report Template",
      description:
        "It will help you to send your client a customizable report on how their campaigns are performing as compared to their competitors.",
      price: "₹300",
    },
    {
      title: "Social Media Marketing Report Template",
      description:
        "It will help you to prepare a customised report for your client which showcases social media progress and results over time.",
      price: "₹300",
    },
    {
      title: "Web Design Client Questionnaire",
      description:
        "This will help you figure out what your client needs and wants from their website.",
      price: "₹400",
    },
    {
      title: "Facebook Client Questionnaire",
      description:
        "This questionnaire will help you learn more about your client’s business and how you can achieve their marketing goals.",
      price: "₹400",
    },
    {
      title: "SEO Client Questionnaire",
      description:
        "A detailed questionnaire to help you understand what your client’s business and what kind of SEO services would be the best fit for them.",
      price: "₹400",
    },
    {
      title: "Facebook Ads SOP",
      description:
        "It is a step by step guide for how to create and run a successful Facebook Ads campaign for your clients.",
      price: "₹500",
    },
    {
      title: "Website Creation SOP",
      description:
        "A step by step process to develop a website after onboarding a client.",
      price: "₹500",
    },
    {
      title: "Social Media Marketing SOP",
      description:
        "A detailed process on How to do social media marketing of a client after onboarding.",
      price: "₹500",
    },
  ];

  return (
    <section className="text-textColor">
      <div className="container mx-auto px-5">
        <div className="text-center ">
          <h3 className=" text-3xl italic font-medium mt-10">Introducing…</h3>
          <h2 className="text-3xl sm:text-4xl font-bold pt-5">
            The Most Important Module
          </h2>
          <h3 className="text-3xl font-medium pt-5 px-8 sm:px-0">
            Learn how to make a
            <span className="underline ml-2">six-figure income</span> <br />
            from Digital Marketing!
          </h3>
        </div>
        {/* <img
        src="https://img.flexifunnels.com/images/163/a0njy_1134_0HliReoxHv1134introducing.png"
        className="mx-auto mt-14"
        alt="imageoflap"
      /> */}
        <div className="px-7 md:px-32">
          <p className="text-center text-base sm:text-xl  font-medium pt-10">
            Our course will not only help you to become a digital marketing
            expert. It will also help you to monetize your digital marketing
            skills. <br />
            <span className="font-semibold mx-1">
              Once you complete this course, you will be able to start your own
              successful digital marketing business.
            </span>
            <br />
            You’ll have the skills and knowledge needed to help businesses grow
            online, and you’ll even have a portfolio of projects to show
            potential clients.
          </p>
          <h3 className="text-2xl sm:text-3xl font-medium pt-5 text-center">
            In this module you will learn
          </h3>
        </div>
        <div className="container px-5 py-8 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight p-4 rounded-md ">
                <div>
                  <FaCheck className="text-3xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">How to Start a Digital Marketing Agency</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight p-4 rounded-md ">
                <div>
                  <FaCheck className="text-3xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">How to Get Digital Marketing Clients</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight p-4 rounded-md ">
                <div>
                  <FaCheck className="text-3xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">How to Grow Digital Marketing Agency</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight p-4 rounded-md ">
                <div>
                  <FaCheck className="text-3xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">How to Get a Job as a Digital Marketer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight p-4 rounded-md ">
                <div>
                  <FaCheck className="text-3xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">How to Start Digital Marketing Freelancing</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center bg-primaryLight p-4 rounded-md ">
                <div>
                  <FaCheck className="text-3xl mr-5" />
                </div>
                <div className="flex-grow text-base sm:text-xl font-medium">
                  <p className="">How to get International Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center ">
            <h2 className="text-4xl  font-bold mt-12">Resources</h2>
            <h4 className="text-lg lg:text-xl font-semibold my-6">
              You will not only get live lectures but also receive access to our
              resources <br /> so that any type of project can be completed with
              ease!
            </h4>
            {resources.map((resource) => (
              <div key={resource.title}>
                <div className="flex flex-col md:flex-row text-lg font-medium text-left md:mx-16">
                  {/* <div className="md:w-1/4 border-y-2 border-white bg-primaryLight px-5 flex items-center py-1 md:py-5 rounded-t-sm">
                    ✔ {resource.title}
                  </div> */}
                  <div className="md:w-full bg-pink text-textColor mb-5">
                    <div className="bg-textColor flex justify-between  items-center text-white px-3 md:px-8 py-3 text-xl md:text-2xl font-semibold">
                      <h2>{resource.title}</h2>
                      <div className="hidden md:block">
                        <Stack direction="row" spacing={2}>
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: "#f58e8e",
                              borderRadius: "2px",
                            }}
                            variant="contained"
                            color="secondary"
                            size="large"
                          >
                            {resource.price}
                          </Button>
                        </Stack>
                      </div>
                      <div className="block md:hidden">
                        <Stack direction="row" spacing={2}>
                          <Button
                            style={{
                              backgroundColor: "#fff",
                              color: "#f58e8e",
                              borderRadius: "2px",
                            }}
                            variant="contained"
                            color="secondary"
                            size="small"
                          >
                            {resource.price}
                          </Button>
                        </Stack>
                      </div>
                    </div>
                    <div className="px-6 md:px-8 py-5">
                      {resource.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
