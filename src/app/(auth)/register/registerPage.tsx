"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/imports";
import Logo from "@/components/common/logo";
import SocialAuth from "../_components/social-auth";
import StepRole from "./step-role";
// import { useRouter } from "next/navigation";
import RegisterComponent from "./_components/formComponent";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  // const router = useRouter();

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target as HTMLFormElement);
  //   const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  //   router.push("/verify-account");
  // };
  return (
    <div>
      <div className=" flex max-md:flex-col-reverse justify-center items-center w-full min-h-screen ">
        <div className=" w-full md:w-[50%] relative flex-shrink-0">
          <Image
            src={images.registerImage}
            alt="login-pic"
            className=" object-cover w-full sm:h-screen "
          />
        </div>
        {step === 1 && <StepRole setStep={setStep} />}
        {step === 2 && (
          <div className=" w-full md:w-[50%] p-5 flex-grow max-h-screen overflow-y-scroll">
            <div className=" max-w-md m-auto">
              <div className=" w-fit mb-3">
                <Logo />
              </div>
              <h1 className=" text-3xl font-bold mb-2 text-gray-600">
                Create your account
              </h1>
              <p className=" text-gray-500 mb-10">
                select a method to create account
              </p>

              <SocialAuth />

              <div className=" flex items-center space-x-3 my-10">
                <div className=" border border-gray-300 w-full" />
                <p className="whitespace-nowrap text-sm text-gray-500">
                  or continue with email
                </p>
                <div className=" border border-gray-300 w-full" />
              </div>
            </div>
            <RegisterComponent />
            <p className=" text-center mt-6 text-gray-500 text-sm ">
              Already have account?{" "}
              <span className=" text-indigo-500 font-semibold">
                <Link href={"/login"}>Sign in here</Link>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
