const stats = [
  { label: "Children Educated", value: "5000+" },
  { label: "Medical Camps Held", value: "120+" },
  { label: "Women Empowered", value: "800+" },
  { label: "Communities Reached", value: "50+" },
]

export default function ImpactStats() {
  return (
    <section className="bg-[#022741] text-white rounded-2xl p-10 text-center">
      <h3 className="text-2xl font-semibold mb-8">Our Impact</h3>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-2">
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-gray-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
