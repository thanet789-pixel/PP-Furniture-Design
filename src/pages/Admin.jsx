import React from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { Edit3, LogOut, Mail, Phone, Plus, RefreshCw, ShieldCheck, Trash2 } from "lucide-react";
import { auth, db } from "../firebase";
import {
  icons,
  images,
  portfolioItems as defaultPortfolioItems,
  services as defaultServices,
} from "../content";

const portfolioCategories = [
  "RESIDENTIAL",
  "CONDOMINIUM",
  "HOUSE",
  "KITCHEN",
  "WARDROBE",
  "LIVING ROOM",
  "BEDROOM",
  "WORKSPACE",
];

const initialLoginData = {
  email: "",
  password: "",
};

const initialServiceForm = {
  title: "",
  thai: "",
  desc: "",
  details: "",
  image: "",
  icon: "PackageCheck",
  order: 1,
  isActive: true,
};

const initialPortfolioForm = {
  title: "",
  thai: "",
  category: "RESIDENTIAL",
  style: "",
  desc: "",
  details: "",
  location: "",
  year: "",
  image: "",
  order: 1,
  isActive: true,
};

const initialTeamForm = {
  role: "",
  name: "",
  image: "",
  order: 1,
  isActive: true,
};

const defaultTeamMembers = [
  { role: "DESIGNER", name: "ออกแบบ 3D", image: images.team },
  { role: "PROJECT MANAGER", name: "ควบคุมงาน", image: images.team },
  { role: "PRODUCTION TEAM", name: "ทีมผลิต", image: images.team },
  { role: "INSTALLATION TEAM", name: "ทีมติดตั้ง", image: images.team },
];

const authErrorMessages = {
  "auth/invalid-credential": "อีเมลหรือรหัสผ่านไม่ถูกต้อง",
  "auth/invalid-email": "รูปแบบอีเมลไม่ถูกต้อง",
  "auth/user-disabled": "บัญชีนี้ถูกปิดใช้งาน",
  "auth/user-not-found": "ไม่พบบัญชีนี้ใน Firebase Authentication",
  "auth/wrong-password": "รหัสผ่านไม่ถูกต้อง",
  "auth/too-many-requests": "ลองผิดหลายครั้งเกินไป กรุณารอสักครู่แล้วลองใหม่",
  "auth/network-request-failed": "เชื่อมต่อ Firebase ไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ต",
  "auth/operation-not-allowed": "ยังไม่ได้เปิด Email/Password provider ใน Firebase Authentication",
};

