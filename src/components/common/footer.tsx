import React from "react";
import Logo from "./logo";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" w-full h-auto bg-gray-100 shadow-xl">
      <div className=" max-w-7xl m-auto p-8">
        <div className=" pt-10">
          <div className=" w-fit mx-auto">
            <Logo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full gap-8 mt-10">
            <div className="flex flex-col gap-4 mb-5 border-gray-300 md:border-r-2 md:pr-5 max-md:border-b-2">
              <h3 className="font-bold text-lg">About Us</h3>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Our Story
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Team
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Careers
              </Link>
            </div>
            <div className="flex flex-col gap-4  mb-5  border-gray-300 md:border-r-2 md:pr-5 max-md:border-b-2">
              <h3 className="font-bold text-lg">Resources</h3>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Blog
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Newsletter
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Events
              </Link>
            </div>
            <div className="flex flex-col gap-4 mb-5  border-gray-300 md:border-r-2 md:pr-5 max-md:border-b-2 ">
              <h3 className="font-bold text-lg">Support</h3>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Help Center
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-4 mb-5  ">
              <h3 className="font-bold text-lg">Connect</h3>
              <div className="flex gap-5">
                <Link
                  href="#"
                  className="text-gray-600 flex flex-col items-center hover:text-gray-900 "
                >
                  <Twitter size={25} /> Twitter
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 flex flex-col items-center hover:text-gray-900"
                >
                  <Linkedin size={25} /> Linkedin
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 flex flex-col items-center hover:text-gray-900"
                >
                  <Github size={25} /> Github
                </Link>
              </div>
            </div>
          </div>
          <div className=" flex justify-between max-md:flex-col items-center mt-5">
            <p className=" font-light">
              all rights reserved &copy; 2025 @nirjusKarmakar
            </p>
            <p className=" font-light">
              Asia Pacific , current time: {new Date().toLocaleTimeString()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
