import React, { useState, useEffect } from "react";
import styles from "./project.module.scss";
import { motion } from "framer-motion";

function Project({ project }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        transition: { duration: 2, ease: "easeInOut", delay: 2 },
      }}
      exit={{
        scale: 0,
        transition: {
          duration: 2,
          ease: "easeInOut",
        },
      }}
      className={styles.project}
    >
      <img src={project.img} alt="project_image" />
      <div> Name : {project.name}</div>
      <div>{project.explanation}</div>
      <div>
        Tools :
        {project.tools.map((i, index) => {
          return <span key={index}>{i} </span>;
        })}
      </div>
    </motion.div>
  );
}

export default Project;
