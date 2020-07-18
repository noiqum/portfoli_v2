import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 2,
        },
      }}
    >
      <h1>contact</h1>
      <Link href="/">
        <a>home</a>
      </Link>
      <Link href="/portfolio">
        <a> portfolio</a>
      </Link>
    </motion.div>
  );
}

export default Contact;
