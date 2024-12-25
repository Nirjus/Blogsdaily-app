import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Blog {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  dateCreated: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Card className="w-full m-auto md:w-[350px] bg-white shadow-lg hover:shadow-xl transition-shadow rounded-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-full h-[200px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="object-cover w-full h-[200px]"
        />
        <span className="absolute top-3 left-3 bg-indigo-500 text-white text-sm px-3 py-1 rounded-lg">
          {blog.category}
        </span>
      </div>

      {/* Card Content */}
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-bold truncate">
          {blog.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 mt-2">
          {blog.dateCreated}
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 text-gray-600">
        <p className="text-sm line-clamp-3">
          {blog.description.substring(0, 100)}...
        </p>
      </CardContent>

      {/* Footer Section */}
      <CardFooter>
        <Button
          variant="outline"
          className="w-full text-indigo-600 border-indigo-500 hover:bg-indigo-50"
        >
          Read More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
