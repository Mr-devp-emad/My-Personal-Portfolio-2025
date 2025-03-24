"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const sectionRef = useRef(null);

  // Use a single scroll progress for the entire section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Create dramatically different transform values for title and description
  // Title moves much faster and further than description
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const descriptionY = useTransform(scrollYProgress, [0, 1], [0, -800]);

  return (
    <>
      <section ref={sectionRef} className={styles.container}>
        <motion.div
          className={styles.titleWrapper}
          style={{ y: titleY }}
          initial={{ y: 0 }}
        >
          <h1 className={styles.title}>
            hi i&apos;m <span className={styles.caitlin}>Emad</span>
          </h1>
        </motion.div>
        <motion.div
          className={styles.descriptionWrapper}
          style={{ y: descriptionY }}
          initial={{ y: 0 }}
        >
          <p className={styles.description}>
            FULL STACK ⛭ WEB DEVELOPER <br />
            FRONT END ☆ OBSESSED
            <br />
            <span className={styles.portText}>PORTFOLIO © 2025 &#9825;</span>
          </p>
        </motion.div>
      </section>
    </>
  );
}
