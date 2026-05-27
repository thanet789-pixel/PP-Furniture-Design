import React from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ArrowRight, X } from "lucide-react";
import { db } from "../firebase";
import { icons, images, processSteps, services as defaultServices } from "../content";

function normalizeService(item, index = 0) {
  return {
    id: item.id || item.title,
    icon: typeof item.icon === "string" ? item.icon : item.icon?.displayName || "PackageCheck",
    title: item.title || "",
    thai: item.thai || "",
    desc: item.desc || "",
    details: item.details || item.desc || "",
    image: item.image || images.kitchen,
    order: Number(item.order ?? index + 1),
    isActive: item.isActive !== false,
  };
}

function getIcon(name) {
  return icons[name] || icons.PackageCheck;
}

function Services() {
  const [firebaseServices, setFirebaseServices] = React.useState([]);
  const [selectedService, setSelectedService] = React.useState(null);

  React.useEffect(() => {
    const servicesQuery = query(collection(db, "services"), orderBy("order", "asc"));

    return onSnapshot(
      servicesQuery,
      (snapshot) => {
        setFirebaseServices(snapshot.docs.map((doc) => normalizeService({ id: doc.id, ...doc.data() })));
      },
      (error) => {
        console.error("Could not load services", error);
      },
    );
  }, []);

  const serviceItems = (firebaseServices.length > 0 ? firebaseServices : defaultServices.map(normalizeService))
    .filter((item) => item.isActive)
    .sort((a, b) => a.order - b.order);

  const activeService = selectedService || serviceItems[0];

  return (
    <main className="page">
      <section className="hero sub-hero service-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content split">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h1>Complete Built-in<br />Solutions for Every Space</h1>
            <h2>บริการออกแบบและผลิตเฟอร์นิเจอร์บิวท์อินครบวงจร</h2>
            <div className="gold-line" />
            <p className="lead">
              เราดูแลทุกขั้นตอน ตั้งแต่ให้คำปรึกษา ออกแบบ 3D ผลิตด้วยวัสดุคุณภาพสูง
              และติดตั้งโดยทีมงานมืออาชีพ เพื่อให้คุณได้พื้นที่ที่สวยงามและใช้งานได้จริง
            </p>
            <Link to="/contact" className="outline-btn">
              ปรึกษาฟรี / รับใบเสนอราคา <ArrowRight size={18} />
            </Link>
          </div>

          <div className="hero-feature-card compact">
            {serviceItems.slice(0, 4).map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <button
                  className="feature-row service-feature-button"
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                >
                  <Icon />
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.thai}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="site-shell section-block">
        <div className="section-title with-action">
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2>บริการของเรา</h2>
          </div>
          <p className="section-note">คลิกการ์ดบริการเพื่อดูรายละเอียดเพิ่มเติม</p>
        </div>
        <div className="service-grid">
          {serviceItems.map((item) => {
            const Icon = getIcon(item.icon);
            return (
              <button
                className="service-card service-card-button"
                key={item.id}
                onClick={() => setSelectedService(item)}
              >
                <img src={item.image} alt="" />
                <div>
                  <Icon />
                  <span>{item.title}</span>
                  <h3>{item.thai}</h3>
                  <p>{item.desc}</p>
                </div>
              </button>
            );
          })}
        </div>

        {activeService && (
          <article className="service-detail-panel">
            <button className="service-detail-close" onClick={() => setSelectedService(null)} aria-label="ปิดรายละเอียด">
              <X size={18} />
            </button>
            <img src={activeService.image} alt="" />
            <div>
              <p className="eyebrow">SERVICE DETAIL</p>
              <h2>{activeService.thai}</h2>
              <span>{activeService.title}</span>
              <p>{activeService.details || activeService.desc}</p>
              <Link to="/contact" className="gold-btn">
                สนใจบริการนี้ <ArrowRight size={18} />
              </Link>
            </div>
          </article>
        )}
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
        <Link to="/contact" className="gold-btn">
          ติดต่อเราเลย <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Services;
