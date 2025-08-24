"use client"
import { motion } from "framer-motion"

export default function Mission() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white shadow-md rounded-2xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
            To deliver high-quality, stylish, and affordable footwear that
            empowers women to step forward with confidence in every walk of
            life.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
