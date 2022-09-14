import React, { useState } from "react";

const Faq = () => {
  const [isFAQ, setIsFAQ] = useState(true);

  const faq = [
    {
      number: 1,
      question: "What is Lapaas?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Lapaas?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Lapaas?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Lapaas?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Lapaas?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
    {
      number: 1,
      question: "What is Lapaas?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque veritatis deserunt, praesentium impedit provident amet laudantium quibusdam a saepe atque odio, quidem quia eos ab aperiam quos! Officia, ducimus temporibus!",
    },
  ];

  return (
    <section className="w-full">
      <div className="container mx-auto text-primary px-5 pb-14 md:pb-16">
        {/* :CONTAINER DISPLAY */}
        <div className="w-full h-full text-gray-700">
          {/* ::FAQ Page */}
          <div className="mx-auto max-w-8xl">
            {/* :::Title */}
            <h2 className="mx-auto py-4 w-5/6 text-center h2 font-semibold">
              Frequently Asked Questions
            </h2>
            {/* :::Accordion Panel */}
            <dl className="my-5 sm:my-10 p-3 w-full grid grid-cols-2 gap-10">
              {faq.map((faq) => (
                <div
                  key={faq.number}
                  className="col-span-2 lg:col-span-1 flex flex-col"
                >
                  <dt className="p-2 inline-flex items-center bg-primaryLight">
                    {/* <span className="px-2 text-4xl text-primary font-medium">
                      Q.
                    </span> */}
                    <span className="px-2 font-bold text-base md:text-xl text-primary text-center">
                      Q: {faq.question}
                    </span>
                  </dt>
                  <dd className="p-2 inline-flex items-top bg-white">
                    {/* <span className="px-2 text-4xl text-primary font-medium">
                      A.
                    </span> */}
                    <span className="px-2 sm-para">{faq.answer}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
