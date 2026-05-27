import React from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ArrowRight, X } from "lucide-react";
import { db } from "../firebase";
import { images, portfolioItems as defaultPortfolioItems, stats } from "../content";

const filters = [
  "ALL",
  "RESIDENTIAL",
  "CONDOMINIUM",
  "HOUSE",
  "KITCHEN",
  "WARDROBE",
  "LIVING ROOM",
  "BEDROOM",
  "WORKSPACE",
];

function normalizePortfolioItem(item, index = 0) {
  return {
    id: item.id || item.title,
    category: item.category || "RESIDENTIAL",
    title: item.title || "",
    thai: item.thai || "",
    style: item.style || "",
    desc: item.desc || item.details || "",
    details: item.details || item.desc || "",
    location: item.location || "",
    year: item.year || "",
    image: item.image || images.kitchen,
    order: Number(item.order ?? index + 1),
    isActive: item.isActive !== false,
  };
}

function Portfolio() {
  const [firebasePortfolio, setFirebasePortfolio] = React.useState([]);
  const [activeFilter, setActiveFilter] = React.useState("ALL");
  const [showLatest, setShowLatest] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);

  React.useEffect(() => {
    const portfolioQuery = query(collection(db, "portfolio"), orderBy("order", "asc"));

    return onSnapshot(
      portfolioQuery,
      (snapshot) => {
        setFirebasePortfolio(
          snapshot.docs.map((projectDoc) => normalizePortfolioItem({ id: projectDoc.id, ...projectDoc.data() })),
        );
      },
      (error) => {
        console.error("Could not load portfolio", error);
      },
    );
  }, []);

  const portfolioItems = (firebasePortfolio.length > 0
    ? firebasePortfolio
    : defaultPortfolioItems.map(normalizePortfolioItem))
    .filter((item) => item.isActive)
    .filter((item) => activeFilter === "ALL" || item.category === activeFilter)
    .sort((a, b) => (showLatest ? b.order - a.order : a.order - b.order));

  const activeProject = selectedProject || portfolioItems[0];

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
            รวมผลงานออกแบบและบิวท์อินเฟอร์นิเจอร์ที่เราดูแลอย่างละเอียด ตั้งแต่การวางคอนเซ็ปต์
            เลือกวัสดุ ผลิต ติดตั้ง ไปจนถึงการส่งมอบพื้นที่ที่ใช้งานได้จริงและสวยงามในทุกวัน
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
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "active" : ""}
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setSelectedProject(null);
                }}
              >
                {filter}
              </button>
            ))}
          </div>
          <button className={showLatest ? "active" : ""} onClick={() => setShowLatest((current) => !current)}>
            LATEST
          </button>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <button className="project-card project-card-button" key={item.id} onClick={() => setSelectedProject(item)}>
              <img src={item.image} alt={item.thai || item.title} />
              <div>
                <span>{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.thai}</p>
                <small>ดูรายละเอียด →</small>
              </div>
            </button>
          ))}
        </div>

        {portfolioItems.length === 0 && (
          <div className="admin-empty">ยังไม่มีผลงานในหมวดนี้</div>
        )}

        {activeProject && (
          <article className="service-detail-panel portfolio-detail-panel">
            <button className="service-detail-close" onClick={() => setSelectedProject(null)} aria-label="ปิดรายละเอียด">
              <X size={18} />
            </button>
            <img src={activeProject.image} alt={activeProject.thai || activeProject.title} />
            <div>
              <p className="eyebrow">PROJECT DETAIL</p>
              <h2>{activeProject.thai || activeProject.title}</h2>
              <span>{activeProject.title} · {activeProject.style || activeProject.category}</span>
              <p>{activeProject.details || activeProject.desc || "รายละเอียดผลงานจะถูกแสดงที่นี่เมื่อเพิ่มข้อมูลใน Firebase"}</p>
              <div className="portfolio-meta">
                {activeProject.category && <strong>{activeProject.category}</strong>}
                {activeProject.location && <strong>{activeProject.location}</strong>}
                {activeProject.year && <strong>{activeProject.year}</strong>}
              </div>
              <Link to="/contact" className="gold-btn">
                ปรึกษางานลักษณะนี้ <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        )}
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
