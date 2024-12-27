import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/common/logo";

type Props = {
  step?: number;
  setStep: (step: number) => void;
};

const StepRole = ({ setStep }: Props) => {
  const [role, setRole] = useState("");
  const handleClickNext = () => {
    if (role.trim() === "") return;
    setStep(2);
  };
  return (
    <div className=" w-full md:w-[50%] p-5">
      <div className=" max-w-md m-auto mb-10">
        <div className=" w-fit mb-3">
          <Logo />
        </div>
        <h1 className=" text-3xl font-bold mb-2 text-gray-600">
          First step of account creation
        </h1>
        <p className=" text-gray-500">select a role to proceed</p>
        <blockquote className="mt-6 border-l-2 bg-gray-300/50 border-l-gray-400 p-2 pl-6 text-stone-500 italic">
          A user can only read and comment on posts. An editor can read, write
          and delete posts.
        </blockquote>
      </div>
      <div className=" max-w-md m-auto space-y-5 w-full my-5">
        <div
          className={` flex items-center space-x-3 p-3 px-4 rounded-lg cursor-pointer ${
            role === "user" ? "bg-indigo-500 text-white" : "bg-white"
          }`}
          onClick={() => setRole("user")}
        >
          <div
            className={`w-5 h-5 rounded-full ${
              role === "user" ? "bg-white" : "bg-indigo-500"
            }`}
          />
          <p
            className={` font-bold ${
              role === "user" ? "text-white" : "text-indigo-500"
            }`}
          >
            User
          </p>
        </div>
        <div
          className={` flex items-center space-x-3 p-3 px-4 rounded-lg cursor-pointer ${
            role === "editor" ? "bg-indigo-500 text-white" : "bg-white"
          }`}
          onClick={() => setRole("editor")}
        >
          <div
            className={`w-5 h-5 rounded-full ${
              role === "editor" ? "bg-white" : "bg-indigo-500"
            }`}
          />
          <p
            className={` font-bold ${
              role === "editor" ? "text-white" : "text-indigo-500"
            }`}
          >
            Editor
          </p>
        </div>
      </div>
      <div className=" w-full max-w-md m-auto mt-10 ">
        <button
          disabled={role.trim() === ""}
          onClick={handleClickNext}
          className=" bg-indigo-500 active:bg-indigo-400 text-white flex justify-center items-center gap-4 p-2 rounded-lg w-full "
        >
          Next <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default StepRole;
