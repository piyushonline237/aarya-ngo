"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import FavoriteIcon from "@mui/icons-material/Favorite"
import { useRouter } from "next/navigation"

const aboutData = [
  { img: "/impact-story-education.png", text: "Education for All" },
  { img: "/impact-story-education.png", text: "Healthcare Support" },
  { img: "/impact-story-education.png", text: "Women Empowerment" },
  { img: "/impact-story-education.png", text: "Environmental Care" },
  { img: "/impact-story-education.png", text: "Child Nutrition" },
]

export default function AboutSection() {
  const router = useRouter()

  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-6">
        About Our Mission
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {aboutData.map((item, idx) => (
          <div
            key={idx}
            className="relative bg-white rounded-xl shadow-md overflow-hidden group"
          >
            {/* Image with hover scale */}
            <div className="relative h-44 w-full overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full"
              >
                <Image
                  src={item.img}
                  alt={item.text}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Text overlay always visible with hover effect */}
              <div className="absolute inset-0 flex items-center justify-center text-white text-base font-medium text-center px-2 transition-all duration-300 bg-black/30 group-hover:bg-black/60">
                <span className="transition-transform duration-300 group-hover:scale-110">
                  {item.text}
                </span>
              </div>

              {/* Heart Icon (bottom-right) */}
              <button
                onClick={() => router.push("/donate-now")}
                className="absolute bottom-2 right-2 text-white cursor-pointer transition-transform duration-300 hover:scale-125 hover:text-red-500"
              >
                <FavoriteIcon fontSize="medium" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
