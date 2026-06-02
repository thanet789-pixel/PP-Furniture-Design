import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Logo } from "./Navbar";
import { images } from "../content";

const mapCoordinates = "13.550896390570566,100.699127645502";
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${mapCoordinates}`;

function Footer() {
  const quickLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Services", "/services"],
    ["Portfolio", "/portfolio"],
    ["Process", "/process"],
    ["Blog", "/blog"],
    ["Contact", "/contact"],
    ["Get Quote", "/contact"],
  ];

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>
            PP Home Furniture & Design โดย บริษัท เพิ่มพูน รุ่งเรือง เฟอร์นิเจอร์ จำกัด
            รับออกแบบ ผลิต และติดตั้งเฟอร์นิเจอร์บิวท์อินครบวงจร ด้วยดีไซน์ทันสมัยและงานคุณภาพ
          </p>
          <div className="social-row">
            <a href="https://line.me/ti/p/~0880904970" target="_blank" rel="noreferrer" aria-label="LINE 088-090-4970">
              <MessageCircle size={17} />
            </a>
            <Facebook size={17} />
            <Instagram size={17} />
            <Youtube size={17} />
          </div>
        </div>

        <div>
          <h3>QUICK LINKS</h3>
          <div className="footer-links two-col">
            {quickLinks.map(([name, path]) => (
              <Link key={name} to={path}>
                {name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3>CONTACT US</h3>
          <div className="contact-list">
            <a href="tel:0880904970"><Phone size={16} /> 088-090-4970</a>
            <a href="mailto:permphun@gmail.com"><Mail size={16} /> permphun@gmail.com</a>
            <a href="https://line.me/ti/p/~0880904970" target="_blank" rel="noreferrer">
              <MessageCircle size={16} /> 088-090-4970
            </a>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              <MapPin size={16} />
              <span>
                9/89, 9/98 หมู่ 2 ต.แพรกษาใหม่<br />
                อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10280
              </span>
            </a>
          </div>
        </div>

        <div>
          <h3>GALLERY</h3>
          <div className="footer-gallery">
            {[images.kitchen, images.living, images.media, images.closet].map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
        </div>
      </div>

      <div className="site-shell footer-bottom">
        <span>© 2026 PP Home Furniture & Design. All Rights Reserved.</span>
        <span>Tax ID 0115566016170 <b>|</b> Permphun Rungrung Furniture Co., Ltd.</span>
      </div>
    </footer>
  );
}

export default Footer;
