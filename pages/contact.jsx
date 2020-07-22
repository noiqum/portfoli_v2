import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../css/contact.module.scss";

function Contact() {
  const [email] = useState("onurcoskun99@gmail.com");
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 2,
        },
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          easings: [0.48, 0.2, 0.2, 0.99],
        },
      }}
      className={styles.contact}
    >
      <motion.div
        animate={{
          opacity: 1,
          transition: {
            duration: 1.8,
            easings: [0.48, 0.2, 0.2, 0.99],
            delay: 2.1,
          },
        }}
        initial={{ opacity: 0 }}
        className={styles.contact_links}
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/portfolio">
          <a> portfolio</a>
        </Link>
      </motion.div>
      <div className={styles.contact_hi}>
        <motion.div
          animate={{
            y: 0,
            transition: { duration: 2, ease: "easeIn", delay: 2.5 },
          }}
          initial={{ y: 900 }}
        >
          Say Hi to me!
        </motion.div>
      </div>
      <input type="text" value={email} id="email-text"></input>
      <span
        onClick={() => {
          document.getElementById("email-text").select();
          document.execCommand("Copy");
        }}
      >
        Copy
      </span>
    </motion.div>
  );
}

export default Contact;
