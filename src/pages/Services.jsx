import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images, processSteps, services } from "../content";

function Services() {
  return (
    <main className="page">
      <section className="hero sub-hero service-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content split">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h1>Complete Built-in<br />Solutions for Every Space</h1>
            <h2>บริการออกแบบและผลิตเฟอร์นิเจอร์บิวท์อิน ครบวงจร</h2>
            <div className="gold-line" />
            <p className="lead">
              เราดูแลทุกขั้นตอน ตั้งแต่ให้คำปรึกษา ออกแบบ 3D ผลิตด้วยวัสดุคุณภาพสูง
              ติดตั้งโดยทีมงานมืออาชีพ เพื่อให้คุณได้พื้นที่ที่สวยงาม ใช้งานได้จริง
            </p>
            <Link to="/contact" className="outline-btn">ปรึกษาฟรี / รับใบเสนอราคา <ArrowRight size={18} /></Link>
          </div>

          <div className="hero-feature-card compact">
            {services.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <div className="feature-row" key={item.title}>
                  <Icon />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.thai}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell section-block">
        <div className="section-title">
          <p className="eyebrow">OUR SERVICES</p>
          <h2>บริการของเรา</h2>
        </div>
        <div className="service-grid">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <article className="service-card" key={item.title}>
                <img src={item.image} alt="" />
                <div>
                  <Icon />
                  <span>{item.title}</span>
                  <h3>{item.thai}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell process-line-section">
        <p className="eyebrow">OUR PROCESS</p>
        <h2>ขั้นตอนการทำงาน</h2>
        <div className="process-line">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.no}>
                <Icon />
                <small>{step.no}</small>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell cta-banner">
        <img src={images.media} alt="" />
        <div>
          <h2>Ready to Transform Your Space?</h2>
          <p>ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ พร้อมคำแนะนำจากทีมงานมืออาชีพ</p>
        </div>
        <Link to="/contact" className="gold-btn">ติดต่อเราเลย <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}

export default Services;
