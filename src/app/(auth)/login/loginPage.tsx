"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "@/constants/imports";
import Logo from "@/components/common/logo";
import SocialAuth from "../_components/social-auth";
import LoginComponent from "./_components/formComponent";

const LoginPage: React.FC = () => {
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
          <LoginComponent />
          <p className=" text-center mt-6 text-gray-500 text-sm ">
            Dont have account?{" "}
            <span className=" text-indigo-500 font-semibold">
              <Link href={"/register"}>Create an account?</Link>
            </span>
          </p>
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
