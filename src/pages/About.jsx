import React from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  Gem,
  Ruler,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { images, processSteps, stats, values } from "../content";
import { db } from "../firebase";

const fallbackTeam = [
  ["DESIGNER", "ออกแบบ 3D"],
  ["PROJECT MANAGER", "ควบคุมงาน"],
  ["PRODUCTION TEAM", "ทีมผลิต"],
  ["INSTALLATION TEAM", "ทีมติดตั้ง"],
];

const projectHighlights = [
  {
    icon: Ruler,
    title: "ออกแบบเฉพาะพื้นที่",
    desc: "เริ่มจากการฟังโจทย์ สำรวจพื้นที่จริง และวางฟังก์ชันให้เหมาะกับการใช้ชีวิตของแต่ละบ้าน",
  },
  {
    icon: Gem,
    title: "วัสดุและงานผลิตคุณภาพ",
    desc: "คัดเลือกวัสดุที่เหมาะกับงบประมาณและรูปแบบงาน พร้อมควบคุมรายละเอียดตั้งแต่ผลิตถึงติดตั้ง",
  },
  {
    icon: ClipboardCheck,
    title: "ดูแลครบทุกขั้นตอน",
    desc: "มีทีมประสานงาน ติดตามความคืบหน้า ตรวจรับงาน และดูแลหลังส่งมอบอย่างเป็นระบบ",
  },
];

const promises = [
  "ให้คำปรึกษาก่อนเริ่มงานอย่างตรงไปตรงมา",
  "ออกแบบให้สวย ใช้งานจริง และดูแลรักษาง่าย",
  "แจ้งรายละเอียดงาน วัสดุ และระยะเวลาอย่างชัดเจน",
  "ติดตั้งโดยทีมช่างที่เข้าใจงานบิวท์อิน",
];

function normalizeTeamMember(member, index = 0) {
  return {
    id: member.id || member.role || String(index),
    role: member.role || "",
    name: member.name || "",
    image: member.image || images.team,
    order: Number(member.order ?? index + 1),
    isActive: member.isActive !== false,
  };
}

