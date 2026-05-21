import {
  BadgeCheck,
  Box,
  Boxes,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  Clock,
  DraftingCompass,
  Eye,
  Gem,
  Handshake,
  Headphones,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  PenTool,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

export const icons = {
  BadgeCheck,
  Box,
  Boxes,
  CalendarDays,
  ClipboardCheck,
  ClipboardList,
  Clock,
  DraftingCompass,
  Eye,
  Gem,
  Handshake,
  Headphones,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackageCheck,
  PenTool,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  Users,
  Wrench,
};

export const images = {
  kitchen:
    "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1800&q=85",
  living:
    "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1800&q=85",
  media:
    "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=85",
  closet:
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=85",
  bedroom:
    "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1800&q=85",
  office:
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85",
  materials:
    "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1800&q=85",
  workshop:
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85",
  design:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=85",
  install:
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=85",
  cleaning:
    "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1800&q=85",
  map:
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1800&q=85",
  team:
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
};

export const stats = [
  { icon: Users, value: "10+", label: "ปี ประสบการณ์", desc: "ในวงการเฟอร์นิเจอร์บิวท์อิน" },
  { icon: Box, value: "500+", label: "โครงการที่ไว้วางใจ", desc: "ทั้งบ้าน คอนโด และอาคารสำนักงาน" },
  { icon: Star, value: "98%", label: "ลูกค้าพึงพอใจ", desc: "ในคุณภาพและบริการของเรา" },
  { icon: ShieldCheck, value: "1 YEAR", label: "รับประกันงานติดตั้ง", desc: "มั่นใจในคุณภาพหลังการขาย" },
];

export const values = [
  { icon: DraftingCompass, title: "ดีไซน์ที่ตอบโจทย์", desc: "ออกแบบให้สวยงาม เข้ากับไลฟ์สไตล์ และการใช้งานของคุณ" },
  { icon: BadgeCheck, title: "คุณภาพที่เหนือกว่า", desc: "เลือกใช้วัสดุและอุปกรณ์คุณภาพสูง เพื่อความทนทานและความสวยงาม" },
  { icon: Users, title: "ทีมงานมืออาชีพ", desc: "ทีมงานมากประสบการณ์ ใส่ใจทุกรายละเอียด ตั้งแต่ออกแบบจนติดตั้ง" },
  { icon: Handshake, title: "บริการด้วยใจ", desc: "ดูแลใกล้ชิด ให้คำปรึกษา และบริการหลังการขายที่ดีที่สุด" },
];

export const services = [
  { icon: MessageCircle, title: "DESIGN & CONSULTATION", thai: "ให้คำปรึกษาและออกแบบ", desc: "รับฟังความต้องการ วิเคราะห์พื้นที่ และออกแบบตามสไตล์ของคุณ", image: images.design },
  { icon: PenTool, title: "3D DESIGN", thai: "ออกแบบ 3 มิติ", desc: "ออกแบบภาพ 3D เสมือนจริง ให้เห็นภาพก่อนเริ่มผลิต", image: images.office },
  { icon: PackageCheck, title: "BUILT-IN FURNITURE", thai: "ผลิตเฟอร์นิเจอร์บิวท์อิน", desc: "ผลิตด้วยวัสดุคุณภาพสูง แข็งแรง ทนทาน ใช้งานได้ยาวนาน", image: images.materials },
  { icon: Truck, title: "DELIVERY & INSTALLATION", thai: "จัดส่งและติดตั้ง", desc: "ติดตั้งโดยทีมงานมืออาชีพ รวดเร็ว เรียบร้อย และตรงเวลา", image: images.install },
  { icon: ClipboardCheck, title: "QUALITY INSPECTION", thai: "ตรวจสอบคุณภาพ", desc: "ตรวจสอบทุกขั้นตอน เพื่อให้งานเรียบร้อยและปลอดภัย", image: images.kitchen },
  { icon: Headphones, title: "AFTER SERVICE", thai: "บริการหลังการขาย", desc: "รับประกันงานติดตั้งและดูแลหลังการขายอย่างต่อเนื่อง", image: images.media },
];

export const processSteps = [
  { no: "01", icon: MessageCircle, title: "ติดต่อเรา / ปรึกษาเบื้องต้น", desc: "พูดคุยความต้องการ ประเมินพื้นที่ และให้คำแนะนำเบื้องต้น" },
  { no: "02", icon: PenTool, title: "ออกแบบ 3D และเสนอราคา", desc: "ออกแบบ 3D ให้เห็นภาพชัดเจน พร้อมเสนอราคาอย่างละเอียด" },
  { no: "03", icon: ClipboardList, title: "สรุปแบบและยืนยันการสั่งซื้อ", desc: "สรุปแบบ วัสดุ และรายละเอียด พร้อมเซ็นสัญญาการทำงาน" },
  { no: "04", icon: Wrench, title: "ผลิตชิ้นงาน", desc: "ผลิตด้วยเครื่องจักรที่ได้มาตรฐาน ควบคุมคุณภาพทุกขั้นตอน" },
  { no: "05", icon: Truck, title: "จัดส่งและเตรียมติดตั้ง", desc: "ตรวจสอบชิ้นงานก่อนจัดส่ง เพื่อความเรียบร้อยและปลอดภัย" },
  { no: "06", icon: Wrench, title: "ติดตั้งหน้างาน", desc: "ทีมช่างมืออาชีพติดตั้งด้วยความละเอียด เรียบร้อยและตรงตามแบบ" },
  { no: "07", icon: ClipboardCheck, title: "ตรวจรับงาน", desc: "ตรวจสอบความเรียบร้อยร่วมกับลูกค้าทุกจุดก่อนส่งมอบงาน" },
  { no: "08", icon: ShieldCheck, title: "บริการหลังการขาย", desc: "รับประกันงานติดตั้งและดูแลหลังการขาย พร้อมให้คำแนะนำตลอดการใช้งาน" },
];

export const portfolioItems = [
  { category: "KITCHEN", title: "Minimal Kitchen", thai: "ห้องครัวบิวท์อิน", style: "Modern Luxury", image: images.kitchen },
  { category: "WARDROBE", title: "Luxury Walk-in Closet", thai: "ตู้เสื้อผ้าบิวท์อิน", style: "Luxury Classic", image: images.closet },
  { category: "LIVING ROOM", title: "Modern Luxury House", thai: "ชุดวางทีวีและชั้นวาง", style: "Minimal Modern", image: images.media },
  { category: "BEDROOM", title: "Master Bedroom", thai: "ห้องนอนบิวท์อิน", style: "Modern Luxury", image: images.bedroom },
  { category: "WORKSPACE", title: "Home Office", thai: "ห้องทำงานบิวท์อิน", style: "Modern Classic", image: images.office },
  { category: "HOUSE", title: "Green Nature Residence", thai: "บ้านพักอาศัย 2 ชั้น", style: "Nature Modern", image: images.living },
  { category: "CONDOMINIUM", title: "Compact Condo", thai: "คอนโดบิวท์อินครบฟังก์ชัน", style: "Smart Living", image: images.kitchen },
  { category: "RESIDENTIAL", title: "Workspace", thai: "สำนักงานบิวท์อิน", style: "Warm Minimal", image: images.office },
];

export const blogPosts = [
  { category: "INTERIOR TIPS", title: "5 ไอเดียออกแบบห้องครัวบิวท์อิน สวย ครบ จบในที่เดียว", date: "May 12, 2024", read: "5 min read", image: images.kitchen },
  { category: "BUILT-IN IDEAS", title: "วิธีเลือกวัสดุบิวท์อิน ให้ทน ใช้งานได้นาน และดูแลง่าย", date: "Apr 28, 2024", read: "4 min read", image: images.media },
  { category: "DESIGN INSPIRATION", title: "ไอเดียตู้เสื้อผ้าบิวท์อิน สวยหรู เพิ่มพื้นที่จัดเก็บ", date: "Apr 15, 2024", read: "6 min read", image: images.closet },
  { category: "INTERIOR TIPS", title: "ออกแบบโฮมออฟฟิศบิวท์อิน เพิ่มความโปรดักทีฟในการทำงาน", date: "Mar 30, 2024", read: "5 min read", image: images.office },
  { category: "MATERIALS", title: "วัสดุปิดผิวสำหรับงานบิวท์อิน แบบไหนเหมาะกับคุณ?", date: "Mar 18, 2024", read: "5 min read", image: images.materials },
  { category: "BUILT-IN IDEAS", title: "รวมฟังก์ชันลับในงานบิวท์อิน ที่ช่วยให้ชีวิตสะดวกขึ้น", date: "Mar 05, 2024", read: "5 min read", image: images.kitchen },
  { category: "DESIGN INSPIRATION", title: "แต่งผนังทีวีบิวท์อินยังไง ให้สวยและไม่ตกยุค", date: "Feb 20, 2024", read: "4 min read", image: images.media },
  { category: "MAINTENANCE", title: "การดูแลรักษาเฟอร์นิเจอร์บิวท์อิน ให้อยู่กับบ้านได้นาน", date: "Feb 10, 2024", read: "5 min read", image: images.cleaning },
];
