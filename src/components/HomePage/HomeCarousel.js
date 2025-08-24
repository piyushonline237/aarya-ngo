"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import DonateButton from "../DonateButton/DonateButton"

export default function HomeCarousel() {
  const images = [
    { src: "/images/Slide1.png", alt: "Slide 1" },
    { src: "/images/Slide2.png", alt: "Slide 2" },
    { src: "/images/Slide3.png", alt: "Slide 3" },
  ]

  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  return (
    <div
      className="relative w-full 
      h-[250px] sm:h-[350px] md:h-[350px] 
      lg:h-[260px] xl:h-[370px]
      overflow-hidden  shadow-lg"
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={images[current].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
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

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronLeftIcon fontSize="large" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition"
      >
        <ChevronRightIcon fontSize="large" />
      </button>

      {/* Navigation Bars */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > current ? 1 : -1)
              setCurrent(idx)
            }}
            className={`h-1 w-8 rounded-full transition-all ${
              idx === current ? "bg-white" : "bg-gray-400/70"
            }`}
          />
        ))}
      </div>

      {/* Donate Button */}
        {/* Donate Button */}
         {/* Donate Button */}
    {/* Donate Button */}
<div className="absolute bottom-4 right-4">
  <DonateButton className="cursor-pointer hover:scale-105 transition" />
</div>



    </div>
  )
}