function formatDate(value) {
  if (!value?.toDate) {
    return "รอเวลาในระบบ";
  }

  return new Intl.DateTimeFormat("th-TH", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(value.toDate());
}

function serviceToForm(service) {
  return {
    title: service.title || "",
    thai: service.thai || "",
    desc: service.desc || "",
    details: service.details || service.desc || "",
    image: service.image || "",
    icon: service.icon || "PackageCheck",
    order: Number(service.order || 1),
    isActive: service.isActive !== false,
  };
}

function portfolioToForm(project) {
  return {
    title: project.title || "",
    thai: project.thai || "",
    category: project.category || "RESIDENTIAL",
    style: project.style || "",
    desc: project.desc || "",
    details: project.details || project.desc || "",
    location: project.location || "",
    year: project.year || "",
    image: project.image || "",
    order: Number(project.order || 1),
    isActive: project.isActive !== false,
  };
}

function teamToForm(member) {
  return {
    role: member.role || "",
    name: member.name || "",
    image: member.image || "",
    order: Number(member.order || 1),
    isActive: member.isActive !== false,
  };
}

function Admin() {
  const [loginData, setLoginData] = React.useState(initialLoginData);
  const [user, setUser] = React.useState(null);
  const [authLoading, setAuthLoading] = React.useState(true);
  const [messagesLoading, setMessagesLoading] = React.useState(false);
  const [servicesLoading, setServicesLoading] = React.useState(false);
  const [portfolioLoading, setPortfolioLoading] = React.useState(false);
  const [teamLoading, setTeamLoading] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [services, setServices] = React.useState([]);
  const [portfolio, setPortfolio] = React.useState([]);
  const [teamMembers, setTeamMembers] = React.useState([]);
  const [serviceForm, setServiceForm] = React.useState(initialServiceForm);
  const [portfolioForm, setPortfolioForm] = React.useState(initialPortfolioForm);
  const [teamForm, setTeamForm] = React.useState(initialTeamForm);
  const [editingServiceId, setEditingServiceId] = React.useState("");
  const [editingPortfolioId, setEditingPortfolioId] = React.useState("");
  const [editingTeamId, setEditingTeamId] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("messages");
  const [error, setError] = React.useState("");
  const [notice, setNotice] = React.useState("");

  React.useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });
  }, []);

  React.useEffect(() => {
    if (!user) {
      setMessages([]);
      setServices([]);
      setPortfolio([]);
      setTeamMembers([]);
      return undefined;
    }

    setMessagesLoading(true);
    const messagesQuery = query(collection(db, "contactMessages"), orderBy("createdAt", "desc"));
    const unsubscribeMessages = onSnapshot(
      messagesQuery,
      (snapshot) => {
        setMessages(snapshot.docs.map((messageDoc) => ({ id: messageDoc.id, ...messageDoc.data() })));
        setMessagesLoading(false);
      },
      (snapshotError) => {
        console.error("Could not load contact messages", snapshotError);
        setError("โหลดข้อมูลลูกค้าไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore");
        setMessagesLoading(false);
      },
    );

    setServicesLoading(true);
    const servicesQuery = query(collection(db, "services"), orderBy("order", "asc"));
    const unsubscribeServices = onSnapshot(
      servicesQuery,
      (snapshot) => {
        setServices(snapshot.docs.map((serviceDoc) => ({ id: serviceDoc.id, ...serviceDoc.data() })));
        setServicesLoading(false);
      },
      (snapshotError) => {
        console.error("Could not load services", snapshotError);
        setError("โหลดข้อมูลบริการไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore");
        setServicesLoading(false);
      },
    );

    setPortfolioLoading(true);
    const portfolioQuery = query(collection(db, "portfolio"), orderBy("order", "asc"));
    const unsubscribePortfolio = onSnapshot(
      portfolioQuery,
      (snapshot) => {
        setPortfolio(snapshot.docs.map((projectDoc) => ({ id: projectDoc.id, ...projectDoc.data() })));
        setPortfolioLoading(false);
      },
      (snapshotError) => {
        console.error("Could not load portfolio", snapshotError);
        setError("โหลดข้อมูลผลงานไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore");
        setPortfolioLoading(false);
      },
    );

    setTeamLoading(true);
    const teamQuery = query(collection(db, "teamMembers"), orderBy("order", "asc"));
    const unsubscribeTeam = onSnapshot(
      teamQuery,
      (snapshot) => {
        setTeamMembers(snapshot.docs.map((teamDoc) => ({ id: teamDoc.id, ...teamDoc.data() })));
        setTeamLoading(false);
      },
      (snapshotError) => {
        console.error("Could not load team members", snapshotError);
        setError("โหลดข้อมูลทีมงานไม่สำเร็จ กรุณาตรวจสอบสิทธิ์ Firestore");
        setTeamLoading(false);
      },
    );

    return () => {
      unsubscribeMessages();
      unsubscribeServices();
      unsubscribePortfolio();
      unsubscribeTeam();
    };
  }, [user]);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData((current) => ({ ...current, [name]: value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setAuthLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
      setLoginData(initialLoginData);
    } catch (loginError) {
      console.error("Could not sign in", loginError);
      setError(authErrorMessages[loginError.code] || `เข้าสู่ระบบไม่สำเร็จ (${loginError.code})`);
    } finally {
      setAuthLoading(false);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleServiceChange = (event) => {
    const { checked, name, type, value } = event.target;
    setServiceForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePortfolioChange = (event) => {
    const { checked, name, type, value } = event.target;
    setPortfolioForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleTeamChange = (event) => {
    const { checked, name, type, value } = event.target;
    setTeamForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetServiceForm = () => {
    setServiceForm({ ...initialServiceForm, order: services.length + 1 });
    setEditingServiceId("");
  };

  const resetPortfolioForm = () => {
    setPortfolioForm({ ...initialPortfolioForm, order: portfolio.length + 1 });
    setEditingPortfolioId("");
  };

  const resetTeamForm = () => {
    setTeamForm({ ...initialTeamForm, order: teamMembers.length + 1 });
    setEditingTeamId("");
  };

  const handleEditService = (service) => {
    setServiceForm(serviceToForm(service));
    setEditingServiceId(service.id);
    setActiveTab("services");
    setNotice("");
  };

  const handleEditPortfolio = (project) => {
    setPortfolioForm(portfolioToForm(project));
    setEditingPortfolioId(project.id);
    setActiveTab("portfolio");
    setNotice("");
  };

  const handleEditTeam = (member) => {
    setTeamForm(teamToForm(member));
    setEditingTeamId(member.id);
    setActiveTab("team");
    setNotice("");
  };

  const handleServiceSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    const payload = {
      ...serviceForm,
      image: serviceForm.image || images.kitchen,
      order: Number(serviceForm.order || 1),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingServiceId) {
        await updateDoc(doc(db, "services", editingServiceId), payload);
        setNotice("แก้ไขบริการเรียบร้อยแล้ว");
      } else {
        await addDoc(collection(db, "services"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setNotice("เพิ่มบริการใหม่เรียบร้อยแล้ว");
      }

      resetServiceForm();
    } catch (serviceError) {
      console.error("Could not save service", serviceError);
      setError("บันทึกบริการไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handlePortfolioSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    const payload = {
      ...portfolioForm,
      image: portfolioForm.image || images.kitchen,
      order: Number(portfolioForm.order || 1),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingPortfolioId) {
        await updateDoc(doc(db, "portfolio", editingPortfolioId), payload);
        setNotice("แก้ไขผลงานเรียบร้อยแล้ว");
      } else {
        await addDoc(collection(db, "portfolio"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setNotice("เพิ่มผลงานใหม่เรียบร้อยแล้ว");
      }

      resetPortfolioForm();
    } catch (portfolioError) {
      console.error("Could not save portfolio", portfolioError);
      setError("บันทึกผลงานไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handleTeamSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setNotice("");

    const payload = {
      ...teamForm,
      image: teamForm.image || images.team,
      order: Number(teamForm.order || 1),
      updatedAt: serverTimestamp(),
    };

    try {
      if (editingTeamId) {
        await updateDoc(doc(db, "teamMembers", editingTeamId), payload);
        setNotice("แก้ไขทีมงานเรียบร้อยแล้ว");
      } else {
        await addDoc(collection(db, "teamMembers"), {
          ...payload,
          createdAt: serverTimestamp(),
        });
        setNotice("เพิ่มทีมงานใหม่เรียบร้อยแล้ว");
      }

      resetTeamForm();
    } catch (teamError) {
      console.error("Could not save team member", teamError);
      setError("บันทึกทีมงานไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handleDeleteService = async (id, title) => {
    if (!window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบบริการ "${title}" อย่างถาวร?`)) {
      return;
    }
    setError("");
    setNotice("");
    try {
      await deleteDoc(doc(db, "services", id));
      setNotice("ลบบริการเรียบร้อยแล้ว");
    } catch (err) {
      console.error("Could not delete service", err);
      setError("ลบบริการไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handleDeletePortfolio = async (id, title) => {
    if (!window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบผลงาน "${title}" อย่างถาวร?`)) {
      return;
    }
    setError("");
    setNotice("");
    try {
      await deleteDoc(doc(db, "portfolio", id));
      setNotice("ลบผลงานเรียบร้อยแล้ว");
    } catch (err) {
      console.error("Could not delete portfolio", err);
      setError("ลบผลงานไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handleDeleteTeam = async (id, name) => {
    if (!window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบทีมงาน "${name}" อย่างถาวร?`)) {
      return;
    }
    setError("");
    setNotice("");
    try {
      await deleteDoc(doc(db, "teamMembers", id));
      setNotice("ลบทีมงานเรียบร้อยแล้ว");
    } catch (err) {
      console.error("Could not delete team member", err);
      setError("ลบทีมงานไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handleDeleteMessage = async (id, clientName) => {
    if (!window.confirm(`คุณแน่ใจหรือไม่ว่าต้องการลบข้อความของ "${clientName}"?`)) {
      return;
    }
    setError("");
    setNotice("");
    try {
      await deleteDoc(doc(db, "contactMessages", id));
      setNotice("ลบข้อความเรียบร้อยแล้ว");
    } catch (err) {
      console.error("Could not delete message", err);
      setError("ลบข้อความไม่สำเร็จ กรุณาตรวจสอบ Firestore Rules");
    }
  };

  const handleSeedServices = async () => {
    setError("");
    setNotice("");

    try {
      await Promise.all(
        defaultServices.map((service, index) => (
          addDoc(collection(db, "services"), {
            title: service.title,
            thai: service.thai,
            desc: service.desc,
            details: service.desc,
            image: service.image,
            icon: Object.entries(icons).find(([, Icon]) => Icon === service.icon)?.[0] || "PackageCheck",
            order: index + 1,
            isActive: true,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          })
        )),
      );
      setNotice("สร้างข้อมูลบริการเริ่มต้นเรียบร้อยแล้ว");
    } catch (seedError) {
      console.error("Could not seed services", seedError);
      setError("สร้างข้อมูลบริการเริ่มต้นไม่สำเร็จ");
    }
  };

  const handleSeedPortfolio = async () => {
    setError("");
    setNotice("");

    try {
      await Promise.all(
        defaultPortfolioItems.map((project, index) => (
          addDoc(collection(db, "portfolio"), {
            title: project.title,
            thai: project.thai,
            category: project.category || "RESIDENTIAL",
            style: project.style || "",
            desc: project.desc || project.thai,
            details: project.details || `ผลงาน ${project.thai} สไตล์ ${project.style || project.category} ออกแบบให้เหมาะกับพื้นที่จริงและการใช้งานประจำวัน`,
            location: project.location || "",
            year: project.year || "",
            image: project.image,
            order: index + 1,
            isActive: true,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          })
        )),
      );
      setNotice("สร้างข้อมูลผลงานเริ่มต้นเรียบร้อยแล้ว");
    } catch (seedError) {
      console.error("Could not seed portfolio", seedError);
      setError("สร้างข้อมูลผลงานเริ่มต้นไม่สำเร็จ");
    }
  };

  const handleSeedTeam = async () => {
    setError("");
    setNotice("");

    try {
      await Promise.all(
        defaultTeamMembers.map((member, index) => (
          addDoc(collection(db, "teamMembers"), {
            ...member,
            order: index + 1,
            isActive: true,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          })
        )),
      );
      setNotice("สร้างข้อมูลทีมงานเริ่มต้นเรียบร้อยแล้ว");
    } catch (seedError) {
      console.error("Could not seed team members", seedError);
      setError("สร้างข้อมูลทีมงานเริ่มต้นไม่สำเร็จ");
    }
  };

  if (authLoading && !user) {
    return (
      <main className="admin-page">
        <div className="site-shell admin-shell">
          <div className="admin-card admin-loading">
            <RefreshCw className="admin-spin" />
            <p>กำลังตรวจสอบสิทธิ์...</p>
          </div>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="admin-page">
        <div className="site-shell admin-shell">
          <form className="admin-card admin-login" onSubmit={handleLogin}>
            <div className="admin-badge">
              <ShieldCheck size={22} />
              <span>ADMIN</span>
            </div>
            <h1>เข้าสู่ระบบแอดมิน</h1>
            <p>ใช้บัญชีที่สร้างไว้ใน Firebase Authentication</p>
            <label>
              อีเมล
              <input
                name="email"
                type="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="admin@example.com"
                required
              />
            </label>
            <label>
              รหัสผ่าน
              <input
                name="password"
                type="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="กรอกรหัสผ่าน"
                required
              />
            </label>
            {error && <p className="form-message error">{error}</p>}
            <button className="gold-btn" disabled={authLoading}>
              {authLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="admin-page">
      <div className="site-shell admin-shell">
        <section className="admin-heading">
          <div>
            <p className="eyebrow">PP HOME FURNITURE</p>
            <h1>Admin Dashboard</h1>
            <p>จัดการข้อความลูกค้า บริการ และผลงานที่แสดงบนหน้าเว็บไซต์</p>
          </div>
          <button className="outline-btn" onClick={handleLogout}>
            <LogOut size={18} /> ออกจากระบบ
          </button>
        </section>

        {(error || notice) && (
          <p className={error ? "form-message error" : "form-message success"}>
            {error || notice}
          </p>
        )}

        <div className="admin-tabs">
          <button className={activeTab === "messages" ? "active" : ""} onClick={() => setActiveTab("messages")}>
            ข้อความลูกค้า
          </button>
          <button className={activeTab === "services" ? "active" : ""} onClick={() => setActiveTab("services")}>
            จัดการบริการ
          </button>
          <button className={activeTab === "portfolio" ? "active" : ""} onClick={() => setActiveTab("portfolio")}>
            จัดการผลงาน
          </button>
          <button className={activeTab === "team" ? "active" : ""} onClick={() => setActiveTab("team")}>
            จัดการทีมงาน
          </button>
        </div>

        <section className="admin-stats">
          <article>
            <strong>{messages.length}</strong>
            <span>ข้อความทั้งหมด</span>
          </article>
          <article>
            <strong>{services.length}</strong>
            <span>บริการใน Firebase</span>
          </article>
          <article>
            <strong>{portfolio.length}</strong>
            <span>ผลงานใน Firebase</span>
          </article>
          <article>
            <strong>{teamMembers.length}</strong>
            <span>ทีมงานใน Firebase</span>
          </article>
          <article>
            <strong>{user.email}</strong>
            <span>บัญชีที่กำลังใช้งาน</span>
          </article>
        </section>

        {activeTab === "messages" && (
          <section className="admin-messages">
            <div className="admin-list-head">
              <h2>ข้อความลูกค้า</h2>
              {messagesLoading && <span>กำลังโหลด...</span>}
            </div>

            {!messagesLoading && messages.length === 0 ? (
              <div className="admin-empty">ยังไม่มีข้อความจากลูกค้า</div>
            ) : (
              <div className="admin-message-grid">
                {messages.map((message) => (
                  <article className="admin-message-card" key={message.id}>
                    <div className="admin-message-top">
                      <div>
                        <h3>{message.name || "ไม่ระบุชื่อ"}</h3>
                        <p>{formatDate(message.createdAt)}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{message.service || "ไม่ระบุบริการ"}</span>
                        <button
                          type="button"
                          className="p-1.5 text-red-400 hover:text-red-500 hover:bg-red-500/10 rounded-full transition-colors"
                          onClick={() => handleDeleteMessage(message.id, message.name)}
                          aria-label="ลบข้อความ"
                          title="ลบข้อความ"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="admin-contact-lines">
                      <a href={`tel:${message.phone || ""}`}>
                        <Phone size={16} /> {message.phone || "-"}
                      </a>
                      <a href={`mailto:${message.email || ""}`}>
                        <Mail size={16} /> {message.email || "-"}
                      </a>
                    </div>
                    <p className="admin-message-body">
                      {message.message || "ไม่มีรายละเอียดเพิ่มเติม"}
                    </p>
                  </article>
                ))}
              </div>
            )}
          </section>
        )}

        {activeTab === "services" && (
          <section className="admin-services">
            <form className="admin-service-form" onSubmit={handleServiceSubmit}>
              <div className="admin-list-head">
                <h2>{editingServiceId ? "แก้ไขบริการ" : "เพิ่มบริการใหม่"}</h2>
                <button type="button" className="outline-btn" onClick={resetServiceForm}>
                  <Plus size={18} /> ล้างฟอร์ม
                </button>
              </div>

              <div className="admin-form-grid">
                <label>
                  ชื่ออังกฤษ
                  <input name="title" value={serviceForm.title} onChange={handleServiceChange} required />
                </label>
                <label>
                  ชื่อไทย
                  <input name="thai" value={serviceForm.thai} onChange={handleServiceChange} required />
                </label>
                <label>
                  รูปภาพ URL
                  <input name="image" value={serviceForm.image} onChange={handleServiceChange} placeholder={images.kitchen} />
                </label>
                <label>
                  ไอคอน
                  <select name="icon" value={serviceForm.icon} onChange={handleServiceChange}>
                    {Object.keys(icons).map((iconName) => (
                      <option key={iconName} value={iconName}>{iconName}</option>
                    ))}
                  </select>
                </label>
                <label>
                  ลำดับ
                  <input name="order" type="number" min="1" value={serviceForm.order} onChange={handleServiceChange} />
                </label>
                <label className="admin-check">
                  <input name="isActive" type="checkbox" checked={serviceForm.isActive} onChange={handleServiceChange} />
                  แสดงบนหน้าเว็บ
                </label>
              </div>
              <label>
                คำอธิบายสั้น
                <textarea name="desc" rows="3" value={serviceForm.desc} onChange={handleServiceChange} required />
              </label>
              <label>
                รายละเอียดเมื่อคลิกดู
                <textarea name="details" rows="5" value={serviceForm.details} onChange={handleServiceChange} />
              </label>
              <button className="gold-btn">
                {editingServiceId ? "บันทึกการแก้ไข" : "เพิ่มบริการ"}
              </button>
            </form>

            <div className="admin-messages">
              <div className="admin-list-head">
                <h2>บริการทั้งหมด</h2>
                {services.length === 0 && (
                  <button className="outline-btn" onClick={handleSeedServices}>
                    <Plus size={18} /> สร้างข้อมูลเริ่มต้น
                  </button>
                )}
              </div>
              {servicesLoading ? (
                <div className="admin-empty">กำลังโหลดบริการ...</div>
              ) : services.length === 0 ? (
                <div className="admin-empty">ยังไม่มีบริการใน Firebase</div>
              ) : (
                <div className="admin-service-list">
                  {services.map((service) => (
                    <article className="admin-service-row" key={service.id}>
                      <img src={service.image || images.kitchen} alt="" />
                      <div>
                        <strong>{service.thai}</strong>
                        <span>{service.title} · ลำดับ {service.order || 1}</span>
                        <p>{service.desc}</p>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" className="outline-btn" onClick={() => handleEditService(service)}>
                          <Edit3 size={16} /> แก้ไข
                        </button>
                        <button
                          type="button"
                          className="outline-btn text-red-400 border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                          onClick={() => handleDeleteService(service.id, service.thai)}
                        >
                          <Trash2 size={16} /> ลบ
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === "portfolio" && (
          <section className="admin-services">
            <form className="admin-service-form" onSubmit={handlePortfolioSubmit}>
              <div className="admin-list-head">
                <h2>{editingPortfolioId ? "แก้ไขผลงาน" : "เพิ่มผลงานใหม่"}</h2>
                <button type="button" className="outline-btn" onClick={resetPortfolioForm}>
                  <Plus size={18} /> ล้างฟอร์ม
                </button>
              </div>

              <div className="admin-form-grid">
                <label>
                  ชื่ออังกฤษ
                  <input name="title" value={portfolioForm.title} onChange={handlePortfolioChange} required />
                </label>
                <label>
                  ชื่อไทย
                  <input name="thai" value={portfolioForm.thai} onChange={handlePortfolioChange} required />
                </label>
                <label>
                  หมวดหมู่
                  <select name="category" value={portfolioForm.category} onChange={handlePortfolioChange}>
                    {portfolioCategories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </label>
                <label>
                  สไตล์งาน
                  <input name="style" value={portfolioForm.style} onChange={handlePortfolioChange} placeholder="Modern Luxury" />
                </label>
                <label>
                  รูปภาพ URL
                  <input name="image" value={portfolioForm.image} onChange={handlePortfolioChange} placeholder={images.kitchen} />
                </label>
                <label>
                  สถานที่
                  <input name="location" value={portfolioForm.location} onChange={handlePortfolioChange} placeholder="Bangkok" />
                </label>
                <label>
                  ปีผลงาน
                  <input name="year" value={portfolioForm.year} onChange={handlePortfolioChange} placeholder="2026" />
                </label>
                <label>
                  ลำดับ
                  <input name="order" type="number" min="1" value={portfolioForm.order} onChange={handlePortfolioChange} />
                </label>
                <label className="admin-check">
                  <input name="isActive" type="checkbox" checked={portfolioForm.isActive} onChange={handlePortfolioChange} />
                  แสดงบนหน้าเว็บ
                </label>
              </div>
              <label>
                คำอธิบายสั้น
                <textarea name="desc" rows="3" value={portfolioForm.desc} onChange={handlePortfolioChange} />
              </label>
              <label>
                รายละเอียดเมื่อคลิกดู
                <textarea name="details" rows="6" value={portfolioForm.details} onChange={handlePortfolioChange} required />
              </label>
              <button className="gold-btn">
                {editingPortfolioId ? "บันทึกการแก้ไข" : "เพิ่มผลงาน"}
              </button>
            </form>

            <div className="admin-messages">
              <div className="admin-list-head">
                <h2>ผลงานทั้งหมด</h2>
                {portfolio.length === 0 && (
                  <button className="outline-btn" onClick={handleSeedPortfolio}>
                    <Plus size={18} /> สร้างข้อมูลเริ่มต้น
                  </button>
                )}
              </div>
              {portfolioLoading ? (
                <div className="admin-empty">กำลังโหลดผลงาน...</div>
              ) : portfolio.length === 0 ? (
                <div className="admin-empty">ยังไม่มีผลงานใน Firebase</div>
              ) : (
                <div className="admin-service-list">
                  {portfolio.map((project) => (
                    <article className="admin-service-row" key={project.id}>
                      <img src={project.image || images.kitchen} alt="" />
                      <div>
                        <strong>{project.thai}</strong>
                        <span>{project.title} · {project.category || "RESIDENTIAL"} · ลำดับ {project.order || 1}</span>
                        <p>{project.desc || project.details}</p>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" className="outline-btn" onClick={() => handleEditPortfolio(project)}>
                          <Edit3 size={16} /> แก้ไข
                        </button>
                        <button
                          type="button"
                          className="outline-btn text-red-400 border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                          onClick={() => handleDeletePortfolio(project.id, project.thai)}
                        >
                          <Trash2 size={16} /> ลบ
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === "team" && (
          <section className="admin-services">
            <form className="admin-service-form" onSubmit={handleTeamSubmit}>
              <div className="admin-list-head">
                <h2>{editingTeamId ? "แก้ไขทีมงาน" : "เพิ่มทีมงานใหม่"}</h2>
                <button type="button" className="outline-btn" onClick={resetTeamForm}>
                  <Plus size={18} /> ล้างฟอร์ม
                </button>
              </div>

              <div className="admin-form-grid">
                <label>
                  ตำแหน่ง / บทบาท
                  <input name="role" value={teamForm.role} onChange={handleTeamChange} placeholder="DESIGNER" required />
                </label>
                <label>
                  ชื่อ / รายละเอียดไทย
                  <input name="name" value={teamForm.name} onChange={handleTeamChange} placeholder="ออกแบบ 3D" required />
                </label>
                <label>
                  รูปภาพ URL
                  <input name="image" value={teamForm.image} onChange={handleTeamChange} placeholder={images.team} />
                </label>
                <label>
                  ลำดับ
                  <input name="order" type="number" min="1" value={teamForm.order} onChange={handleTeamChange} />
                </label>
                <label className="admin-check">
                  <input name="isActive" type="checkbox" checked={teamForm.isActive} onChange={handleTeamChange} />
                  แสดงบนหน้าเว็บ
                </label>
              </div>
              <button className="gold-btn">
                {editingTeamId ? "บันทึกการแก้ไข" : "เพิ่มทีมงาน"}
              </button>
            </form>

            <div className="admin-messages">
              <div className="admin-list-head">
                <h2>ทีมงานทั้งหมด</h2>
                {teamMembers.length === 0 && (
                  <button className="outline-btn" onClick={handleSeedTeam}>
                    <Plus size={18} /> สร้างข้อมูลเริ่มต้น
                  </button>
                )}
              </div>
              {teamLoading ? (
                <div className="admin-empty">กำลังโหลดทีมงาน...</div>
              ) : teamMembers.length === 0 ? (
                <div className="admin-empty">ยังไม่มีทีมงานใน Firebase</div>
              ) : (
                <div className="admin-service-list">
                  {teamMembers.map((member) => (
                    <article className="admin-service-row" key={member.id}>
                      <img src={member.image || images.team} alt="" />
                      <div>
                        <strong>{member.name}</strong>
                        <span>{member.role} · ลำดับ {member.order || 1}</span>
                        <p>{member.isActive === false ? "ซ่อนจากหน้าเว็บ" : "แสดงบนหน้าเว็บ"}</p>
                      </div>
                      <div className="flex gap-2">
                        <button type="button" className="outline-btn" onClick={() => handleEditTeam(member)}>
                          <Edit3 size={16} /> แก้ไข
                        </button>
                        <button
                          type="button"
                          className="outline-btn text-red-400 border-red-500/20 hover:bg-red-500/10 hover:text-red-500"
                          onClick={() => handleDeleteTeam(member.id, member.name)}
                        >
                          <Trash2 size={16} /> ลบ
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Admin;
