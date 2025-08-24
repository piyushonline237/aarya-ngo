
"use client"
import { motion } from "framer-motion"

export default function Vision() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 shadow-md rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            To become a trusted brand that inspires confidence and sets new
            standards of excellence in footwear, combining comfort, quality,
            and style for every woman.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
