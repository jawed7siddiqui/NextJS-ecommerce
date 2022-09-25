import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { FaAngleDown } from "react-icons/fa";

const Faq = () => {
  const [isFAQ, setIsFAQ] = useState(true);

  const faq = [
    {
      key: 1,
      q: "What is Lapaas?",
      a: "Lapaas is a one stop solution for all your digital needs.",
    },
    {
      key: 1,
      q: "What are the features of this tool?",
      a: "We offer all the features that you need to sell your products online.",
    },
    {
      key: 1,
      q: "How much does it cost to use this tool?",
      a: "As of Now, Lapaas is completely free. You don’t have to pay any commission or buy any subscription plan.",
    },
    {
      key: 1,
      q: "How is this tool different from other tools?",
      a: "We offer an easy to use tool which is completely free with all the features that you need to sell your products online.",
    },
    {
      key: 1,
      q: "How do I create my online presence through this tool?",
      a: "Simply click on Build your online store now and provide basic details regarding your business then choose your products and your store is ready to launch.",
    },
    {
      key: 1,
      q: "What are the monthly charges for using this platform?",
      a: "There are no monthly charges for using this platform.",
    },
  ];

  return (
    <section className="text-textColor">
      <div className="container mx-auto px-5 pb-14">
        {/* :TITLE & IMAGE */}
        <div className="mb-8 mx-auto max-w-4xl flex flex-col items-center">
          <h2 className="text-center text-2xl sm:text-3xl text-textColor font-semibold px-2">
            Frequently Asked qs
          </h2>
        </div>

        {/* :FAQ */}
        <dl className="mx-auto p-2 flex flex-col items-center">
          {/* ::Accordion Panel */}
          {faq.map((faq) => (
            <Disclosure key={faq.key}>
              {({ open }) => (
                <>
                  {/* q */}
                  <dt
                    className={`group w-full border-b-4 border-primaryLight text-textColor hover:bg-primaryLight hover:text-textColor ${
                      open && "bg-primaryLight text-textColor"
                    }`}
                  >
                    <Disclosure.Button className="py-5 px-3 w-full flex justify-between items-center">
                      <span className="text-lg md:text-xl text-left font-semibold">
                        {faq.q}
                      </span>
                      <FaAngleDown
                        className={`${
                          open && "transform rotate-180 text-textColor"
                        } flex-shrink-0 ml-2 w-7 h-7 text-textColor group-hover:text-textColor`}
                        aria-hidden="true"
                      />
                    </Disclosure.Button>
                  </dt>
                  {/* a */}
                  <dd className="w-full text-xl text-textColor">
                    <Disclosure.Panel className="px-4 pt-4 pb-2">
                      {faq.a}
                    </Disclosure.Panel>
                  </dd>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>{" "}
    </section>
  );
};

export default Faq;
