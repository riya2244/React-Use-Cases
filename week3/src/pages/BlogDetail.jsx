import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = {
  1: {
    id: 1,
    title: "Exploring the Streets of Tokyo",
    author: "Emma Chen",
    date: "Nov 15, 2025",
    content: `Tokyo is a city where ancient temples stand alongside futuristic skyscrapers, creating an unforgettable urban landscape.

Must-Visit Neighborhoods:
• Shibuya - Iconic crossing & youth culture
• Asakusa - Historic Senso-ji Temple
• Harajuku - Bold street fashion
• Shinjuku - Neon lights & nightlife

Food Adventures: From Michelin-starred cuisine to cozy ramen shops. Visit Tsukiji Outer Market for sushi and local izakayas for pub dishes.

Best Time: Spring (cherry blossoms) or Autumn (mild weather & foliage).`,
    tags: ["Japan", "Asia", "City"],
  },
  2: {
    id: 2,
    title: "Santorini Sunsets and Greek Islands",
    author: "Marcus Rodriguez",
    date: "Nov 16, 2025",
    content: `Santorini's white-washed houses and blue domes overlook a volcanic caldera creating magical sunset panoramas.

Top Experiences:
• Sunset in Oia
• Red & Black sand beaches
• Cliffside wine tasting (Assyrtiko)
• Caldera sailing & hot springs
• Ancient Akrotiri ruins

Local Cuisine: Fresh seafood, moussaka, tomato fritters—paired with mineral-rich island wines.

Travel Tip: Visit May or September for fewer crowds and pleasant weather.`,
    tags: ["Greece", "Europe", "Island"],
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData[id];

  if (!post) {
    return (
      <div className="page-container">
        <h1>Destination Not Found</h1>
        <p>The travel story you requested does not exist.</p>
        <Link to="/blog" className="back-button">
          ← Back to Travel Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container blog-detail">
      <Link to="/blog" className="back-button">
        ← Back to Travel Blog
      </Link>
      <article>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span className="blog-author">By {post.author}</span>
          <span className="blog-date">{post.date}</span>
        </div>
        <div className="blog-content">
          {post.content
            .split("\n")
            .map((paragraph, index) =>
              paragraph.trim() ? <p key={index}>{paragraph}</p> : null
            )}
        </div>
        <div className="blog-tags">
          {post.tags.map((tag, i) => (
            <span key={i} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default BlogDetail;
