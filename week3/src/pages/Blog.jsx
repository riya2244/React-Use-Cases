import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Exploring the Streets of Tokyo",
    excerpt:
      "Ancient temples, neon districts, and unforgettable food adventures in Japan's capital.",
    author: "Emma Chen",
    date: "Nov 15, 2025",
  },
  {
    id: 2,
    title: "Santorini Sunsets and Greek Islands",
    excerpt:
      "White-washed villages, volcanic beaches, and iconic caldera views in Greece.",
    author: "Marcus Rodriguez",
    date: "Nov 16, 2025",
  },
];

const Blog = () => {
  return (
    <div className="page-container">
      <h1>Travel Blog</h1>
      <p>Explore our latest travel adventures and destination guides</p>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <Link
            to={`/blog/${post.id}`}
            key={post.id}
            className="blog-card-link"
          >
            <div className="blog-card">
              <h2>{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-meta">
                <span className="blog-author">{post.author}</span>
                <span className="blog-date">{post.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
