import React, { useState, useEffect } from 'react';
import { client, urlFor } from '../../libs/client'; // Assuming these are correctly set up

export default function LatestCard() {
  const [latestPost, setLatestPost] = useState(null);

  useEffect(() => {
    const fetchLatestPost = async () => {
      try {
  
        const query = `
          *[_type == "post"] | order(_createdAt desc)[0] {
            title,
            slug,
            mainImage,
            "excerpt": excerpt,
            _createdAt
          }
        `;
        const result = await client.fetch(query);
        setLatestPost(result);
      } catch (error) {
        console.error("Error fetching the latest post:", error);
      }
    };

    fetchLatestPost();
  }, []);

  if (!latestPost) {
    return (
      <div className="flex items-center font-custom2 justify-center">
        <p className='text-lg'>Loading latest post...</p>
      </div>
    );
  }

  const { title, slug, mainImage, excerpt } = latestPost;

  return (
    <div className="flex items-center mt-12 justify-center">
      <a href={`/blog/${slug?.current}`} className="relative w-[336px] h-[322px] md:w-[1201px] md:h-[647px] rounded-[20px] overflow-hidden group">
    
        {mainImage && (
          <img
            src={urlFor(mainImage).width(600).height(300).url()}
            alt={title}
            className="absolute w-full h-full object-cover"
          />
        )}

        
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 md:p-6 text-white group-hover:bg-black/50 transition-all duration-300">
        
          <h3 className="text-[26px] leading-[26.5px] font-custom md:text-[71px] md:mb-8 font-bold">
            {title}
          </h3>
        
          <p className="text-sm font-custom2 md:text-[36px] mt-1">
            {excerpt || "Story of the week"}
          </p>
        </div>

       
        <div className="absolute bottom-4 right-4 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-white text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
          <span className="text-xl">→</span>
        </div>
      </a>
    </div>
  );
}
