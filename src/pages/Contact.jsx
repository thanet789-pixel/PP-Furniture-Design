import React from "react";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { images } from "../content";

function Contact() {
  const companyMapUrl =
    "https://www.google.com/maps/search/?api=1&query=88%2F8%20%E0%B8%96%E0%B8%99%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%8D%E0%B8%88%E0%B8%99%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B9%80%E0%B8%A9%E0%B8%81%20%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%9A%E0%B8%B1%E0%B8%A7%E0%B8%97%E0%B8%AD%E0%B8%87%20%E0%B8%99%E0%B8%99%E0%B8%97%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5%2011110";

  return (
    <main className="page">
      <section className="hero contact-hero">
        <img src={images.kitchen} alt="" className="hero-bg" />
        <div className="hero-shade" />
        <div className="site-shell hero-content contact-layout">
          <div>
            <p className="eyebrow">CONTACT US</p>
            <h1>Let’s Create<br />Something Beautiful<br />Together</h1>
            <h2>ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ</h2>
            <div className="gold-line" />
            <p className="lead">
              ทีมงานของเราพร้อมให้คำปรึกษา ออกแบบ และสร้างสรรค์เฟอร์นิเจอร์บิวท์อิน
              ที่ตรงใจคุณที่สุด ด้วยคุณภาพและมาตรฐานระดับพรีเมียม
            </p>
            <div className="contact-benefits">
              {["ให้คำปรึกษาฟรี", "ออกแบบเฉพาะคุณ", "คุณภาพมาตรฐาน", "บริการครบวงจร"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>

          <form className="contact-form">
            <p className="eyebrow">SEND US A MESSAGE</p>
            <h3>กรอกข้อมูลให้เราติดต่อกลับ</h3>
            <div className="form-row">
              <label>ชื่อ-นามสกุล *<input placeholder="กรอกชื่อ-นามสกุล" /></label>
              <label>เบอร์โทรศัพท์ *<input placeholder="กรอกเบอร์โทรศัพท์" /></label>
            </div>
            <label>อีเมล<input placeholder="กรอกอีเมลของคุณ" /></label>
            <label>บริการที่สนใจ<select defaultValue=""><option value="" disabled>เลือกบริการที่สนใจ</option><option>Built-in Furniture</option><option>3D Design</option><option>Renovation</option></select></label>
            <label>รายละเอียดโครงการ<textarea rows="5" placeholder="บอกเราถึงความต้องการของคุณ" /></label>
            <button className="gold-btn">ส่งข้อมูล <ArrowRight size={18} /></button>
          </form>
        </div>
      </section>

      <section className="site-shell contact-info-grid">
        <article className="info-card">
          <p className="eyebrow">CONTACT INFORMATION</p>
          <h2>ช่องทางการติดต่อ</h2>
          <p><Phone /> 02-123-4567</p>
          <p><Mail /> info@pphomefurniture.com</p>
          <p><MessageCircle /> @pphome</p>
          <p><MapPin /> 88/8 ถนนกาญจนาภิเษก บางบัวทอง นนทบุรี 11110</p>
          <p><Clock /> จันทร์ - เสาร์ 9:00 - 18:00 น. (หยุดวันอาทิตย์)</p>
        </article>

        <article className="showroom-card">
          <p className="eyebrow">VISIT OUR SHOWROOM</p>
          <h2>เยี่ยมชมโชว์รูมของเรา</h2>
          <img src={images.kitchen} alt="" />
          <a
            className="outline-btn"
            href={companyMapUrl}
            target="_blank"
            rel="noreferrer"
          >
            ดูเส้นทาง <ArrowRight size={18} />
          </a>
        </article>

        <a
          className="map-card"
          href={companyMapUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="เปิดแผนที่ที่อยู่บริษัท PP HOME FURNITURE"
        >
          <img src={images.map} alt="" />
          <div className="map-pin">PP</div>
        </a>
      </section>
    </main>
  );
}

export default Contact;
