import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images, processSteps } from "../content";

function Process() {
  return (
    <main className="page">
      <section className="hero sub-hero process-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content">
          <p className="eyebrow">OUR PROCESS</p>
          <h1>Our Process<br /><span>ขั้นตอนการทำงานของเรา</span></h1>
          <div className="gold-line" />
          <p className="lead">
            เราให้ความสำคัญในทุกขั้นตอน เพื่อให้มั่นใจว่าทุกชิ้นงานออกมาได้มาตรฐาน
            สวยงาม และตรงตามความต้องการของคุณมากที่สุด
          </p>
          <Link to="/contact" className="outline-btn">ปรึกษาฟรี / รับใบเสนอราคา <ArrowRight size={18} /></Link>
        </div>
      </section>

      <section className="site-shell process-page-grid">
        <aside>
          <strong>8</strong>
          <h2>ขั้นตอน<br />การทำงาน</h2>
          <p>ครบทุกขั้นตอน มั่นใจได้ในคุณภาพ งานติดตั้ง และบริการหลังการขาย</p>
        </aside>
        <div className="process-card-grid">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <article className="process-card" key={step.no}>
                <img src={[images.design, images.office, images.materials, images.workshop, images.install, images.kitchen, images.media, images.living][Number(step.no) - 1]} alt="" />
                <small>{step.no}</small>
                <Icon />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell cta-banner">
        <img src={images.living} alt="" />
        <div>
          <h2>Ready to Transform Your Space?</h2>
          <p>ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ ปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        </div>
        <Link to="/contact" className="gold-btn">ติดต่อเราเลย <ArrowRight size={18} /></Link>
      </section>
    </main>
  );
}

export default Process;
