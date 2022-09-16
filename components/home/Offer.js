import Button from "./Button";
import { FaCheck } from "react-icons/fa";

export default function Offer() {
  return (
    <>
      <section className="">
        <div className="container mx-auto flex justify-center items-center py-14 md:py-24">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <h2 className="text-center h2 ">
              Launch your store in less than 60 seconds
            </h2>
            <Button />
            <p className="sm-para mt-6"> No Commitments, cancle anytime!</p>
          </div>
          {/* <div className="w-1/2">
            <ul className="text-primary space-y-4">
              <li className="font-medium text-lg md:text-xl flex justify-center gap-5">
                <div className="pt-1 text-2xl">
                  <FaCheck />
                </div>
                Benefit ONE
              </li>
              <li className="font-medium text-lg md:text-xl flex justify-center gap-5">
                <div className="pt-1 text-2xl">
                  <FaCheck />
                </div>
                Benefit ONE
              </li>
              <li className="font-medium text-lg md:text-xl flex justify-center gap-5">
                <div className="pt-1 text-2xl">
                  <FaCheck />
                </div>
                Benefit ONE
              </li>
              <li className="font-medium text-lg md:text-xl flex justify-center gap-5">
                <div className="pt-1 text-2xl">
                  <FaCheck />
                </div>
                Benefit ONE
              </li>
              <li className="font-medium text-lg md:text-xl flex justify-center gap-5">
                <div className="pt-1 text-2xl">
                  <FaCheck />
                </div>
                Benefit ONE
              </li>
            </ul>
          </div> */}
        </div>
      </section>
    </>
  );
}
