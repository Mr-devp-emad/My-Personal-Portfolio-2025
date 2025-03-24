"use client";
import styles from "./Skills.module.css";
import { skills } from "../../skills";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillItemProps {
  skill: string;
  index: number;
}

export default function Skills() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  // const titleDelay = 0.5 + (skills.length - 1) * 0.08 + 0.5;

  const isContainerInView = useInView(containerRef, {
    once: false,
    amount: 0.001,
  });

  return (
    <>
      <section ref={titleRef} className={styles.container}>
        <motion.div
          className={styles.titleDiv}
          initial={{ y: 50 }}
          animate={isContainerInView ? { y: 0 } : { y: 50 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <p className={styles.titleText}>tools in my kit</p>
        </motion.div>
        <div className={styles.skillsContainer} ref={containerRef}>
          <motion.div
            className={styles.skillsContainer}
            initial={{ y: 200 }}
            animate={isContainerInView ? { y: 0 } : { y: 200 }}
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.2,
            }}
          >
            {skills.map((skill, index) => (
              <SkillItem key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

function SkillItem({ skill, index }: SkillItemProps) {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(itemRef, {
    once: false,
    amount: 0.2,
  });

  const delay = index * 0.05;

  return (
    <motion.div
      ref={itemRef}
      className={styles.skillItem}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: isInView ? delay : 0,
      }}
    >
      {skill}
    </motion.div>
  );
}
