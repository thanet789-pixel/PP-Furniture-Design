import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react";
import { Logo } from "./Navbar";
import { images } from "../content";

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
            รับออกแบบและผลิตเฟอร์นิเจอร์บิวท์อินครบวงจร สำหรับบ้าน คอนโด และอาคารสำนักงาน
            ด้วยทีมงานมืออาชีพ และวัสดุคุณภาพสูง
          </p>
          <div className="social-row">
            <Facebook size={17} />
            <Instagram size={17} />
            <MessageCircle size={17} />
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
            <p><Phone size={16} /> 02-123-4567</p>
            <p><Mail size={16} /> info@pphomefurniture.com</p>
            <p><MessageCircle size={16} /> @pphome</p>
            <p><MapPin size={16} /> 88/8 ถนนกาญจนาภิเษก บางบัวทอง นนทบุรี 11110</p>
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
        <span>© 2024 PP HOME FURNITURE. All Rights Reserved.</span>
        <span>Privacy Policy <b>|</b> Terms of Service</span>
      </div>
    </footer>
  );
}

export default Footer;
