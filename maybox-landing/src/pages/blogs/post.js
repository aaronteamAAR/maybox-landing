import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../../libs/client";
import ReactMarkdown from 'react-markdown'; // Import react-markdown
import Footer from "../../components/Footer";
import Footertemp from "../../components/Footertemp";
import Navbartemp from "../../components/Navbartemp";

// Helper function to extract text from the Sanity body
const extractText = (block) => {
  if (typeof block === 'string') {
    return block;
  }

  if (Array.isArray(block)) {
    return block.map(extractText).join('');
  }

  if (block?.children) {
    return block.children.map(extractText).join('');
  }

  return '';
};

export default function Post() {
  const { slug } = useParams(); // Get the slug from the route
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

  const { title, mainImage, body, _createdAt, author } = post;
  console.log(post);

  // Extract text from the body before passing to ReactMarkdown
  const bodyText = body ? body.map(extractText).join('') : '';

  return (
    <>
      <Navbartemp />
      <div className="container mx-auto max-w-7xl px-6 py-8">
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
          {/* Use ReactMarkdown to render the plain text */}
          <ReactMarkdown>{bodyText}</ReactMarkdown>
        </div>
      </div>
      <Footertemp />
    </>
  );
}
