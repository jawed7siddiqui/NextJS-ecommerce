import React from "react";
import { Radio } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import {
  IoBagHandleOutline,
  IoAlertCircleOutline,
  IoCubeOutline,
} from "react-icons/io5";

function OtherInfo({ formData, setFormData }) {
  return (
    <div className="flex flex-col">
      <div className="space-y-5">
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-orange-50">
              <IoBagHandleOutline className="text-4xl text-orange-500" />
            </div>
            <h3 className="text-xl">Ecommerce</h3>
          </div>
          <div>
            <Radio color="orange" id="physical" name="type" defaultChecked />
          </div>
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-indigo-50">
              <IoCubeOutline className="text-4xl text-indigo-500" />
            </div>
            <h3 className="text-lg">Site</h3>
          </div>
          <div>
            <Radio disabled color="indigo" id="digital" name="type" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherInfo;
