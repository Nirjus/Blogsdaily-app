import { Search } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

type Props = {};

const SearchBox = (props: Props) => {
  return (
    <div className=" bg-indigo-500 rounded-xl w-48 h-12">
      <div className=" w-full h-full cursor-pointer p-2 px-3 flex justify-between items-center ">
        <p className=" text-white ">Search...</p>
        <Button className=" w-8 h-8 rounded-xl">
          <Search color="white" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBox;
