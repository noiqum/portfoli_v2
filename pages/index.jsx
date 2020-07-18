import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
///library/////////
import { motion } from "framer-motion";
import { gsap } from "gsap";
import anime from "animejs";
////css//////
import styles from "../css/index.module.scss";

function index() {
  const coverRef = useRef(null);
  useEffect(() => {
    if (coverRef.current) {
      anime({
        targets: ".cover_block",
        d: {
          value:
            "M0 285V1H1920V199C1920 199 1691.46 88.5348 1540 85C1297 79.3291 1166.92 137.43 924 129C796.024 124.559 706.036 55.0951 578 53C349.198 49.2561 0 285 0 285Z",
        },
        easing: "easeOutQuad",
        duration: 4000,
        loop: false,
      });
    }
  }, []);

  const block = (route) => {
    const covering = anime({
      targets: ".cover_block",
      d: {
        value:
          "M0 1017V1H1920V1017C1920 1017 1817.46 1020.53 1666 1017C1423 1011.33 1278.92 1025.43 1036 1017C908.024 1012.56 736.036 1019.1 608 1017C379.198 1013.26 0 1017 0 1017Z",
      },
      easing: "easeOutQuad",
      duration: 4000,
      loop: false,
    });
    covering.restart();
    Router.push(route);
  };
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: {
          duration: 2,
          delay: 4,
        },
      }}
      className={styles.cover}
    >
      <div ref={coverRef} className={styles.cover_main}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1920 1021"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            className="cover_block"
            d="M0 7V1H1920V4.5625C1920 4.5625 1684.25 2.64388 1532.79 2.3125C1289.79 1.78085 1153.77 5.3528 910.846 4.5625C782.87 4.14615 711.861 2.50891 583.824 2.3125C355.023 1.96151 0 7 0 7Z"
            fill="#3058C1"
          />
        </svg>
      </div>
      <motion.div className={styles.cover_hello}>
        <motion.h2
          initial={{
            y: 60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.6,
              delay: 2,
            },
          }}
        >
          Hi ! this is Onur
        </motion.h2>
        <motion.small
          initial={{
            y: 60,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.6,
              delay: 2.3,
            },
          }}
        >
          frontend lover
        </motion.small>
      </motion.div>
      <div className={styles.cover_links}>
        <a
          onClick={() => {
            block("/portfolio");
          }}
        >
          portfolio
        </a>

        <a
          onClick={() => {
            block("/contact");
          }}
        >
          contact
        </a>
      </div>
    </motion.div>
  );
}

export default index;
