import React from "react";
import { Radio } from "@material-tailwind/react";
import {
  IoAlbumsOutline,
  IoCheckmarkCircleOutline,
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
              <IoAlbumsOutline className="text-2xl text-teal-500" />
            </div>
            <h3 className="text-lg">Retail</h3>
          </div>
          <div>
            <Radio color="teal" id="retail" name="type" defaultChecked />
          </div>
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-red-50">
              <IoCubeOutline className="text-2xl text-red-500" />
            </div>
            <h3 className="text-lg">Wholesale</h3>
          </div>
          <div>
            <Radio color="red" id="wholesale" name="type" />
          </div>
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <div className="p-2 rounded-md bg-purple-50">
              <IoCheckmarkCircleOutline className="text-2xl text-purple-500" />
            </div>
            <h3 className="text-lg">Both</h3>
          </div>
          <div>
            <Radio color="purple" id="both" name="type" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherInfo;
