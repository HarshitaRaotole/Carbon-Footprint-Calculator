"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto space-y-8"
      >
        <h1 className="text-4xl font-bold text-center text-gray-900">
          About CO2 Ninja
        </h1>

        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            At CO2 Ninja, we&apos;re committed to helping individuals and organizations understand and reduce their
            environmental impact. Our user-friendly carbon footprint calculator provides personalized insights and
            actionable recommendations to create a more sustainable future.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <p className="text-gray-700">
            Our calculator takes into account various aspects of your lifestyle, including transportation, energy usage,
            diet, and consumption habits. By analyzing this data, we provide a comprehensive estimate of your carbon
            footprint and offer tailored suggestions for reducing your impact on the environment.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-white shadow-md rounded-lg p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Join Us in Making a Difference</h2>
          <p className="text-gray-700">
            Climate change is one of the most pressing issues of our time. By using CO2 Ninja, you&apos;re taking an important
            step towards understanding your role in this global challenge. Together, we can work towards a more
            sustainable and environmentally friendly world.
          </p>
        </motion.section>
      </motion.div>
    </div>
  )
}
