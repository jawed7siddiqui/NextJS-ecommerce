import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Input } from "@material-tailwind/react";

function RegisterUser({ formData, setFormData }) {
  const [open, setOpen] = useState(false);

  // handle toggle
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <div className="space-y-4">
      {/* <label htmlFor="email" className="text-sm text-gray-600">
        Username
      </label> */}
      <Input
        type="text"
        size="lg"
        color="gray"
        label="Username"
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        }
      />
      <Input
        type="text"
        size="lg"
        color="gray"
        label="Email"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      />
      <Input
        size="lg"
        type={open === false ? "password" : "text"}
        label="Password"
        color="gray"
        icon={
          open === false ? (
            <AiOutlineEye onClick={toggle} className="text-2xl" />
          ) : (
            <AiOutlineEyeInvisible onClick={toggle} className="text-2xl" />
          )
        }
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      />

      {/* <input
        type="text"
        placeholder="Username"
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        value={formData.username}
        onChange={(event) =>
          setFormData({ ...formData, username: event.target.value })
        }
      /> */}

      {/* <input
        type="text"
        placeholder="Email..."
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-1 focus:ring-gray-100 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mb-4"
        value={formData.email}
        onChange={(event) =>
          setFormData({ ...formData, email: event.target.value })
        }
      /> */}

      {/* <input
        type="text"
        placeholder="Password..."
        className="w-full bg-white rounded border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={formData.password}
        onChange={(event) =>
          setFormData({ ...formData, password: event.target.value })
        }
      /> */}
    </div>
  );
}

export default RegisterUser;
