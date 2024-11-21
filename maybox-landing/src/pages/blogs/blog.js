import React, { useState, useEffect } from 'react';
import { client } from '../../libs/client';
import BlogGrid from '../../components/blog/BlogGrid';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `
          *[_type == "post"] {
            _id,
            title,
            slug,
            excerpt,
            mainImage,
            _createdAt
          }
        `;
        const results = await client.fetch(query);
        setPosts(results);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="px-4 py-8">
      <BlogGrid posts={posts} />
    </div>
  );
}
