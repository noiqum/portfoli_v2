import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../css/contact.module.scss";

function Contact() {
  const [email] = useState("onurcoskun99@gmail.com");
  /////framer-motion objects/////////
  const social = {
    animate: {
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.6,
        staggerDirection: 1,
      },
    },
  };
  const item = {
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2.5,
        delay: 2,
        ease: "easeIn",
      },
    },
    initial: {
      y: 100,
      opacity: 0,
    },
  };
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
      <motion.a
        href="/onur_coskun_cv.pdf"
        download
        initial={{ x: "100vw", rotate: 0 }}
        animate={{
          x: 0,
          rotate: 360,
          transition: { duration: 2.3, ease: "easeInOut", delay: 3 },
        }}
        className={styles.contact_resume}
      >
        Resume
      </motion.a>
      <motion.div
        className={styles.contact_social}
        variants={social}
        animate="animate"
        initial="initial"
      >
        <motion.a
          href="https://twitter.com/oneur"
          target="blank"
          variants={item}
        >
          twitter
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/oneur"
          target="blank"
          variants={item}
        >
          linkedin
        </motion.a>
        <motion.a
          href="https://github.com/noiqum"
          target="blank"
          variants={item}
        >
          github
        </motion.a>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
