import React from "react";
import { Radio } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import {
  IoBagHandleOutline,
  IoAlertCircleOutline,
  IoCubeOutline,
} from "react-icons/io5";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col">
      {/* <input
        type="text"
        placeholder="Nationality..."
        value={formData.nationality}
        onChange={(e) => {
          setFormData({ ...formData, nationality: e.target.value });
        }}
      /> */}
      <div className="space-y-5">
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-teal-50">
              <IoBagHandleOutline className="text-2xl text-teal-500" />
            </div>
            <h3 className="text-lg">Physical Goods</h3>
          </div>
          <div>
            <Radio color="teal" id="physical" name="type" defaultChecked />
          </div>
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-red-50">
              <IoCubeOutline className="text-2xl text-red-500" />
            </div>
            <h3 className="text-lg">Digital Goods (Comming Soon)</h3>
          </div>
          <div>
            <Radio disabled color="red" id="digital" name="type" />
          </div>
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-purple-50">
              <IoAlertCircleOutline className="text-2xl text-purple-500" />
            </div>
            <h3 className="text-lg">None (Comming Soon)</h3>
          </div>
          <div>
            <Radio disabled color="purple" id="none" name="type" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherInfo;
