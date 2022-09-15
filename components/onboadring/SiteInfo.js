import React from "react";
import { Checkbox } from "@material-tailwind/react";

function SignUpInfo({ formData, setFormData }) {
  return (
    <div className="">
      <label htmlFor="email" className="text-sm text-gray-600">
        Business Name <span className="text-red-500 text-base">&#42;</span>
      </label>
      <input
        type="text"
        placeholder="Lapaas"
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        value={formData.name}
        onChange={(event) =>
          setFormData({ ...formData, name: event.target.value })
        }
      />
      <label className="text-sm text-gray-600" htmlFor="file_input">
        Upload Your Logo
      </label>
      <input
        className="border-none text-sm w-full bg-gray-200 file:border-none file:bg-gray-800 file:text-white block file:p-2 rounded-md"
        aria-describedby="file_input_help"
        id="file_input"
        type="file"
      />
      <p className="text-xs text-right text-gray-600 mt-1" id="file_input_help">
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </p>
      {/* <input
        type="text"
        placeholder="Password..."
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      /> */}
      {/* <input
        type="text"
        placeholder="Confirm Password..."
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={formData.confirmPassword}
        onChange={(event) =>
          setFormData({ ...formData, confirmPassword: event.target.value })
        }
      /> */}
    </div>
  );
}

export default SignUpInfo;
