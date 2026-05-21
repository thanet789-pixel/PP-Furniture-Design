import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images, portfolioItems, stats } from "../content";

function Portfolio() {
  const filters = ["ALL", "RESIDENTIAL", "CONDOMINIUM", "HOUSE", "KITCHEN", "WARDROBE", "LIVING ROOM", "BEDROOM", "WORKSPACE"];

  return (
    <main className="page">
      <section className="hero sub-hero portfolio-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <p className="eyebrow">OUR PORTFOLIO</p>
          <h1>Our Portfolio<br /><span>ผลงานของเรา</span></h1>
          <div className="gold-line" />
          <p className="lead">
            รวมผลงานออกแบบและบิวท์อินเฟอร์นิเจอร์ที่เราใส่ใจในทุกรายละเอียด
            เพื่อให้ทุกพื้นที่ของคุณสวยงาม และตอบโจทย์การใช้งานได้อย่างลงตัว
          </p>
          <div className="hero-stats">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.value}>
                  <Icon />
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell portfolio-panel">
        <div className="filter-row">
          <div>
            {filters.map((filter, index) => (
              <button className={index === 0 ? "active" : ""} key={filter}>{filter}</button>
            ))}
          </div>
          <button>LATEST</button>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article className="project-card" key={item.title}>
              <img src={item.image} alt={item.thai} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.thai}</p>
                <Link to="/contact">ดูรายละเอียด →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell cta-banner wide">
        <div>
          <p className="eyebrow">LET'S WORK TOGETHER</p>
          <h2>Ready to Transform Your Space?</h2>
          <p>ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ ด้วยเฟอร์นิเจอร์บิวท์อินที่ตอบโจทย์ทุกไลฟ์สไตล์</p>
        </div>
        <div className="cta-points">
          <span>FREE CONSULTATION</span>
          <span>CUSTOM DESIGN</span>
          <span>QUALITY GUARANTEE</span>
        </div>
        <Link to="/contact" className="gold-btn">ติดต่อเราเลย <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}

export default Portfolio;
