"use client";

export default function OurVision() {
  return (
    <section className="bg-[#011728] text-white py-20 px-6 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFB70B] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFB70B] rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#FFB70B] mb-6">
          Our Vision
        </h2>

        {/* Divider */}
        <div className="w-24 h-1 bg-[#FFB70B] mx-auto mb-10 rounded-full"></div>

        {/* Content */}
        <p className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-200">
          To build a world where every individual has the <span className="text-[#FFB70B] font-semibold">opportunity to thrive</span>. 
          Through education, healthcare, and empowerment, we envision communities 
          that are self-reliant, compassionate, and progressive.  
        </p>
      </div>
    </section>
  );
}
