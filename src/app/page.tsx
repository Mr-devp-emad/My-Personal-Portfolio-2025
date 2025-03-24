"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Story from "./components/Story/Story";
import Cursor from "./components/Cursor/cursor";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });
    lenis.on("scroll", (e) => {
      console.log(e);
    });
  }, []);

  return (
    <main className={styles.main}>
      <Navbar />
      <Cursor />
      <section id="hero" className={styles.heroContainer}>
        <Hero />
      </section>
      <section className={styles.aboutContainer}>
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills" className={styles.skillsContainer}>
        <Skills />
      </section>
      <section id="about" className={styles.storyContainer}>
        <Story />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
