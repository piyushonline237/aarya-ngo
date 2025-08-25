"use client";

export default function EducationHero() {
  return (
    <section className="bg-[#011728] text-white py-24 px-6 text-center relative overflow-hidden">
      {/* Glow Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#FFB70B] opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#FFB70B] opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#FFB70B]">
          Education for Every Child
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          We believe education is the key to breaking the cycle of poverty.  
          Through our programs, we provide access to knowledge, skills, and opportunities  
          that empower children and youth to build a brighter future.
        </p>
        <a
          href="#programs"
          className="bg-[#FFB70B] text-[#011728] px-6 py-3 rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          Explore Programs
        </a>
      </div>
    </section>
  );
}
