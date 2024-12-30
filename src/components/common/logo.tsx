import Image from "next/image";
import React from "react";

import img from "@/assets/B logo.png";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-center w-30 h-full">
        <Image src={img} alt="logo" height={50} width={50} />
        <span className="font-bold text-2xl underline italic decoration-2 decoration-yellow-400">
          Blogsdaily
        </span>
      </div>
    </Link>
  );
}

export default Logo;
