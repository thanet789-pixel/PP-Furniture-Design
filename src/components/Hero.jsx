function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1600')",
        }}
      />

      <div className="absolute inset-0 bg-[#03130f]/75" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#03130f] via-[#03130f]/70 to-transparent" />

      <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-32">

        <div>

          <p className="gold-text tracking-[4px] mb-5">
            ABOUT US
          </p>

          <h1 className="section-title gold-text mb-8">
            Crafted for Life,
            <br />
            Designed for You
          </h1>

          <div className="w-24 h-[2px] bg-[#d8b27c] mb-8" />

          <p className="text-white/80 text-lg leading-9 max-w-xl">
            เราออกแบบและสร้างสรรค์เฟอร์นิเจอร์บิวท์อิน
            ที่ตอบโจทย์การใช้ชีวิตของคุณอย่างลงตัว
            ด้วยทีมงานมืออาชีพและวัสดุคุณภาพสูง
          </p>

          <button className="mt-10 border border-[#d8b27c] text-[#d8b27c] px-10 py-4 rounded-full hover:bg-[#d8b27c] hover:text-black transition">
            ปรึกษาฟรี / รับใบเสนอราคา
          </button>

        </div>

        <div className="glass rounded-[40px] p-10">

          <div className="space-y-10">

            <div>
              <h3 className="gold-text text-3xl mb-4">
                OUR MISSION
              </h3>

              <p className="text-white/70 leading-8">
                ออกแบบและสร้างสรรค์เฟอร์นิเจอร์
                ที่ผสานความสวยงาม ฟังก์ชัน
                และคุณภาพอย่างลงตัว
              </p>
            </div>

            <div className="border-t border-white/10 pt-10">

              <h3 className="gold-text text-3xl mb-4">
                OUR VISION
              </h3>

              <p className="text-white/70 leading-8">
                เป็นผู้นำด้านเฟอร์นิเจอร์บิวท์อิน
                ที่ลูกค้าไว้วางใจมากที่สุด
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
