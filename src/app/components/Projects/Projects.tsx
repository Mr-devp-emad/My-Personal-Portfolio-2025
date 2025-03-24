"use client";
import styles from "./Projects.module.css";
import { projects } from "../../data";
import Card from "./Card/Card";
import { useScroll } from "framer-motion";
import { useRef } from "react";

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <div className={styles.container}>
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.08;
          return (
            <Card
              key={index}
              i={index}
              {...project}
              range={[index * 0.25, 1]}
              progress={scrollYProgress}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </>
  );
}
