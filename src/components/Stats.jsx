import {
  Users,
  Boxes,
  Star,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: <Users size={45} />,
    title: "10+",
    desc: "ปีประสบการณ์",
  },

  {
    icon: <Boxes size={45} />,
    title: "500+",
    desc: "โครงการที่ไว้วางใจ",
  },

  {
    icon: <Star size={45} />,
    title: "98%",
    desc: "ลูกค้าพึงพอใจ",
  },

  {
    icon: <ShieldCheck size={45} />,
    title: "1 YEAR",
    desc: "รับประกันงานติดตั้ง",
  },
];

function Stats() {
  return (
    <section className="py-24">
      <div className="container-custom">

        <div className="glass rounded-[35px] overflow-hidden grid md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={index}
              className="p-10 border-r border-white/10 last:border-none"
            >

              <div className="gold-text mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl gold-text mb-4">
                {item.title}
              </h3>

              <p className="text-white/70">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