function About() {
  const [firebaseTeam, setFirebaseTeam] = React.useState([]);

  React.useEffect(() => {
    const teamQuery = query(collection(db, "teamMembers"), orderBy("order", "asc"));

    return onSnapshot(
      teamQuery,
      (snapshot) => {
        setFirebaseTeam(snapshot.docs.map((teamDoc) => normalizeTeamMember({ id: teamDoc.id, ...teamDoc.data() })));
      },
      (error) => {
        console.error("Could not load team members", error);
      },
    );
  }, []);

  const team = (firebaseTeam.length > 0
    ? firebaseTeam
    : fallbackTeam.map(([role, name], index) => normalizeTeamMember({ role, name, image: images.team }, index)))
    .filter((member) => member.isActive)
    .sort((a, b) => a.order - b.order);

  return (
    <main className="page about-page">
      <section className="hero sub-hero about-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />

        <div className="site-shell hero-content about-hero-layout">
          <div className="about-hero-copy">
            <p className="breadcrumb">HOME / ABOUT US</p>
            <h1>
              About PP Home
              <span>เฟอร์นิเจอร์บิวท์อินที่คิดจากชีวิตจริง</span>
            </h1>
            <p className="lead">
              เราออกแบบ ผลิต และติดตั้งเฟอร์นิเจอร์บิวท์อินสำหรับบ้าน คอนโด และพื้นที่ทำงาน
              โดยให้ความสำคัญกับความสวยงาม ฟังก์ชัน รายละเอียดงาน และประสบการณ์ของลูกค้าตั้งแต่วันแรกจนถึงวันส่งมอบ
            </p>
            <div className="about-hero-actions">
              <Link to="/contact" className="gold-btn">
                ปรึกษาฟรี / ขอใบเสนอราคา <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="outline-btn">
                ดูผลงานของเรา
              </Link>
            </div>
          </div>

          <aside className="about-signature-panel">
            <span>PP HOME FURNITURE</span>
            <h2>Built-in furniture with design, detail, and care.</h2>
            <p>
              งานทุกชิ้นถูกวางแผนให้เข้ากับพื้นที่จริง ใช้งานได้ดีในทุกวัน และยังคงภาพลักษณ์ที่อบอุ่น เรียบหรู
              และเป็นตัวตนของเจ้าของบ้าน
            </p>
            <div className="about-panel-checks">
              {promises.slice(0, 3).map((item) => (
                <p key={item}>
                  <CheckCircle2 size={18} />
                  {item}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="site-shell about-stat-band">
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

      <section className="site-shell about-story-section">
        <div className="about-story-media">
          <img src={images.media} alt="ตัวอย่างงานเฟอร์นิเจอร์บิวท์อินของ PP Home Furniture" />
          <div>
            <strong>10+ Years</strong>
            <span>ประสบการณ์งานบิวท์อิน</span>
          </div>
        </div>

        <div className="about-story-copy">
          <p className="eyebrow">WHO WE ARE</p>
          <h2>ทีมที่เข้าใจทั้งดีไซน์ งานผลิต และการใช้งานจริง</h2>
          <p>
            PP HOME FURNITURE เชื่อว่างานบิวท์อินที่ดีไม่ใช่แค่สวยในภาพ แต่ต้องทำให้บ้านใช้งานง่ายขึ้น
            จัดเก็บเป็นระบบขึ้น และอยู่ได้นานขึ้น เราจึงดูแลทุกโปรเจกต์ด้วยกระบวนการที่ชัดเจน ตั้งแต่รับโจทย์
            ออกแบบ 3D เลือกวัสดุ ผลิต ติดตั้ง ไปจนถึงตรวจรับงานร่วมกับลูกค้า
          </p>
          <div className="about-promise-list">
            {promises.map((item) => (
              <span key={item}>
                <CheckCircle2 size={18} />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell about-highlight-grid">
        {projectHighlights.map((item) => {
          const Icon = item.icon;
          return (
            <article key={item.title}>
              <Icon />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          );
        })}
      </section>

      <section className="about-values-band">
        <div className="site-shell about-values-layout">
          <div>
            <p className="eyebrow">OUR VALUES</p>
            <h2>คุณค่าที่เรายึดมั่นในทุกโปรเจกต์</h2>
            <p>
              เราทำงานด้วยมาตรฐานเดียวกันในทุกขนาดพื้นที่ เพราะรายละเอียดเล็ก ๆ คือสิ่งที่ทำให้บ้านดูดีและใช้งานได้จริงในระยะยาว
            </p>
          </div>
          <div className="about-values-grid">
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

      <section className="site-shell about-process-section">
        <div className="about-section-heading">
          <p className="eyebrow">OUR PROCESS</p>
          <h2>ทำงานเป็นขั้นตอน ชัดเจน และตรวจสอบได้</h2>
        </div>
        <div className="about-process-grid">
          {processSteps.slice(0, 6).map((step) => {
            const Icon = step.icon;
            return (
              <article key={step.no}>
                <span>{step.no}</span>
                <Icon />
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell about-team-section">
        <div className="about-section-heading">
          <p className="eyebrow">OUR TEAM</p>
          <h2>ทีมงานที่ดูแลตั้งแต่แบบแรกถึงวันติดตั้ง</h2>
        </div>
        <div className="about-team-layout">
          <div className="about-team-board">
            <img src={images.team} alt="ทีมงาน PP Home Furniture & Design" />
          </div>
          <aside className="about-quote-card">
            <Sparkles />
            <p>บ้านที่ดีเริ่มจากการออกแบบที่เข้าใจ และสร้างด้วยความใส่ใจในทุกรายละเอียด</p>
            <span>PP HOME FURNITURE</span>
          </aside>
        </div>
      </section>

      <section className="site-shell about-cta">
        <div>
          <BadgeCheck />
          <h2>พร้อมเปลี่ยนพื้นที่ของคุณให้สวยและใช้งานได้จริง</h2>
          <p>ส่งแบบบ้าน รูปพื้นที่ หรือไอเดียที่ต้องการมาให้ทีมช่วยประเมินเบื้องต้นได้เลย</p>
        </div>
        <Link to="/contact" className="gold-btn">
          เริ่มปรึกษาโปรเจกต์ <ArrowRight size={18} />
        </Link>
        <ShieldCheck className="about-cta-watermark" />
      </section>
    </main>
  );
}

export default About;
