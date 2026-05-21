import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Headphones,
  ArrowRight,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="relative min-h-screen bg-[#03130f] text-white pt-32 pb-16 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#03130f] via-[#03130f]/90 to-[#03130f]/70" />

      <div className="relative z-10 container-custom">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
          <div>

            <p className="text-[#d8b27c] tracking-[3px] text-sm mb-5">
              CONTACT US
            </p>

            <h1 className="text-6xl leading-[1.15] font-light text-[#d8b27c] mb-8">
              Let’s Create
              <br />
              Something Beautiful
              <br />
              Together
            </h1>

            <h2 className="text-4xl font-light mb-8">
              ให้เราช่วยออกแบบพื้นที่ในฝันของคุณ
            </h2>

            <div className="w-20 h-[2px] bg-[#d8b27c] mb-10" />

            <p className="text-white/70 leading-9 text-lg max-w-xl">
              ทีมงานของเราพร้อมให้คำปรึกษา ออกแบบ และสร้างสรรค์เฟอร์นิเจอร์บิวท์อิน
              ที่ตรงใจคุณที่สุด ด้วยคุณภาพและมาตรฐานระดับพรีเมียม
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">

              <div className="text-center">
                <MessageCircle
                  className="mx-auto text-[#d8b27c] mb-4"
                  size={34}
                />

                <h3 className="text-[#d8b27c] mb-3 font-medium">
                  ให้คำปรึกษาฟรี
                </h3>

                <p className="text-white/60 text-sm leading-7">
                  พร้อมแนะนำโดยผู้เชี่ยวชาญ
                </p>
              </div>

              <div className="text-center">
                <PenTool
                  className="mx-auto text-[#d8b27c] mb-4"
                  size={34}
                />

                <h3 className="text-[#d8b27c] mb-3 font-medium">
                  ออกแบบเฉพาะคุณ
                </h3>

                <p className="text-white/60 text-sm leading-7">
                  ดีไซน์ตรงใจ ฟังก์ชันตอบโจทย์
                </p>
              </div>

              <div className="text-center">
                <ShieldCheck
                  className="mx-auto text-[#d8b27c] mb-4"
                  size={34}
                />

                <h3 className="text-[#d8b27c] mb-3 font-medium">
                  คุณภาพมาตรฐาน
                </h3>

                <p className="text-white/60 text-sm leading-7">
                  วัสดุพรีเมียม รับประกันผลงาน
                </p>
              </div>

              <div className="text-center">
                <Headphones
                  className="mx-auto text-[#d8b27c] mb-4"
                  size={34}
                />

                <h3 className="text-[#d8b27c] mb-3 font-medium">
                  บริการครบวงจร
                </h3>

                <p className="text-white/60 text-sm leading-7">
                  ดูแลตั้งแต่ต้นจนจบ
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[30px] p-10 shadow-2xl">

            <p className="text-[#d8b27c] text-sm tracking-[3px] mb-3">
              SEND US A MESSAGE
            </p>

            <h3 className="text-3xl mb-10">
              กรอกข้อมูลให้เราติดต่อกลับ
            </h3>

            <form className="space-y-7">

              <div className="grid md:grid-cols-2 gap-5">

                <div>
                  <label className="block mb-3 text-white/80">
                    ชื่อ-นามสกุล *
                  </label>

                  <input
                    type="text"
                    placeholder="กรอกชื่อ-นามสกุล"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#d8b27c]"
                  />
                </div>

                <div>
                  <label className="block mb-3 text-white/80">
                    เบอร์โทรศัพท์ *
                  </label>

                  <input
                    type="text"
                    placeholder="กรอกเบอร์โทรศัพท์"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#d8b27c]"
                  />
                </div>

              </div>

              <div>
                <label className="block mb-3 text-white/80">
                  อีเมล
                </label>

                <input
                  type="email"
                  placeholder="กรอกอีเมลของคุณ"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#d8b27c]"
                />
              </div>

              <div>
                <label className="block mb-3 text-white/80">
                  บริการที่สนใจ
                </label>

                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#d8b27c] text-white">

                  <option className="bg-[#03130f]">
                    เลือกบริการที่สนใจ
                  </option>

                  <option className="bg-[#03130f]">
                    Built-in Furniture
                  </option>

                  <option className="bg-[#03130f]">
                    Kitchen
                  </option>

                  <option className="bg-[#03130f]">
                    Bedroom
                  </option>

                  <option className="bg-[#03130f]">
                    Home Office
                  </option>

                </select>
              </div>

              <div>
                <label className="block mb-3 text-white/80">
                  รายละเอียดโครงการ
                </label>

                <textarea
                  rows="5"
                  placeholder="บอกรายละเอียดความต้องการของคุณ"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-[#d8b27c]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d8b27c] text-black py-5 rounded-xl font-semibold flex items-center justify-center gap-3 hover:scale-[1.01] transition"
              >
                ส่งข้อมูล
                <ArrowRight size={20} />
              </button>

            </form>

          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="grid lg:grid-cols-3 gap-8 mt-14">

          {/* CONTACT INFO */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] p-10">

            <p className="text-[#d8b27c] tracking-[3px] text-sm mb-4">
              CONTACT INFORMATION
            </p>

            <h3 className="text-3xl mb-10">
              ช่องทางการติดต่อ
            </h3>

            <div className="space-y-8 text-white/80">

              <div className="flex items-start gap-4">
                <Phone className="text-[#d8b27c]" />
                <div>
                  <p>02-123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#d8b27c]" />
                <div>
                  <p>info@pphomefurniture.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MessageCircle className="text-[#d8b27c]" />
                <div>
                  <p>@pphome</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#d8b27c]" />
                <div>
                  <p>
                    88/8 ถนนกาญจนาภิเษก
                    <br />
                    บางบัวทอง นนทบุรี 11110
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock3 className="text-[#d8b27c]" />
                <div>
                  <p>
                    จันทร์ - เสาร์ 9:00 - 18:00 น.
                    <br />
                    (หยุดวันอาทิตย์)
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* SHOWROOM */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden">

            <div className="p-8">
              <p className="text-[#d8b27c] tracking-[3px] text-sm mb-4">
                VISIT OUR SHOWROOM
              </p>

              <h3 className="text-3xl">
                เยี่ยมชมโชว์รูมของเรา
              </h3>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200"
                className="w-full h-[320px] object-cover"
              />

              <button className="absolute bottom-6 left-6 bg-[#d8b27c] text-black px-7 py-4 rounded-full flex items-center gap-3 font-medium">
                ดูเส้นทาง
                <ArrowRight size={18} />
              </button>
            </div>

          </div>

          {/* MAP */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden relative min-h-[450px]">

            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />

            <div className="absolute inset-0 bg-[#03130f]/70" />

            <div className="relative z-10 h-full flex items-center justify-center text-center p-10">

              <div>

                <div className="w-24 h-24 rounded-full bg-[#d8b27c] text-black flex items-center justify-center mx-auto mb-8 text-3xl font-bold">
                  PP
                </div>

                <h3 className="text-3xl mb-5">
                  PP HOME FURNITURE
                </h3>

                <p className="text-white/70 leading-8">
                  The Crystal SB Ratchapruek
                  <br />
                  บางบัวทอง นนทบุรี
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;