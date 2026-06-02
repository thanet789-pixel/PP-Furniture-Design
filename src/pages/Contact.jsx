import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  ArrowRight,
  FileText,
  Handshake,
  Headphones,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sofa,
} from "lucide-react";
import { images } from "../content";
import { db } from "../firebase";

const initialFormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const addressText = "9/89, 9/98 Moo 2, Praeksa Mai Subdistrict, Mueang Samut Prakan District, Samut Prakan 10280, Thailand";
const companyMapCoordinates = "13.550896390570566,100.699127645502";
const companyMapUrl = `https://www.google.com/maps/search/?api=1&query=${companyMapCoordinates}`;

function Contact() {
  const [formData, setFormData] = React.useState(initialFormData);
  const [submitStatus, setSubmitStatus] = React.useState("idle");
  const [submitMessage, setSubmitMessage] = React.useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: serverTimestamp(),
        source: "website-contact-page",
      });

      setFormData(initialFormData);
      setSubmitStatus("success");
      setSubmitMessage("ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด");
    } catch (error) {
      console.error("Could not submit contact form", error);
      setSubmitStatus("error");
      setSubmitMessage("ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
    }
  };

  const contactMethods = [
    { icon: Phone, label: "PHONE", value: "088-090-4970", href: "tel:0880904970", action: "โทรหาเรา" },
    { icon: Mail, label: "EMAIL", value: "permphun@gmail.com", href: "mailto:permphun@gmail.com", action: "ส่งอีเมล" },
    { icon: MessageCircle, label: "LINE OFFICIAL", value: "088-090-4970", href: "https://line.me/ti/p/~0880904970", action: "เปิด LINE", external: true },
  ];

  const serviceHighlights = [
    { icon: ShieldCheck, title: "QUALITY PRODUCTS", thai: "สินค้าคุณภาพ" },
    { icon: Sofa, title: "MODERN DESIGN", thai: "ดีไซน์ทันสมัย" },
    { icon: Handshake, title: "RELIABLE SERVICE", thai: "บริการที่เชื่อถือได้" },
    { icon: Home, title: "CRAFTED WITH CARE", thai: "ใส่ใจในทุกรายละเอียด" },
  ];

  return (
    <main className="page contact-page">
      <section className="site-shell contact-profile-section">
        <div className="contact-profile-main">
          <div className="contact-company-head">
            <img src="/pp-home-logo.png" alt="PP Home Furniture & Design" />
            <div>
              <p className="eyebrow">CONTACT US</p>
              <h1>PP HOME FURNITURE & DESIGN</h1>
              <h2>บริษัท เพิ่มพูน รุ่งเรือง เฟอร์นิเจอร์ จำกัด</h2>
              <p>Permphun Rungrung Furniture Co., Ltd.</p>
            </div>
          </div>

          <div className="contact-method-grid">
            {contactMethods.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  href={item.href}
                  className="contact-method-card"
                  key={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  aria-label={`${item.action} ${item.value}`}
                >
                  <span><Icon size={24} /></span>
                  <div>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="contact-map-panel">
            <div className="contact-map-heading">
              <div>
                <p className="eyebrow">OUR LOCATION</p>
                <h2>Easy to Find,<br />Easy to Reach</h2>
              </div>
              <a href={companyMapUrl} target="_blank" rel="noreferrer" className="outline-btn">
                เปิดแผนที่ <ArrowRight size={18} />
              </a>
            </div>
            <a
              className="contact-map-visual"
              href={companyMapUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="เปิดแผนที่ PP Home Furniture & Design บน Google Maps"
            >
              <span className="map-road map-road-top">ถนน บางนา-ตราด <b>ไปชลบุรี →</b></span>
              <span className="map-road map-road-middle">ถนน เทพารักษ์ <b>ไปบางบ่อ →</b></span>
              <span className="map-road map-road-bottom">ถนน แพรกษา <b>ไปบางปู →</b></span>
              <span className="map-road map-road-vertical">ถนนสุขุมวิทสายเก่า</span>
              <span className="map-road map-road-center">ซ. สุขุมวิทภาค</span>
              <span className="map-place mega">MEGA<br />BANGNA</span>
              <span className="map-place airport">ท่าอากาศยานสุวรรณภูมิ<br />SUVARNABHUMI AIRPORT</span>
              <span className="map-place temple">วัดแพรกษา</span>
              <span className="map-place seven">7</span>
              <span className="map-company-pin">
                <MapPin size={34} />
                <strong>บจก. เพิ่มพูน รุ่งเรือง<br />เฟอร์นิเจอร์ จำกัด</strong>
              </span>
            </a>
          </div>

          <div className="contact-address-grid">
            <article>
              <MapPin />
              <div>
                <h3>OUR ADDRESS</h3>
                <p>
                  เลขที่ 9/89, 9/98 หมู่ 2 ต.แพรกษาใหม่<br />
                  อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280
                </p>
                <p>
                  9/89, 9/98 Moo 2, Praeksa Mai Subdistrict,<br />
                  Mueang Samut Prakan District,<br />
                  Samut Prakan 10280, Thailand
                </p>
              </div>
            </article>
            <article>
              <FileText />
              <div>
                <h3>TAX ID</h3>
                <p>เลขที่ประจำตัวผู้เสียภาษี 0115566016170</p>
                <p>Tax ID 0115566016170</p>
              </div>
            </article>
          </div>
        </div>

        <aside className="contact-thank-panel">
          <div>
            <p className="script-word">Thank</p>
            <strong>YOU</strong>
            <span />
            <h2>THANK YOU<br />FOR YOUR INTEREST</h2>
            <p>ขอบคุณที่ให้ความไว้วางใจในสินค้าและบริการของเรา</p>
          </div>
          <a href="https://line.me/ti/p/~0880904970" target="_blank" rel="noreferrer" className="line-chat-card">
            <MessageCircle size={34} />
            <strong>SCAN TO CHAT</strong>
            <p>ติดต่อเราได้ง่าย ๆ ผ่าน LINE 088-090-4970</p>
          </a>
          <div className="question-card">
            <Headphones size={42} />
            <h3>HAVE A QUESTION?</h3>
            <p>เรายินดีให้คำปรึกษาและพร้อมให้บริการคุณ</p>
          </div>
          <img src={images.living} alt="" />
        </aside>
      </section>

      <section className="contact-service-bar">
        <div className="site-shell">
          {serviceHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title}>
                <Icon />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.thai}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="site-shell contact-form-section">
        <div>
          <p className="eyebrow">SEND US A MESSAGE</p>
          <h2>ให้เราติดต่อกลับ</h2>
          <p>
            ฝากข้อมูลของคุณไว้ ทีมงาน PP Home Furniture & Design จะติดต่อกลับเพื่อให้คำปรึกษาเรื่องงานออกแบบ
            ผลิต และติดตั้งเฟอร์นิเจอร์บิวท์อิน
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              ชื่อ-นามสกุล *
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="กรอกชื่อ-นามสกุล"
                required
              />
            </label>
            <label>
              เบอร์โทรศัพท์ *
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="กรอกเบอร์โทรศัพท์"
                required
              />
            </label>
          </div>
          <label>
            อีเมล
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="กรอกอีเมลของคุณ"
            />
          </label>
          <label>
            บริการที่สนใจ
            <select name="service" value={formData.service} onChange={handleChange}>
              <option value="" disabled>เลือกบริการที่สนใจ</option>
              <option>Built-in Furniture</option>
              <option>3D Design</option>
              <option>Renovation</option>
              <option>Furniture & Design Consultation</option>
            </select>
          </label>
          <label>
            รายละเอียดโครงการ
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="บอกเราถึงความต้องการของคุณ"
            />
          </label>
          {submitMessage && (
            <p className={submitStatus === "error" ? "form-message error" : "form-message success"}>
              {submitMessage}
            </p>
          )}
          <button className="gold-btn" disabled={submitStatus === "submitting"}>
            {submitStatus === "submitting" ? "กำลังส่ง..." : "ส่งข้อมูล"} <ArrowRight size={18} />
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
