import React from 'react';
import BlogCard from './BlogCard';

export default function BlogGrid({ posts = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:place-self-end gap-y-8 gap-x-16 p-6">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}