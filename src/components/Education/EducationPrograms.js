
"use client";
export default function EducationPrograms() {

  const programs = [
    {
      title: "Scholarship Support",
      desc: "Financial assistance for underprivileged students to continue their studies without interruption.",
    },
    {
      title: "Digital Learning",
      desc: "Smart classrooms and e-learning modules that bring modern education to rural and semi-urban schools.",
    },
    {
      title: "Skill Development",
      desc: "Practical training for youth in communication, technology, and employability skills.",
    },
    {
      title: "Community Learning Centers",
      desc: "Safe spaces for children and adults to learn, read, and grow together.",
    },
  ];

  return (
    <section id="programs" className="bg-white text-[#011728] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#011728]">
          Our Education Programs
        </h2>
        <div className="w-24 h-1 bg-[#FFB70B] mx-auto mt-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {programs.map((program, i) => (
          <div
            key={i}
            className="bg-[#011728] text-white p-8 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold text-[#FFB70B] mb-4">
              {program.title}
            </h3>
            <p className="text-gray-200">{program.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
