import React, { useState, useEffect } from "react";
import styles from "./project.module.scss";
import { motion } from "framer-motion";

function Project({ project }) {
  return (
    <motion.div
      initial={{ y: 100,opacity:0 }}
      animate={{
        y: 0,
        opacity:1,
        transition: { duration: 0.8, ease: "easeInOut", delay: 2 },
      }}
      exit={{
        y:100,
        opacity:0,
        transition: {
          duration: 1,
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
