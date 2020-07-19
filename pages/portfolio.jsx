import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
///css////
import styles from "../css/portfolio.module.scss";
////motion objects///////

const header = {
  initial: {
    y: 0,
  },
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: (custom) => {
    return {
      y: custom * 100,
      rotate: custom * 10,
      scale: custom * 1,
    };
  },
  animate: {
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 900,
      stiffness: 20,
    },
  },
};

function Portfolio() {
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 2,
        },
      }}
      className={styles.portfolio}
    >
      <motion.div
        className={styles.portfolio_header}
        variants={header}
        animate="animate"
        initial="initial"
      >
        <motion.span custom={-2} variants={letter}>
          p
        </motion.span>
        <motion.span custom={2} variants={letter}>
          r
        </motion.span>
        <motion.span custom={-5} variants={letter}>
          o
        </motion.span>
        <motion.span custom={-3} variants={letter}>
          j
        </motion.span>
        <motion.span custom={4} variants={letter}>
          e
        </motion.span>
        <motion.span custom={-4} variants={letter}>
          c
        </motion.span>
        <motion.span custom={-3} variants={letter}>
          t
        </motion.span>
        <motion.span custom={3} variants={letter}>
          s
        </motion.span>
      </motion.div>

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
