import React from "react";

function RegisterUser({ formData, setFormData }) {
  return (
    <div className="">
      <label htmlFor="email" className="text-sm text-gray-600">
        Username
      </label>
      <input
        type="text"
        placeholder="Username"
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        }
      />

      <input
        type="text"
        placeholder="Email..."
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />

      <input
        type="text"
        placeholder="Password..."
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />
    </div>
  );
}

export default RegisterUser;
