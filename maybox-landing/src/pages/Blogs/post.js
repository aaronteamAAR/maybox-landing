import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../libs/client";
import { PortableText } from "@portabletext/react";
import Footertemp from "../../components/Footertemp";
import Navbartemp from "../../components/Navbartemp";

export default function Post() {
  const { slug } = useParams(); 
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          body,
          _createdAt,
          author->{
    name,
    image {
      asset->{
        _id,
        url
      }
    }
  } 
        }`;
        const result = await client.fetch(query, { slug });
        setPost(result);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (!post) {
    return <div className="text-center">Post not found</div>;
  }

  const { title, body, _createdAt, author } = post;

  return (
    <>
      <Navbartemp />
      <div className="container mx-auto max-w-4xl px-8 py-8">
        <h1 className="text-4xl font-extrabold font-custom mb-4">{title}</h1>

        <div className="flex items-start my-6 text-[#555555] font-custom2">
          {author?.image?.asset?.url && (
            <img
              src={urlFor(author.image).url()}
              alt={author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
          )}
          <div className="flex flex-col">
            <p className="text-sm">
              {new Date(_createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            {author && (
              <p className="text-sm text-black">
                by&ensp;<span className="font-semibold">{author.name}</span>
              </p>
            )}
          </div>
        </div>

        <div className="prose max-w-none">
          <PortableText
            value={body}
            components={{
              types: {
                image: ({ value }) => {
                  if (value?.asset) {
                    return (
                      <img
                        src={urlFor(value.asset).url()}
                        alt={value.alt || "Blog image"}
                        className="rounded-[14px] my-4"
                      />
                    );
                  }
                  return null;
                },
              },
              marks: {
                link: ({ value, children }) => (
                  <a
                    href={value.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    {children}
                  </a>
                ),
              },
              block: {
                h1: ({ children }) => (
                  <h1 className="text-3xl font-custom text-black font-extrabold my-4">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-custom2 text-black font-bold my-3">{children}</h2>
                ),
                normal: ({ children }) => (
                  <p className="text-lg font-custom2 text-[#555555] my-2">{children}</p>
                ),
              },
            }}
          />
        </div>
      </div>
      <Footertemp />
    </>
  );
}
