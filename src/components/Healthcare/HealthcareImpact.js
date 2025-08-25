export default function HealthcareImpact() {
  return (
    <section className="relative py-20 bg-white text-center text-white overflow-hidden">
      {/* Background image (you can replace with your image) */}
      <div className="absolute inset-0">
        <img
          src="/images/impact.png"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
          Our Impact on Healthcare
        </h2>
        <p className="text-lg mb-8 leading-relaxed">
          Over <span className="font-semibold text-yellow-400">10,000 people</span> have benefitted from our healthcare programs,
          receiving timely support, treatment, and ongoing medical care. 
        </p>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-400">500+</h3>
            <p className="mt-2">Free Health Camps</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-400">200+</h3>
            <p className="mt-2">Doctors & Volunteers</p>
          </div>
          <div className="bg-white/10 p-6 rounded-2xl shadow-lg">
            <h3 className="text-3xl font-bold text-yellow-400">95%</h3>
            <p className="mt-2">Patients Recovered</p>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12">
          <a
            href="/get-involved"
            className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-500 transition"
          >
            Join Our Mission
          </a>
        </div>
      </div>
    </section>
  )
}

