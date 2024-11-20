import React from "react";
import { Link } from "react-router-dom";
import { urlFor } from "../../libs/client";

export default function ({ post }) {
  return (
    <Link to={`/blog/${post.slug.current}`} >
      <div className="group cursor-pointer">
        <div className="overflow-hidden mx-auto md:relative right-10">
          <img
            className="w-[336px] h-[319px] md:w-[541px] object-cover rounded-[23px] m-0"
            src={
              post?.mainImage
                ? urlFor(post.mainImage).width(600).height(300).url()
                : "/placeholder.jpg"
            }
            alt={post.title || "Blog Thumbnail"}
          />
          <div className="mt-4">
            <h3 className="text-[24px] font-medium leading-[43.2px] font-custom2 md:text-[36px]">
              {post.title}
            </h3>
            <p className="mt-2">{post.excerpt}</p>
            <div className="mt-2 text-[18px]  font-custom2 text-[#555555] md:text-[22px]">
              {new Date(post._createdAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
