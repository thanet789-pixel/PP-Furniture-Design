import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { images, portfolioItems, processSteps, stats } from "../content";

function Home() {
  return (
    <main>
      <section className="hero home-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />

        <div className="site-shell hero-content home-layout">
          <div>
            <p className="eyebrow">PP HOME FURNITURE</p>
            <h1>Built for Living,<br />Designed for You</h1>
            <h2>รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร</h2>
            <p className="lead">
              ออกแบบ ผลิต และติดตั้ง ด้วยทีมงานมืออาชีพ วัสดุคุณภาพสูง
              งานประณีต ตรงเวลา พร้อมดูแลทุกขั้นตอนตั้งแต่เริ่มจนส่งมอบ
            </p>
            <Link to="/contact" className="gold-btn">
              ปรึกษาฟรี / รับใบเสนอราคา <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hero-feature-card">
            {[
              ["PREMIUM QUALITY", "วัสดุเกรดพรีเมียม"],
              ["CUSTOM DESIGN", "ออกแบบเฉพาะคุณ"],
              ["WARRANTY", "รับประกันผลงาน"],
            ].map(([title, desc]) => (
              <div className="feature-row" key={title}>
                <span className="line-icon">◇</span>
                <div>
                  <strong>{title}</strong>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell floating-stats">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <article className="stat-card" key={item.value}>
              <Icon />
              <div>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          );
        })}
      </section>

      <section className="site-shell section-block">
        <div className="section-title with-action">
          <div>
            <p className="eyebrow">OUR WORK</p>
            <h2>ผลงานของเรา</h2>
          </div>
          <Link to="/portfolio" className="outline-btn">ดูผลงานทั้งหมด <ArrowRight size={18} /></Link>
        </div>

        <div className="portfolio-row">
          {portfolioItems.slice(0, 5).map((item) => (
            <article className="image-card" key={item.title}>
              <img src={item.image} alt={item.thai} />
              <div>
                <span>{item.category}</span>
                <h3>{item.thai}</h3>
                <p>{item.style}</p>
                <Link to="/portfolio">ดูรายละเอียด →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="site-shell process-strip">
        <div>
          <p className="eyebrow">OUR PROCESS</p>
          <h2>ขั้นตอนการทำงาน</h2>
        </div>
        {processSteps.slice(0, 5).map((step) => {
          const Icon = step.icon;
          return (
            <article key={step.no}>
              <Icon />
              <small>{step.no}</small>
              <h3>{step.title.split(" / ")[0]}</h3>
              <p>{step.desc.split(" ").slice(0, 5).join(" ")}</p>
            </article>
          );
        })}
      </section>

      <section className="site-shell about-preview">
        <div className="video-card">
          <img src={images.closet} alt="" />
          <button aria-label="Play video"><Play fill="currentColor" /></button>
        </div>
        <div>
          <p className="eyebrow">ABOUT PP HOME FURNITURE</p>
          <h2>เราใส่ใจในทุกรายละเอียด<br />เพื่อบ้านที่เป็นตัวคุณ</h2>
          <p>
            PP HOME FURNITURE รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร
            ด้วยแนวคิดที่ทันสมัย ผสานดีไซน์ ฟังก์ชัน และคุณภาพ เพื่อให้บ้านของคุณสมบูรณ์แบบที่สุด
          </p>
          <Link to="/about" className="outline-btn">เกี่ยวกับเรา <ArrowRight size={18} /></Link>
        </div>
        <aside className="number-stack">
          {stats.map((item) => (
            <div key={item.value}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
}

export default Home;
