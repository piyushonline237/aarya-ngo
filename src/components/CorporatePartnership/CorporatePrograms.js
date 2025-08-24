export default function CorporatePrograms() {
  const programs = [
    {
      title: "Education Sponsorship",
      description:
        "Fund schools, scholarships, and digital learning programs for underprivileged children.",
    },
    {
      title: "Healthcare Drives",
      description:
        "Support health camps, vaccination programs, and medical aid for rural communities.",
    },
    {
      title: "Women Empowerment",
      description:
        "Collaborate on skill training, financial independence, and entrepreneurship programs.",
    },
  ]

  return (
    <section className="py-16 px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[rgb(1,23,40)] mb-10">
        Partnership Programs
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {programs.map((program, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 bg-white shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-[rgb(1,23,40)]">
              {program.title}
            </h3>
            <p className="text-gray-700">{program.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
