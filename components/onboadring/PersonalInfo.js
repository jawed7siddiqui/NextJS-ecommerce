import { useState } from "react";
import { Radio } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { AiTwotoneShop } from "react-icons/ai";

const PersonalInfo = ({ formData, setFormData }) => {
  const [techType, setTechType] = useState("html");

 
  
  return (
    <div className="">

     <Select size="lg" color="gray" label="Select Category" value={formData.category} onChange={(event) =>
          setFormData({ ...formData, category: event })
        }>
        <Option value="Kirana">Kirana</Option>
        <Option value="Hotel">Hotel</Option>
        <Option value="Fashion">Fashion</Option>
        <Option value="Grossery">Grossery</Option>
      </Select>

  
      <div className="mt-5 flex flex-col">
        <Radio
          color="gray"
          id="html"
          name="type"
          label="Business To Business"
          defaultChecked
          value="Business To Business"
          onChange={(event) =>
            setFormData({ ...formData, site_type: event.target.value })
          }
        />
        <Radio
          color="gray"
          id="react"
          name="type"
          label="Business To Consumer"
          value="Business To Consumer"
           onChange={(event) =>
            setFormData({ ...formData, site_type: event.target.value })
          }
        />
        <Radio color="gray" id="java" name="type" label="Direct To Consumer" 
        value="Direct To Consumer" 
         onChange={(event) =>
          setFormData({ ...formData, site_type: event.target.value })
        }
        />
      </div>
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
