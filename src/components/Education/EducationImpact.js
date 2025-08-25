
"use client";

export default function EducationImpact() {
  const initiatives = [
    {
      name: "Back-to-School Campaign",
      detail:
        "Providing uniforms, books, and stationery kits to children from marginalized communities every academic year.",
    },
    {
      name: "Teacher Training Workshops",
      detail:
        "Regular upskilling workshops for teachers to adopt innovative and interactive teaching methods.",
    },
    {
      name: "Girl Child Education Drive",
      detail:
        "Special scholarships and mentorship programs encouraging girls to continue higher education.",
    },
    {
      name: "After-School Tutoring",
      detail:
        "Free tutoring support for students who need extra help to improve academic performance.",
    },
  ];

  return (
    <section className="bg-[#f8f9fa] text-[#011728] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Our Initiatives
        </h2>
        <div className="w-24 h-1 bg-[#FFB70B] mx-auto mt-4"></div>
        <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
          Beyond classroom learning, we run several initiatives to make education more accessible, 
          inclusive, and impactful for children and youth across communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {initiatives.map((item, i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 p-8 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold text-[#011728] mb-4">
              {item.name}
            </h3>
            <p className="text-gray-700">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

