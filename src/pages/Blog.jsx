import React, {
  useMemo,
  useState,
} from "react";

import {
  CalendarDays,
  Clock,
  Search,
  X,
} from "lucide-react";

import {
  images,
} from "../content";
import { blogPosts } from "../blogContent";

function Blog() {

  const filters = [
    "ALL",
    "INTERIOR TIPS",
    "BUILT-IN IDEAS",
    "DESIGN INSPIRATION",
    "MATERIALS",
    "MAINTENANCE",
  ];

  const [activeFilter, setActiveFilter] =
    useState("ALL");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [selectedPost, setSelectedPost] =
    useState(null);

  const filteredPosts = useMemo(() => {

    return blogPosts.filter((post) => {

      const matchCategory =
        activeFilter === "ALL"
          ? true
          : post.category === activeFilter;

      const matchSearch =
        post.title
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      return matchCategory && matchSearch;

    });

  }, [activeFilter, searchTerm]);

  return (
    <main className="page">

      <section className="hero sub-hero blog-hero">

        <img
          src={images.media}
          alt=""
          className="hero-bg"
        />

        <div className="hero-shade" />

        <div className="site-shell hero-content">

          <p className="eyebrow">
            OUR BLOG
          </p>

          <h1>
            Design Ideas,
            <br />
            Built for Living
          </h1>

          <div className="gold-line" />

          <p className="lead">
            แรงบันดาลใจในการออกแบบตกแต่งภายใน
          </p>

        </div>
      </section>

      <section className="site-shell blog-panel">

        <div className="blog-tools">

          <div className="filter-row">

            <div>

              {filters.map((item) => (

                <button
                  key={item}
                  onClick={() => {
                    setActiveFilter(item);
                    setSelectedPost(null);
                  }}
                  className={
                    activeFilter === item
                      ? "active"
                      : ""
                  }
                >
                  {item}
                </button>

              ))}

            </div>

          </div>

          <label>

            <Search size={18} />

            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </label>

        </div>

        {selectedPost && (
          <article className="blog-inline-detail">
            <button
              className="service-detail-close"
              onClick={() => setSelectedPost(null)}
              aria-label="ปิดบทความ"
            >
              <X size={18} />
            </button>

            <img src={selectedPost.image} alt={selectedPost.title} />

            <div>
              <p className="eyebrow">{selectedPost.category}</p>
              <h2>{selectedPost.title}</h2>
              <div className="blog-detail-meta">
                <span>
                  <CalendarDays size={16} />
                  {selectedPost.date}
                </span>
                <span>
                  <Clock size={16} />
                  {selectedPost.read}
                </span>
              </div>
              <p className="blog-detail-lead">{selectedPost.excerpt}</p>
              {selectedPost.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        )}

        <div className="blog-grid">

          {filteredPosts.map((post) => (

            <button
              type="button"
              className="blog-card"
              key={post.id}
              onClick={() => setSelectedPost(post)}
            >

              <img
                src={post.image}
                alt={post.title}
              />

              <div>

                <span>
                  {post.category}
                </span>

                <h3>
                  {post.title}
                </h3>

                <p className="blog-excerpt">
                  {post.excerpt}
                </p>

                <p>

                  <CalendarDays size={14} />

                  {post.date}

                  <Clock size={14} />

                  {post.read}

                </p>

                <strong className="blog-read-more">
                  อ่านบทความ
                </strong>

              </div>

            </button>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Blog;
