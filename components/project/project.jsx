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
      <div className={styles.project_links}>
        <a href={project.github} target="blank">
          Github
        </a>
        <a href={project.live} target="blank">
          Live Demo
        </a>
      </div>
      <div className={styles.project_container}>
        {" "}
        <em> Name : </em>
        {project.name}
        <div>{project.explanation}</div>
        <div>
          <em>Tools :</em>
          {project.tools.map((i, index) => {
            return <span key={index}>{i}, </span>;
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
