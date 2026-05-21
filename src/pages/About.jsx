import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { images, processSteps, stats, values } from "../content";

function About() {
  const team = [
    ["DESIGNER", "ออกแบบ 3D"],
    ["PROJECT MANAGER", "ควบคุมงาน"],
    ["PRODUCTION TEAM", "ทีมผลิต"],
    ["INSTALLATION TEAM", "ทีมติดตั้ง"],
  ];

  return (
    <main className="page">
      <section className="hero sub-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content split">
          <div>
            <p className="breadcrumb">HOME / ABOUT US</p>
            <h1>About Us<br /><span>เกี่ยวกับเรา</span></h1>
            <div className="gold-line" />
            <p className="lead">
              PP HOME FURNITURE คือผู้เชี่ยวชาญด้านการออกแบบและรับทำเฟอร์นิเจอร์บิวท์อินครบวงจร
              ด้วยทีมงานมืออาชีพที่ใส่ใจทุกรายละเอียด เพื่อสร้างพื้นที่ที่ตอบโจทย์ชีวิตของคุณได้อย่างลงตัว
            </p>
            <p className="signature">PP Home Furniture</p>
          </div>
          <div className="mission-panel">
            {[
              ["OUR MISSION", "ออกแบบและสร้างสรรค์เฟอร์นิเจอร์ที่ผสานความสวยงาม ฟังก์ชัน และคุณภาพ เพื่อยกระดับคุณภาพชีวิตของลูกค้าในทุกพื้นที่"],
              ["OUR VISION", "เป็นผู้นำด้านเฟอร์นิเจอร์บิวท์อินครบวงจร ที่ลูกค้าไว้วางใจ และบอกต่อมากที่สุด"],
            ].map(([title, desc]) => (
              <article key={title}>
                <strong>{title}</strong>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell stat-band">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.value}>
              <Icon />
              <strong>{item.value}</strong>
              <p>{item.label}</p>
              <span>{item.desc}</span>
            </article>
          );
        })}
      </section>

      <section className="site-shell values-section">
        <img src={images.media} alt="" />
        <div>
          <p className="eyebrow">OUR VALUES</p>
          <h2>คุณค่าที่เรายึดมั่น</h2>
          <div className="values-grid">
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <Icon />
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell timeline-process">
        <div className="journey">
          <p className="eyebrow">OUR JOURNEY</p>
          <h2>เส้นทางของเรา</h2>
          {["2014 เริ่มต้นธุรกิจ", "2017 ขยายทีมงาน", "2020 เติบโตอย่างมั่นคง", "2024 มุ่งสู่บริการครบวงจร"].map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div>
          <p className="eyebrow">OUR PROCESS</p>
          <h2>ขั้นตอนการทำงานของเรา</h2>
          <div className="mini-process">
            {processSteps.slice(0, 6).map((step) => {
              const Icon = step.icon;
              return (
                <article key={step.no}>
                  <Icon />
                  <small>{step.no}</small>
                  <span>{step.title}</span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell team-quote">
        <div>
          <p className="eyebrow">OUR TEAM</p>
          <h2>ทีมงานของเรา</h2>
          <div className="team-grid">
            {team.map(([role, name]) => (
              <article key={role}>
                <img src={images.team} alt="" />
                <span>{role}</span>
                <strong>{name}</strong>
              </article>
            ))}
          </div>
        </div>
        <aside className="quote-panel">
          <p>บ้านที่ดี เริ่มต้นจากการออกแบบที่เข้าใจ และสร้างด้วยความใส่ใจในทุกรายละเอียด</p>
          <span>– PP HOME FURNITURE –</span>
          <Link to="/contact" className="gold-btn">ปรึกษาฟรี / รับใบเสนอราคา <ArrowRight size={18} /></Link>
        </aside>
      </section>
    </main>
  );
}

export default About;
