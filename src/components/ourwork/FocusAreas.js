const areas = [
  {
    title: "Education",
    desc: "Providing access to quality education and learning resources for underprivileged children.",
  },
  {
    title: "Healthcare",
    desc: "Organizing medical camps, health awareness drives, and access to basic healthcare facilities.",
  },
  {
    title: "Women Empowerment",
    desc: "Supporting women through skill development, self-help groups, and awareness programs.",
  },
  {
    title: "Sustainability",
    desc: "Promoting eco-friendly practices and initiatives for a greener tomorrow.",
  },
]

export default function FocusAreas() {
  return (
    <section>
      <h3 className="text-2xl font-semibold text-[#022741] mb-6 text-center">
        Our Focus Areas
      </h3>
      <div className="grid gap-8 md:grid-cols-2">
        {areas.map((area, idx) => (
          <div key={idx} className="p-6 border rounded-2xl shadow-sm bg-white">
            <h4 className="text-xl font-bold text-[#022741] mb-2">{area.title}</h4>
            <p className="text-gray-600">{area.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
