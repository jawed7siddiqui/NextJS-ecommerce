/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Radio } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { AiOutlineClose } from "react-icons/ai";

const PersonalInfo = ({ formData, setFormData }) => {
  const [techType, setTechType] = useState("html");
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);

  const handleClose = (value) => {
    setShowModal(false);
    setSelectedValue(value);
  };

  const lists = [
    {
      title: "FMCG & Grocery",
      img: "https://images.unsplash.com/photo-1490885578174-acda8905c2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    },
    {
      title: "Restaurants & Hotels",
      img: "https://images.unsplash.com/photo-1577003811926-53b288a6e5d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Kirana Store",
      img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
    },
    {
      title: "Bakery & Cake Shops",
      img: "https://images.unsplash.com/photo-1577003833154-a92bbd63ae13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Beauty & Cosmetics",
      img: "https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "Fruits & Vegetables",
      img: "https://images.unsplash.com/photo-1560487765-67095b892dd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80",
    },
  ];

  return (
    <div className="">
      {/* <Select
        size="lg"
        color="gray"
        label="Select Category"
        value={formData.category}
        onChange={(event) => setFormData({ ...formData, category: event })}
      >
        <Option value="Kirana">Kirana</Option>
        <Option value="Hotel">Hotel</Option>
        <Option value="Fashion">Fashion</Option>
        <Option value="Grossery">Grossery</Option>
      </Select> */}

      {/* <ul className="space-y-4 flex flex-wrap md:pr-28 mx-4 my-2">
        {lists.map((list) => (
          <>
            <li
              className="flex w-1/2 bg-brown-600 justify-start items-center gap-3 cursor-pointer md:text-lg text-black"
              onClick={() => handleClose(list.title)}
            >
              <img className="w-12 h-12 rounded" src={list.img} alt="" />
              {list.title}
            </li>
          </>
        ))}
      </ul> */}
      <div className="flex flex-wrap">
        {lists.map((list) => (
          <div key={list.title} className="p-1 md:p-2 w-1/2 cursor-pointer">
            <button className="h-full w-full flex items-center border-gray-200 border p-2 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 hover:bg-gray-50 active:bg-gray-50 focus:outline-none focus:ring focus:ring-teal-500 bg-teal-50">
              <img
                alt="team"
                className="w-7 md:w-12 h-7 md:h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-2 md:mr-4"
                src={list.img}
              />
              <div className="flex-grow">
                <h2 className="text-gray-900 text-xs md:text-base text-left font-medium">
                  {list.title}
                </h2>
              </div>
            </button>
          </div>
        ))}
      </div>
      {/* <input
        type="text"
        placeholder="Select Category"
        value={selectedValue}
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-2 mt-1"
        onClick={() => setShowModal(true)}
        // value={formData.email}
        // onChange={(event) =>
        //   setFormData({ ...formData, email: event.target.value })
        // }
      />

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl"> */}
      {/*content*/}
      {/* <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"> */}
      {/*header*/}
      {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl font-semibold">Select Category</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiOutlineClose />
                  </button>
                </div> */}
      {/*body*/}
      {/* <div className="relative p-6 flex-auto">
                  <ul className="space-y-4 flex flex-wrap md:pr-28 mx-4 my-2">
                    {lists.map((list) => (
                      <>
                        <li
                          className="flex w-1/2 md:w-full justify-start items-center gap-3 cursor-pointer md:text-lg text-black"
                          onClick={() => handleClose(list.title)}
                        >
                          <img
                            className="w-12 md:w-16 h-12 md:h-16 rounded"
                            src={list.img}
                            alt=""
                          />
                          {list.title}
                        </li>
                      </>
                    ))}
                  </ul>
                </div> */}
      {/* </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null} */}
    </div>
  );
};
export default PersonalInfo;

// import React from "react";

// function PersonalInfo({ formData, setFormData }) {
//   return (
//     <div className="personal-info-container">
//       <input
//         type="text"
//         placeholder="First Name..."
//         value={formData.firstName}
//         onChange={(e) => {
//           setFormData({ ...formData, firstName: e.target.value });
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Last Name..."
//         value={formData.lastName}
//         onChange={(e) => {
//           setFormData({ ...formData, lastName: e.target.value });
//         }}
//       />
//       <input
//         type="text"
//         placeholder="Username..."
//         value={formData.username}
//         onChange={(e) => {
//           setFormData({ ...formData, username: e.target.value });
//         }}
//       />
//     </div>
//   );
// }

// export default PersonalInfo;
