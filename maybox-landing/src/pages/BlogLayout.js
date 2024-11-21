import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BlogCard from "../components/blog/BlogCard";
import LatestCard from "../components/blog/LatestCard";
import Blog from "./blogs/blog";
import Footertemp from "../components/Footertemp";

export default function BlogLayout() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold font-custom my-24 text-center">Maybox Journal</h1>
      <LatestCard />
      <div className="flex  justify-center items-center md:mt-16">
        <Blog />
      </div>
      <Footertemp />
    </>
  );
}
