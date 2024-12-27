"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { images } from "@/constants/imports";
import Image from "next/image";
import Logo from "@/components/common/logo";
import { useRouter } from "next/navigation";

function VerifyAccountPage() {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const handleVerifyAccount = () => {
    if (otp.length !== 6) return;
    console.log(otp);
    router.push("/");
  };
  return (
    <div>
      <div className=" flex max-md:flex-col justify-center items-center w-full min-h-screen ">
        <div className=" w-full md:w-[50%] p-5 flex-grow">
          <div className=" max-w-md m-auto">
            <div className=" w-fit mb-3">
              <Logo />
            </div>
            <h1 className=" text-3xl font-bold mb-2 text-gray-600">
              Verify Your Account
            </h1>
            <p className=" text-gray-500 mb-10 text-center">
              Please enter the 6-digit OTP sent to your email to verify your
              account.
            </p>
          </div>
          <div className=" w-full max-w-md m-auto mt-5 ">
            <div className=" mx-auto w-fit mb-5">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={setOtp}
                pattern={REGEXP_ONLY_DIGITS}
                className=" "
              >
                <InputOTPGroup>
                  <InputOTPSlot
                    className=" bg-gray-100 border-gray-500"
                    index={0}
                  />
                  <InputOTPSlot
                    className=" bg-gray-100 border-gray-500"
                    index={1}
                  />
                  <InputOTPSlot
                    className=" bg-gray-100 border-gray-500"
                    index={2}
                  />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot
                    className=" bg-gray-100 border-gray-500"
                    index={3}
                  />
                  <InputOTPSlot
                    className=" bg-gray-100 border-gray-500"
                    index={4}
                  />
                  <InputOTPSlot
                    className=" bg-gray-100 border-gray-500"
                    index={5}
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>
            <button
              disabled={otp.length !== 6}
              onClick={handleVerifyAccount}
              className=" my-5 bg-indigo-500 active:bg-indigo-400 text-white p-2 rounded-lg w-full "
            >
              Verify account
            </button>
          </div>
          <p className=" text-gray-500 mt-5 text-center">
            Didn&apos;t receive the code?{" "}
            <span
              onClick={handleVerifyAccount}
              className=" cursor-pointer text-blue-500"
            >
              Resend OTP
            </span>
          </p>
        </div>
        <div className=" w-full md:w-[50%] relative flex-shrink-0">
          <Image
            src={images.verifyImage}
            alt="login-pic"
            className=" object-cover w-full sm:h-screen "
          />
        </div>
      </div>
    </div>
  );
}

export default VerifyAccountPage;
