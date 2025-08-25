export default function WomenEmpowermentHero() {
  return (
    <section
      className="relative bg-[rgb(1,23,40)] text-white py-20 px-6 lg:px-20 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/we.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10">
        <h1 className="text-5xl font-bold mb-4">Women Empowerment</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Strengthening women through education, skills, and opportunities to
          create a society where every woman can lead with confidence and dignity.
        </p>
      </div>
    </section>
  );
}
