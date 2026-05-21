const team = [
  {
    name: "DESIGNER",
    role: "ออกแบบ 3D",
  },

  {
    name: "PROJECT MANAGER",
    role: "ควบคุมงาน",
  },

  {
    name: "PRODUCTION TEAM",
    role: "ทีมผลิต",
  },

  {
    name: "INSTALLATION TEAM",
    role: "ทีมติดตั้ง",
  },
];

function Team() {
  return (
    <section className="py-24">
      <div className="container-custom">

        <p className="gold-text tracking-[3px] mb-4">
          OUR TEAM
        </p>

        <h2 className="section-title mb-14">
          ทีมงานของเรา
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((item, index) => (
            <div
              key={index}
              className="glass rounded-[30px] overflow-hidden"
            >

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200"
                alt={item.name}
                className="h-[350px] w-full object-cover"
              />

              <div className="p-8">

                <h3 className="gold-text text-xl mb-2">
                  {item.name}
                </h3>

                <p className="text-white/60">
                  {item.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Team;
