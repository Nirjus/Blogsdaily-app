import React from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <div className=" w-full h-auto bg-gray-100 shadow-xl">
      <div className=" max-w-7xl m-auto p-8">
        <div className=" pt-10">
          <Logo />
          <div className="flex justify-center items-center gap-10 mt-10">
            <a
              href="https://twitter.com/hamza_siddiqui1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/twitter.svg" alt="twitter" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-siddiqui-2a3a791b2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/linkedin.svg" alt="linkedin" className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/hamza-siddiqui"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/github.svg" alt="github" className="w-8 h-8" />
            </a>
            <a
              href="mailto:hamza.siddiqui1997@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/gmail.svg" alt="gmail" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
