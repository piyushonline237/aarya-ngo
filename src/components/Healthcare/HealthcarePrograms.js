export default function HealthcarePrograms() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-[#ffb70b]">
      <div className="grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div className="text-[rgb(1,23,40)]">
          <h2 className="text-4xl font-bold mb-6">Our Healthcare Programs</h2>
          <p className="mb-6 text-lg leading-relaxed">
            At Prayas by Aarya Foundation, we believe that good health is the
            foundation of a better future. Our healthcare initiatives focus on
            bringing quality medical services directly to communities that need
            them the most — ensuring no one is left behind.
          </p>
          <ul className="space-y-3 text-lg font-medium">
            <li>🏥 Free medical check-up camps for underprivileged families</li>
            <li>💊 Access to essential medicines and basic treatments</li>
            <li>🩺 Health awareness workshops on hygiene & nutrition</li>
            <li>🤝 Partnerships with local doctors & hospitals</li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/images/health.png"
            alt="Healthcare Programs"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
