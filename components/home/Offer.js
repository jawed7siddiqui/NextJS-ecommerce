import Button from "./Button";
import { FaCheck } from "react-icons/fa";

export default function Offer() {
  return (
    <>
      <section className="">
        <div className="container mx-auto flex justify-center items-center py-10">
          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="text-4xl tracking-tight font-bold dark:text-white">
              Launch your store in less than 60 seconds
            </h3>
            <Button />
            <p className="font-medium sm:text-xl dark:text-slate-400">
              No Commitments, cancle anytime!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
