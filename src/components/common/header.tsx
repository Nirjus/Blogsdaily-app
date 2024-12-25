import React from "react";
import Logo from "./logo";
import Link from "next/link";
import SearchBox from "./Search-box";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

type Props = {};

const routes = [
  {
    name: "Blogs",
    url: "/blogs",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const Header = (props: Props) => {
  return (
    <div className=" w-full h-20 bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <nav className="w-full min-h-full flex justify-between items-center h-20 max-w-7xl m-auto">
        {/* Blog logo */}
        <Logo />
        <div className=" flex justify-center items-center gap-10">
          {/* Search box */}
          <SearchBox />
          {/* Navbar  */}
          <ul className="flex gap-5 justify-center items-center h-full">
            {routes.map((route) => (
              <li
                key={route.name}
                className=" hover:border-b-2 duration-150 ease-in-out transition-all border-b-blue-500 text-lg hover:text-blue-600"
              >
                <Link href={route.url}>{route.name}</Link>
              </li>
            ))}
          </ul>
          {/* profile */}
          <Button variant={"default"}>
            <LogIn />
            Login
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
