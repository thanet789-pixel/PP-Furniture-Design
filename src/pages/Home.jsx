import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { images, portfolioItems, processSteps, stats } from "../content";
import { motion } from "framer-motion";

// Luxury Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const kenBurns = {
  hidden: { scale: 1.15, filter: "brightness(0.6) saturate(0.9)" },
  visible: {
    scale: 1,
    filter: "brightness(0.82) saturate(1.04) contrast(1.04)",
    transition: {
      duration: 3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const statsContainer = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  }
};

const statCardVar = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const hoverScaleCard = {
  initial: { y: 0, borderColor: "rgba(228, 186, 117, 0.1)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)" },
  hover: {
    y: -8,
    borderColor: "rgba(216, 173, 102, 0.45)",
    boxShadow: "0 20px 40px rgba(216, 173, 102, 0.12)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const timelineItemVar = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

function Home() {
  const videoRef = React.useRef(null);
  const [isPreviewPlaying, setIsPreviewPlaying] = React.useState(false);

  const handlePreviewVideoClick = async () => {
    const video = videoRef.current;

    if (!video) {
      return;
    }

    if (video.paused) {
      try {
        await video.play();
        setIsPreviewPlaying(true);
      } catch {
        setIsPreviewPlaying(false);
      }
    } else {
      video.pause();
      setIsPreviewPlaying(false);
    }
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero home-hero relative">
        <motion.img 
          src="/images/home/home-hero.png" 
          alt="" 
          className="hero-bg home-hero-bg"
          initial="hidden"
          animate="visible"
          variants={kenBurns}
        />
        <div className="hero-shade" />

        <div className="site-shell hero-content home-layout">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p className="eyebrow flex items-center gap-2" variants={fadeInUp}>
              <Sparkles size={14} className="text-[#d8ad66]" /> PP HOME FURNITURE
            </motion.p>
            <motion.h1 variants={fadeInUp}>
              Built for Living,<br />Designed for You
            </motion.h1>
            <motion.h2 variants={fadeInUp}>รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร</motion.h2>
            <motion.p className="lead" variants={fadeInUp}>
              ออกแบบ ผลิต และติดตั้ง ด้วยทีมงานมืออาชีพ วัสดุคุณภาพสูง
              งานประณีต ตรงเวลา พร้อมดูแลทุกขั้นตอนตั้งแต่เริ่มจนส่งมอบ
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/contact" className="gold-btn group relative overflow-hidden transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  ปรึกษาฟรี / รับใบเสนอราคา <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-feature-card"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[
              ["PREMIUM QUALITY", "วัสดุเกรดพรีเมียม"],
              ["CUSTOM DESIGN", "ออกแบบเฉพาะคุณ"],
              ["WARRANTY", "รับประกันผลงาน"],
            ].map(([title, desc], idx) => (
              <motion.div 
                className="feature-row group cursor-default" 
                key={title}
                variants={fadeInUp}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="line-icon text-[#d8ad66] group-hover:rotate-45 transition-transform duration-300">◇</span>
                <div>
                  <strong className="group-hover:text-[#f4d7a5] transition-colors">{title}</strong>
                  <p>{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Floating Stats Section */}
      <motion.section 
        className="site-shell floating-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={statsContainer}
      >
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article 
              className="stat-card backdrop-blur-md bg-opacity-70 border border-gold/10 hover:border-gold/30 cursor-default" 
              key={item.value}
              variants={statCardVar}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="p-3 bg-[#0b2a1f]/80 rounded-full border border-gold/10 text-[#d8ad66]">
                <Icon size={24} />
              </div>
              <div>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.section>

      {/* Portfolio Section */}
      <section className="site-shell section-block">
        <motion.div 
          className="section-title with-action"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <p className="eyebrow">OUR WORK</p>
            <h2>ผลงานของเรา</h2>
          </div>
          <Link to="/portfolio" className="outline-btn group flex items-center gap-2">
            ดูผลงานทั้งหมด <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.div 
          className="portfolio-row"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {portfolioItems.slice(0, 5).map((item) => (
            <motion.article 
              className="image-card relative group cursor-pointer overflow-hidden border border-gold/10"
              key={item.title}
              variants={fadeInUp}
              initial="initial"
              whileHover="hover"
              variants={hoverScaleCard}
            >
              <div className="overflow-hidden relative h-[210px]">
                <motion.img 
                  src={item.image} 
                  alt={item.thai} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#03110d] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-5">
                <span className="text-[#d8ad66] font-semibold text-xs tracking-wider uppercase mb-1 block">{item.category}</span>
                <h3 className="text-white group-hover:text-[#f4d7a5] transition-colors">{item.thai}</h3>
                <p className="text-muted text-sm">{item.style}</p>
                <Link to="/portfolio" className="text-[#d8ad66] font-medium text-sm mt-3 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  ดูรายละเอียด <ArrowRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      {/* Process Section (Animated Timeline) */}
      <section className="site-shell process-strip mt-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="flex flex-col justify-center"
        >
          <p className="eyebrow">OUR PROCESS</p>
          <h2 className="leading-tight">ขั้นตอน<br />การทำงาน</h2>
        </motion.div>
        
        <motion.div
          className="col-span-5 grid grid-cols-1 md:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {processSteps.slice(0, 5).map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.article 
                key={step.no}
                variants={timelineItemVar}
                className="relative group p-4 rounded-lg bg-[#0b2a1f]/30 border border-gold/5 hover:border-gold/20 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full border border-[#d8ad66]/20 flex items-center justify-center text-[#d8ad66] mx-auto group-hover:border-[#d8ad66] group-hover:bg-[#0c2b20] group-hover:shadow-[0_0_15px_rgba(216,173,102,0.25)] transition-all duration-300">
                  <Icon size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <small className="text-[#d8ad66] font-bold text-xs tracking-widest mt-3 block">{step.no}</small>
                <h3 className="text-white mt-1 group-hover:text-[#f4d7a5] transition-colors">{step.title.split(" / ")[0]}</h3>
                <p className="text-muted text-xs leading-relaxed mt-2">{step.desc.split(" ").slice(0, 5).join(" ")}...</p>
                
                {index < 4 && (
                  <div className="hidden md:block absolute top-10 -right-4 w-8 h-[1px] bg-gradient-to-r from-gold/30 to-transparent z-10" />
                )}
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="site-shell about-preview mt-20">
        <motion.div 
          className="video-card group relative rounded-xl overflow-hidden border border-gold/10 shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <video
            ref={videoRef}
            src="/videos/sam1.mp4"
            poster={images.closet}
            preload="metadata"
            playsInline
            controls
            onClick={handlePreviewVideoClick}
            onPlay={() => setIsPreviewPlaying(true)}
            onPause={() => setIsPreviewPlaying(false)}
            className="w-full h-[360px] object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-500"
          >
            Your browser does not support the video tag.
          </video>
          
          {!isPreviewPlaying && (
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
              <motion.button 
                type="button" 
                aria-label="Play video" 
                onClick={handlePreviewVideoClick}
                className="pointer-events-auto relative w-20 h-20 rounded-full border-2 border-white text-white bg-black/40 flex items-center justify-center hover:bg-[#d8ad66] hover:border-[#d8ad66] hover:text-[#03110d] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play fill="currentColor" size={24} className="ml-1" />
                {/* Rippling circle effect */}
                <span className="absolute inset-0 rounded-full border border-white animate-ping opacity-75" />
              </motion.button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="eyebrow">ABOUT PP HOME FURNITURE</p>
          <h2 className="leading-tight">เราใส่ใจในทุกรายละเอียด<br />เพื่อบ้านที่เป็นตัวคุณ</h2>
          <p className="text-muted leading-relaxed my-6">
            PP HOME FURNITURE รับทำเฟอร์นิเจอร์บิวท์อินครบวงจร
            ด้วยแนวคิดที่ทันสมัย ผสานดีไซน์ ฟังก์ชัน และคุณภาพ เพื่อให้บ้านของคุณสมบูรณ์แบบที่สุด
          </p>
          <Link to="/about" className="outline-btn group flex items-center gap-2 self-start">
            เกี่ยวกับเรา <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <motion.aside 
          className="number-stack border border-gold/10 rounded-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {stats.map((item) => (
            <motion.div 
              key={item.value} 
              className="p-5 border-b border-gold/5 last:border-b-0 hover:bg-[#0b2a1f]/20 transition-colors"
              variants={fadeInUp}
            >
              <strong className="text-[#f4d7a5] text-3xl font-serif block mb-1">{item.value}</strong>
              <span className="text-muted text-xs uppercase tracking-wider">{item.label}</span>
            </motion.div>
          ))}
        </motion.aside>
      </section>

      {/* Luxury CTA Section */}
      <motion.section 
        className="site-shell section-block mb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <div className="relative overflow-hidden rounded-2xl border border-[#d8ad66]/30 bg-gradient-to-br from-[#0c2b20] to-[#041611] p-12 text-center shadow-2xl backdrop-blur-md">
          {/* Subtle decorative glowing lights */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#d8ad66]/10 blur-3xl" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#d8ad66]/10 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <p className="text-[#d8ad66] font-semibold tracking-wider text-sm uppercase mb-4">DESIGN YOUR DREAM SPACE</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#f4d7a5] leading-tight mb-6">
              เปลี่ยนบ้านในฝันของคุณ<br />ให้กลายเป็นความจริง
            </h2>
            <p className="text-[#c9d2c8] text-lg leading-relaxed mb-8 max-w-2xl">
              PP HOME FURNITURE พร้อมช่วยคุณออกแบบและรังสรรค์เฟอร์นิเจอร์บิวท์อินระดับพรีเมียม 
              ที่สะท้อนถึงไลฟ์สไตล์และความเป็นตัวคุณอย่างแท้จริง
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="gold-btn px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                รับการประเมินราคาฟรี <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="outline-btn px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                ดูผลงานทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Home;

