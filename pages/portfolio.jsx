import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Portfolio() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 2,
        },
      }}
    >
      <h1>portfolio</h1>

      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/contact">
        <a>contact</a>
      </Link>
    </motion.div>
  );
}

export default Portfolio;
