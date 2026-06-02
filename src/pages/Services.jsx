import React from "react";
import { Link } from "react-router-dom";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { ArrowRight, X, Sparkles } from "lucide-react";
import { db } from "../firebase";
import { icons, images, processSteps, services as defaultServices } from "../content";
import { motion, AnimatePresence } from "framer-motion";

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
      staggerChildren: 0.12
    }
  }
};

const kenBurns = {
  hidden: { scale: 1.15, filter: "brightness(0.6)" },
  visible: {
    scale: 1,
    filter: "brightness(0.78)",
    transition: {
      duration: 3,
      ease: [0.16, 1, 0.3, 1]
    }
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
      {/* Sub Hero Section */}
      <section className="hero sub-hero service-hero relative">
        <motion.img 
          src={images.kitchen} 
          alt="" 
          className="hero-bg" 
          initial="hidden"
          animate="visible"
          variants={kenBurns}
        />
        <div className="hero-shade" />
        <div className="site-shell hero-content split">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p className="eyebrow flex items-center gap-2" variants={fadeInUp}>
              <Sparkles size={14} className="text-[#d8ad66]" /> OUR SERVICES
            </motion.p>
            <motion.h1 variants={fadeInUp}>
              Complete Built-in<br />Solutions for Every Space
            </motion.h1>
            <motion.h2 variants={fadeInUp}>บริการออกแบบและผลิตเฟอร์นิเจอร์บิวท์อินครบวงจร</motion.h2>
            <motion.div className="gold-line" variants={fadeInUp} />
            <motion.p className="lead" variants={fadeInUp}>
              เราดูแลทุกขั้นตอน ตั้งแต่ให้คำปรึกษา ออกแบบ 3D ผลิตด้วยวัสดุคุณภาพสูง
              และติดตั้งโดยทีมงานมืออาชีพ เพื่อให้คุณได้พื้นที่ที่สวยงามและใช้งานได้จริง
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
            className="hero-feature-card compact bg-[#0b2a1f]/40 backdrop-blur-md border border-gold/10"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {serviceItems.slice(0, 4).map((item) => {
              const Icon = getIcon(item.icon);
              return (
                <motion.button
                  className="feature-row service-feature-button text-left w-full group cursor-pointer"
                  key={item.id}
                  onClick={() => setSelectedService(item)}
                  variants={fadeInUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="text-[#d8ad66] group-hover:rotate-12 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <strong className="group-hover:text-[#f4d7a5] transition-colors">{item.title.split(" & ")[0]}</strong>
                    <p className="text-muted text-xs mt-1">{item.thai}</p>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="site-shell section-block">
        <motion.div 
          className="section-title with-action"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div>
            <p className="eyebrow">OUR SERVICES</p>
            <h2>บริการของเรา</h2>
          </div>
          <p className="section-note text-muted text-sm italic">คลิกการ์ดบริการเพื่อดูรายละเอียดเชิงลึก</p>
        </motion.div>
        
        <motion.div 
          className="service-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {serviceItems.map((item) => {
            const Icon = getIcon(item.icon);
            const isSelected = activeService?.id === item.id;
            return (
              <motion.button
                className={`service-card service-card-button text-left w-full relative overflow-hidden group cursor-pointer ${
                  isSelected ? "border-[#d8ad66]/60 bg-[#0b2a1f]/60" : "border-gold/10"
                }`}
                key={item.id}
                onClick={() => setSelectedService(item)}
                variants={fadeInUp}
                initial="initial"
                whileHover="hover"
                variants={hoverScaleCard}
              >
                <div className="overflow-hidden relative h-[180px]">
                  <img 
                    src={item.image} 
                    alt={item.thai} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#03110d] via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <div className="text-[#d8ad66] mb-3 flex items-center justify-between">
                    <Icon size={24} />
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <span className="text-[#d8ad66] font-semibold text-xs tracking-wider uppercase mb-1 block">{item.title}</span>
                  <h3 className="text-white group-hover:text-[#f4d7a5] transition-colors">{item.thai}</h3>
                  <p className="text-muted text-sm leading-relaxed mt-2 line-clamp-2">{item.desc}</p>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Dynamic Animated Detail Panel */}
        <AnimatePresence mode="wait">
          {activeService && (
            <motion.article 
              key={activeService.id}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="service-detail-panel relative overflow-hidden border border-gold/20 shadow-2xl rounded-xl bg-gradient-to-br from-[#0c2b20] to-[#041611] mt-16"
            >
              <button 
                className="service-detail-close absolute right-6 top-6 w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-[#d8ad66] hover:bg-[#d8ad66] hover:text-[#03110d] transition-all duration-300 z-10 cursor-pointer" 
                onClick={() => setSelectedService(null)} 
                aria-label="ปิดรายละเอียด"
              >
                <X size={18} />
              </button>
              <div className="overflow-hidden h-full min-h-[300px]">
                <img 
                  src={activeService.image} 
                  alt="" 
                  className="w-full h-full object-cover filter brightness-90"
                />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <p className="eyebrow flex items-center gap-2"><Sparkles size={14} /> SERVICE DETAIL</p>
                <h2 className="text-[#f4d7a5] font-serif text-3xl md:text-4xl leading-tight mb-2">{activeService.thai}</h2>
                <span className="text-[#d8ad66] font-semibold text-sm tracking-wider uppercase mb-6 block">{activeService.title}</span>
                <p className="text-[#c9d2c8] text-base leading-relaxed mb-8 whitespace-pre-line">{activeService.details || activeService.desc}</p>
                <Link to="/contact" className="gold-btn group relative overflow-hidden self-start px-8 py-3 rounded-full">
                  <span className="relative z-10 flex items-center gap-2">
                    สนใจบริการนี้ <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </Link>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </section>

      {/* Process Line Section (Timeline) */}
      <section className="site-shell process-line-section mt-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <p className="eyebrow text-center">OUR PROCESS</p>
          <h2 className="text-center mb-12">ขั้นตอนการทำงานแบบมืออาชีพ</h2>
        </motion.div>
        
        <motion.div 
          className="process-line"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.article 
                key={step.no}
                variants={fadeInUp}
                className="group p-5 rounded-lg bg-[#0b2a1f]/20 border border-gold/5 hover:border-gold/20 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-full border border-[#d8ad66]/20 flex items-center justify-center text-[#d8ad66] mx-auto group-hover:border-[#d8ad66] group-hover:bg-[#0c2b20] group-hover:shadow-[0_0_15px_rgba(216,173,102,0.25)] transition-all duration-300">
                  <Icon size={20} className="transform group-hover:scale-110 transition-transform duration-300" />
                </div>
                <small className="text-[#d8ad66] font-bold text-xs tracking-wider mt-4 block">{step.no}</small>
                <h3 className="text-white mt-1 group-hover:text-[#f4d7a5] transition-colors">{step.title}</h3>
                <p className="text-muted text-xs leading-relaxed mt-2">{step.desc}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      {/* Luxury CTA Banner */}
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
            <p className="text-[#d8ad66] font-semibold tracking-wider text-sm uppercase mb-4">Ready to Transform Your Space?</p>
            <h2 className="font-serif text-3xl md:text-5xl text-[#f4d7a5] leading-tight mb-6">
              ให้เราช่วยรังสรรค์พื้นที่ในฝันของคุณ
            </h2>
            <p className="text-[#c9d2c8] text-lg leading-relaxed mb-8 max-w-2xl">
              รับคำปรึกษาและวางแผนงบประมาณจากสถาปนิกและอินทีเรียร์ผู้เชี่ยวชาญของ PP HOME FURNITURE โดยไม่มีค่าใช้จ่ายใดๆ
            </p>
            <Link to="/contact" className="gold-btn px-8 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
              ติดต่อพูดคุยกับเรา <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default Services;
