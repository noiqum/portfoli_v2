import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
///components/////
import Project from "../components/project/project";
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
      y: custom * 15,
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
const project = {
  initial: {
    y: 800,
  },
  animate: {
    y: 0,
    transition: {
      type: "spring",
      damping: 1200,
      stiffness: 30,
    },
  },
};
const projectList = {
  agora: {
    name: "agora",
    tools: ["react", "redux", "sass", "firebase"],
    explanation:
      "An app provides a platform where event could be arranged, people with mutual interest can meet and share precious moments",
    img: "/agoras.png",
  },
  corner: {
    name: "corner",
    tools: ["react", "redux", "sass", "firebase", "stripe"],
    explanation: "E-commerce store that outfits are on sell in",
    img: "/corner.png",
  },
  stocky: {
    name: "stocky",
    tools: ["react", "firebase"],
    explanation:
      "stocky has goal that is tracking stock and capturing current items at the stock,it gives a chance of creating a database to track stock",
    img: "/tracker.png",
  },
  coder: {
    name: "coder academy",
    explanation: "landing page of coder academy bootcamp",
    img: "/coder.png",
    tools: ["vanilla js", "SASS", "firebase"],
  },
};

function Portfolio() {
  const [project, setProject] = useState(projectList.agora);
  const projectHandle = (elm) => {
    setProject(projectList[`${elm}`]);
  };

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
        className={styles.portfolio_nav}
        initial={{ y: -100 }}
        animate={{
          y: 0,
          transition: {
            duration: 2,
            delay: 0.3,
            ease: "easeInOut",
          },
        }}
      >
        <Link href="/">
          <a>home</a>
        </Link>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </motion.div>
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
      <motion.div className={styles.portfolio_frame}>
        <motion.div
          className={styles.portfolio_frame_links}
          variants={header}
          animate="animate"
          initial="initial"
        >
          <motion.span
            onClick={() => {
              projectHandle("agora");
            }}
            variants={project}
          >
            Agora
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("agora");
            }}
            variants={project}
          >
            1
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("corner");
            }}
            variants={project}
          >
            Corner
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("corner");
            }}
            variants={project}
          >
            2
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("stocky");
            }}
            variants={project}
          >
            Stocky
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("stocky");
            }}
            variants={project}
          >
            3
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("coder");
            }}
            variants={project}
          >
            Coder
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("coder");
            }}
            variants={project}
          >
            4
          </motion.span>
        </motion.div>
        <motion.div className={styles.portfolio_frame_project}>
          <AnimatePresence>
            <Project project={project} key={project.name} />
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Portfolio;
