import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-center p-6">
      <motion.h2
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Your trusted real estate partner for finding the perfect home and investment opportunities.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { title: "Our Mission", desc: "Providing top-notch real estate solutions with transparency and trust." },
          { title: "Why Choose Us?", desc: "We offer verified properties, expert assistance, and secure transactions." }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-4 bg-white rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;