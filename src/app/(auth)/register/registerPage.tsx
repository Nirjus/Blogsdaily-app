"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail, User2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/imports";
import Logo from "@/components/common/logo";
import SocialAuth from "../_components/social-auth";
import StepRole from "./step-role";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    router.push("/verify-account");
  };
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
          <div className=" w-full md:w-[50%] p-5 flex-grow">
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
            <form
              className=" w-full max-w-md m-auto mt-5 "
              onSubmit={handleSubmit}
            >
              <div className=" flex mb-4 border-2 border-stone-300 space-x-4 bg-white p-3 px-4 rounded-lg items-center ">
                <User2 color="gray" size={20} />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter name"
                  className=" outline-none w-full"
                />
              </div>
              <div className=" flex mb-4 border-2 border-stone-300 space-x-4 bg-white p-3 px-4 rounded-lg items-center ">
                <Mail color="gray" size={20} />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter email"
                  className=" outline-none w-full"
                />
              </div>
              <div className=" flex mb-4 border-2 border-stone-300 space-x-4 bg-white p-3 px-4 rounded-lg items-center ">
                <Lock color="gray" size={20} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="Enter password"
                  className=" outline-none w-full"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <Eye size={20} color="gray" />
                  ) : (
                    <EyeOff size={20} color="gray" />
                  )}
                </button>
              </div>

              <button className=" bg-indigo-500 active:bg-indigo-400 text-white p-2 rounded-lg w-full ">
                Create account
              </button>
              <p className=" text-center mt-6 text-gray-500 text-sm ">
                Already have account?{" "}
                <span className=" text-indigo-500 font-semibold">
                  <Link href={"/login"}>Sign in here</Link>
                </span>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
