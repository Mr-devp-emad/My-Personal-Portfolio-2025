"use client";
import styles from "./Card.module.css";
import { useRef } from "react";
import { Project } from "../../../data";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface CardProps extends Project {
  i: number;
  progress: MotionValue;
  range: [number, number];
  targetScale: number;
}

export default function Card({
  title,
  description,
  src,
  link,
  github,
  i,
  colour,
  targetScale,
  range,
  progress,
}: CardProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        style={{
          scale,
          top: `calc(-5vh + ${i * 7}vh)`,
        }}
      >
        <div className={styles.titleContainer}>
          <h2>
            <span className={styles.projectText}>Project- {"   "}</span> {title}
          </h2>
        </div>

        <div
          className={styles.bodyContainer}
          style={{
            backgroundColor: colour,
            boxShadow: `0 0 4vh 4vh ${colour} `,
          }}
        >
          <div className={styles.descriptionLinksContainer}>
            <div className={styles.descriptionText}>
              <p>{description}</p>
            </div>
            <div className={styles.linkDiv}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Link-icon.png"
                  alt="Link"
                  width={40}
                  height={40}
                  className={styles.linkIcon}
                />
              </a>

              <a href={github} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/github-icon.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className={styles.icon}
                />
              </a>
            </div>
          </div>
          <a href={link}>
            <div className={styles.imageContainer}>
              <motion.div
                style={{ scale: imageScale }}
                className={styles.inner}
              >
                <Image
                  className={styles.cardImage}
                  src={`/${src}`}
                  alt="Project Image"
                  width={700}
                  height={500}
                />
              </motion.div>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
