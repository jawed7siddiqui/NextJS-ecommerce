import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
// import RegisterUser from "./RegisterUser";
import Step4 from "./Step4";
import { FaAngleLeft } from "react-icons/fa";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Link from "next/link";

function HomeForm() {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    username: "",
    nationality: "",
    site_type: "",
  });

  const handleRegister = (params, errorCallback) => {
    axios
      .post(process.env.NEXT_PUBLIC_API_ENDPOINT, {
        query: `
        mutation {
          userCreate(data: {
              name: "${formData.username}",
              phone: "9142627909",
              email: "${formData.email}",
              username: "${formData.username}",
              password: "${formData.password}",
          }) {
              id
              role_id
              name
              phone
              email
              username
              status
              created_at
              updated_at
          }
      }
          `,
      })
      .then((res) => {
        if (res.data.errors) {
          // if (errorCallback) errorCallback(res.data.errors)
          toast.error("Error : Something went wrong!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success("Your account has created successfully !", {
            position: toast.POSITION.TOP_RIGHT,
          });

          handleCreateSite();

          setTimeout(() => location.replace("http://13.126.160.113:82/"), 2000);

          // handleLogin({ email: params.email, password: params.password })
        }
      })
      .catch((err) => (errorCallback ? errorCallback(err) : null));
  };

  const handleCreateSite = (params, errorCallback) => {
    axios({
      url: process.env.NEXT_PUBLIC_API_ENDPOINT,
      method: "post",
      data: {
        query: `
        mutation {
          settingUpdateOrCreate(data:{site_name: "${formData.name}", site_category: "${formData.category}", site_type: "${formData.site_type}"}) {site_name, site_category, site_type}}
          `,
      },
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const FormTitles = [
    "What would you like to name your Business?",
    "Store Type",
    "Types of goods",
    "Choose your business category",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Step1 formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Step2 formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <Step3 formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Step4 formData={formData} setFormData={setFormData} />;
      // } else {
      //   return <RegisterUser formData={formData} setFormData={setFormData} />;

      // return <Type formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="h-full w-full flex flex-col justify-center items-center ">
        <div className="form-container fadeIn w-11/12 md:w-full h-4/6 md:h-full bg-white rounded-xl shadow-2xl flex flex-col p-8 md:p-12">
          <div className="bg-gray-300 rounded-md w-full h-2">
            <div
              className="rounded-md w-1/3 h-2 bg"
              style={{
                width:
                  page === 0
                    ? "25%"
                    : page == 1
                    ? "50%"
                    : page == 2
                    ? "75%"
                    : "100%",
              }}
            ></div>
          </div>
          <div className="text-2xl font-semibold mt-10 mb-4 capitalize">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="flex justify-between mt-5">
            <button
              className="flex items-center gap-1 cursor-pointer"
              disabled={page == 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <FaAngleLeft />
              <span>Prev</span>
            </button>
            <div className="flex justify-between gap-5">
              <button
                className="cursor-pointer text-black bg-gray-50 border-0 py-2 px-3 focus:outline-none hover:bg-gray-100 rounded "
                disabled={page == 3}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                Skip
              </button>
              <Link
                href={
                  page === FormTitles.length - 1
                    ? "/signup"
                    : "javascript:void(0)"
                }
              >
                <button
                  className="text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-base"
                  onClick={() => {
                    if (page === FormTitles.length - 1) {
                      handleRegister();

                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                  }}
                >
                  {page === FormTitles.length - 1 ? "Submit" : "Next"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeForm;
