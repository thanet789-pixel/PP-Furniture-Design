const values = [
  {
    title: "ดีไซน์ที่ตอบโจทย์",
    desc: "ออกแบบให้เข้ากับไลฟ์สไตล์",
  },

  {
    title: "คุณภาพระดับพรีเมียม",
    desc: "เลือกใช้วัสดุคุณภาพสูง",
  },

  {
    title: "ทีมงานมืออาชีพ",
    desc: "ประสบการณ์มากกว่า 10 ปี",
  },

  {
    title: "บริการด้วยใจ",
    desc: "ดูแลลูกค้าทุกขั้นตอน",
  },
];

function Values() {
  return (
    <section className="py-24">
      <div className="container-custom">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400"
            className="rounded-[35px]"
          />

          <div>

            <p className="gold-text tracking-[3px] mb-4">
              OUR VALUES
            </p>

            <h2 className="section-title mb-12">
              คุณค่าที่ยึดมั่น
            </h2>

            <div className="grid md:grid-cols-2 gap-8">

              {values.map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-3xl p-8"
                >

                  <h3 className="gold-text text-2xl mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/70 leading-8">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Values;
