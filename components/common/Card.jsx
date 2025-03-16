import React from "react";

import { motion } from "framer-motion";

export default function Card({ children, className = "" }) {
  return (
    <motion.div
      className={`rounded-lg shadow-lg ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}
