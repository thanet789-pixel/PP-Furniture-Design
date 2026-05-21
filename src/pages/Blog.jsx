import React from "react";
import { CalendarDays, Clock, Search } from "lucide-react";
import { blogPosts, images } from "../content";

function Blog() {
  const filters = ["ALL", "INTERIOR TIPS", "BUILT-IN IDEAS", "DESIGN INSPIRATION", "MATERIALS", "MAINTENANCE"];

  return (
    <main className="page">
      <section className="hero sub-hero blog-hero">
        <img src={images.media} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <p className="eyebrow">OUR BLOG</p>
          <h1>Design Ideas,<br />Built for Living</h1>
          <div className="gold-line" />
          <p className="lead">
            แรงบันดาลใจในการออกแบบตกแต่งภายใน และสาระน่ารู้เกี่ยวกับเฟอร์นิเจอร์บิวท์อิน
            เพื่อบ้านที่สวยงามและใช้งานได้จริง
          </p>
        </div>
      </section>

      <section className="site-shell blog-panel">
        <div className="blog-tools">
          <div className="filter-row">
            <div>
              {filters.map((item, index) => (
                <button className={index === 0 ? "active" : ""} key={item}>{item}</button>
              ))}
            </div>
          </div>
          <label>
            <Search size={18} />
            <input placeholder="Search articles..." />
          </label>
        </div>

        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article className="blog-card" key={post.title}>
              <img src={post.image} alt="" />
              <div>
                <span>{post.category}</span>
                <h3>{post.title}</h3>
                <p><CalendarDays size={14} /> {post.date} <Clock size={14} /> {post.read}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button>‹</button><button className="active">1</button><button>2</button><button>3</button><span>...</span><button>8</button><button>›</button>
        </div>
      </section>

      <section className="site-shell subscribe-strip">
        <img src={images.materials} alt="" />
        <div>
          <strong>STAY INSPIRED</strong>
          <p>รับไอเดียการออกแบบและเคล็ดลับดี ๆ เพื่อบ้านในฝันของคุณ</p>
        </div>
        <form>
          <input placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </form>
      </section>
    </main>
  );
}

export default Blog;
