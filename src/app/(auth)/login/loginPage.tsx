"use client";
import React, { useState } from "react";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/imports";
import Logo from "@/components/common/logo";
import SocialAuth from "../_components/social-auth";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div>
      <div className=" flex max-md:flex-col justify-center items-center w-full min-h-screen ">
        <div className=" w-full md:w-[50%] p-5">
          <div className=" max-w-md m-auto">
            <div className=" w-fit mb-3">
              <Logo />
            </div>
            <h1 className=" text-3xl font-bold mb-2 text-gray-600">
              Log in to your account
            </h1>
            <p className=" text-gray-500 mb-10">
              welcome back, select a method to login
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
              <Mail color="gray" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className=" outline-none w-full"
              />
            </div>
            <div className=" flex mb-4 border-2 border-stone-300 space-x-4 bg-white p-3 px-4 rounded-lg items-center ">
              <Lock color="gray" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
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
            <div className=" px-1 flex justify-between items-center mb-5">
              <span className=" flex  justify-center items-center">
                <input type="checkbox" className="mr-2 p-1" />
                <p className=" text-sm">Remember me</p>
              </span>
              <p className=" font-semibold text-indigo-500 text-sm ">
                <Link href={"/forgot-password"}>Forgot password?</Link>
              </p>
            </div>
            <button className=" bg-indigo-500 active:bg-indigo-400 text-white p-2 rounded-lg w-full ">
              Login
            </button>
            <p className=" text-center mt-6 text-gray-500 text-sm ">
              Dont have account?{" "}
              <span className=" text-indigo-500 font-semibold">
                <Link href={"/register"}>Create an account?</Link>
              </span>
            </p>
          </form>
        </div>
        <div className=" w-full md:w-[50%] relative flex-shrink-0">
          <Image
            src={images.loginImage}
            alt="login-pic"
            className=" object-cover w-full sm:h-screen "
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
