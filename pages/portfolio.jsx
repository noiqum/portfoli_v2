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
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.8,
      ease: "easeIn",
      delayChildren: 0.6,
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};
const links = {
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
const link_item = {
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
    github: "https://github.com/noiqum/agora_new",
    live: "https://agora-event-platform.web.app/",
  },
  corner: {
    name: "corner",
    tools: ["react", "redux", "sass", "firebase", "stripe"],
    explanation: "E-commerce store that outfits are on sell in",
    img: "/corner.png",
    github: "https://github.com/noiqum/corner",
    live: "https://corner-e-commerce.web.app/",
  },
  challenge: {
    name: "100 Days",
    tools: ["react","redux","sass", "firebase"],
    explanation:"100 Days of Coding gives you a path to gain at least grasp modern Frontend Development knowledge recent days,you start from strach by following resources link to every card task links.You can share end of day your process via twitter with 100daysofcoding hashtag and you can track your process by saving to firestore database ,whenever you log in back you will reach your process",
    img: "/challenge.png",
    github: "https://github.com/noiqum/100-days-of-code",
    live: "https://coding-challenge-29d43.web.app/",
  },
  coder: {
    name: "coder academy",
    explanation: "landing page of coder academy bootcamp",
    img: "/coder.png",
    tools: ["vanilla js", "SASS", "firebase"],
    github: "https://github.com/noiqum/coderAcademy_project",
    live: "https://coder-academy-f9ed1.web.app/",
  },
  wallet: {
    name: "wallet",
    explanation: "personal expense tracker",
    img: "/wallet.png",
    tools: ["React","Context API","TypeScript","Webpack","Eslint","NODEjs","Express", "SASS","JWT", "Netlify","Heroku"],
    github: "https://github.com/noiqum/wallet",
    live: "https://admiring-hypatia-58d070.netlify.app/",
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
          variants={links}
          animate="animate"
          initial="initial"
        >
          <motion.span
            onClick={() => {
              projectHandle("agora");
            }}
            variants={link_item}
          >
            Agora
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("agora");
            }}
            variants={link_item}
          >
            1
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("corner");
            }}
            variants={link_item}
          >
            Corner
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("corner");
            }}
            variants={link_item}
          >
            2
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("challenge");
            }}
            variants={link_item}
          >
            Challenge
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("challenge");
            }}
            variants={link_item}
          >
            3
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("coder");
            }}
            variants={link_item}
          >
            Coder
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("coder");
            }}
            variants={link_item}
          >
            4
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("wallet");
            }}
            variants={link_item}
          >
            Wallet
          </motion.span>
          <motion.span
            onClick={() => {
              projectHandle("wallet");
            }}
            variants={link_item}
          >
            5
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
