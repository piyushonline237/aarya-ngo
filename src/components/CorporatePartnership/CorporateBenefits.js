export default function CorporateBenefits() {
  const benefits = [
    "Build a positive brand image through CSR",
    "Engage employees in meaningful volunteering",
    "Contribute to long-term social impact projects",
    "Enhance community development and inclusivity",
  ]

  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-[rgb(1,23,40)] mb-10">
        Why Partner With Us?
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        {benefits.map((item, i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <p className="text-lg text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
