import React, {
  useMemo,
  useState,
} from "react";

import {
  CalendarDays,
  Clock,
  Search,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  blogPosts,
  images,
} from "../content";

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
                  onClick={() =>
                    setActiveFilter(item)
                  }
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

        <div className="blog-grid">

          {filteredPosts.map((post) => (

            <Link
              to={`/blog/${post.id}`}
              className="blog-card"
              key={post.id}
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

                <p>

                  <CalendarDays size={14} />

                  {post.date}

                  <Clock size={14} />

                  {post.read}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}

export default Blog;