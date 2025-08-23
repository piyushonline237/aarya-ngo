"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function HomeCarousel() {
  const images = [
    { src: "/images/Slide1.png", alt: "Slide 1" },
    { src: "/images/Slide2.png", alt: "Slide 2" },
    { src: "/images/Slide3.png", alt: "Slide 3" },
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 4000) // 4 seconds per slide
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div
      className="relative w-full 
      h-[250px]     /* small mobile */
      sm:h-[350px]  /* bigger phones */
      md:h-[400px]  /* tablets */
      lg:h-[260px]  /* laptops (60% smaller) */
      xl:h-[300px]  /* big desktops (60% smaller) */
      overflow-hidden rounded-2xl shadow-lg"
    >
      <AnimatePresence>
        <motion.div
          key={images[current].src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[current].src}
            alt={images[current].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
