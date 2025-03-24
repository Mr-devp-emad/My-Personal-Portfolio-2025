import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import styles from "./Story.module.css";

export default function Story() {
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.95", "start 0.15"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    const handleResize = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);
    handleResize(); // Initial check

    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  // ✅ Define useTransform at the top level (before using map)
  const yTransforms = [
    useTransform(scrollYProgress, [0, 1], ["110%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["110%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["120%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["200%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["250%", "0%"]),
    useTransform(scrollYProgress, [0, 1], ["300%", "0%"]),
  ];

  const lineHeights = [
    useTransform(scrollYProgress, [0, 1], ["10vh", "2.8vh"]),
    useTransform(scrollYProgress, [0, 1], ["8vh", "2.8vh"]),
    useTransform(scrollYProgress, [0, 1], ["6vh", "2.8vh"]),
    useTransform(scrollYProgress, [0, 1], ["5vh", "2.8vh"]),
    useTransform(scrollYProgress, [0, 1], ["4vh", "2.8vh"]),
    useTransform(scrollYProgress, [0, 1], ["4vh", "2.8vh"]),
  ];

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["2em", "0em"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);
  const springY = useSpring(titleY, {
    stiffness: 300,
    damping: 20,
    restDelta: 0.001,
  });

  const textContent = [
    `Hi, I&apos;m Emad! I&apos;ve always loved making stuff. As a kid, 
    the staff at my after-school club joked they had to stay late whenever I was in. 
    I&apos;d be busy drawing, painting, or crafting, leaving a trail of chaos behind me.`,

    `Not much changed as I got older. I studied Bachelor of Arts at university. 
    During my studies, I started working as a General Salesman at a furniture store.`,

    `I&apos;ve been interested in the tech industry since my school days, 
    but at the time, it felt like a difficult path to pursue. 
    Before stepping into web development, I considered learning graphic design, 
    but I quickly realized it wasn’t the right fit for me. A year ago, I finally 
    took the leap into web development, and while the journey hasn’t been easy, 
    it has been incredibly rewarding. Going from zero to becoming a frontend 
    developer came with its fair share of challenges and disappointments, but 
    one key lesson I’ve learned is that self-learning is everything. 
    The ability to adapt, explore new technologies, and push through obstacles 
    has shaped me into a more determined and skilled developer.`,

    `I always considered myself more creative than technical, 
    but a friend introduced me to GIAIC (Governor’s Initiative on Artificial Intelligence). 
    Intrigued, I quickly enrolled in the program and soon discovered the creative 
    potential of coding. As I started learning HTML and CSS, 
    I realized I had found my next passion.`,

    `Luckily, I managed to earn a place at GIAIC, 
    a programme focused on both technical and problem-solving skills. 
    It&apos;s been a life-changing experience. 
    I&apos;ve explored new technologies, collaborated with amazing people, 
    and realized how much it’s possible to learn in a short space of time.`,

    `I&apos;ve found my creativity has been one of my biggest strengths in tech. 
    Now, I&apos;m excited to keep learning, building, and finding my place in the industry. 
    I can’t wait to see where this new path takes me.`,
  ];

  return (
    <section ref={titleRef} className={styles.container}>
      <motion.div
        style={{
          y: isMobile ? 0 : springY,
          letterSpacing: isMobile ? 0 : letterSpacing,
        }}
        className={styles.titleContainer}
      >
        <p>A bit about me</p>
      </motion.div>

      <div className={styles.textContainer}>
        <div className={styles.textHalf}>
          {textContent.slice(0, 3).map((text, index) => (
            <div key={index} className={styles.textSection}>
              <motion.p
                style={{
                  y: isMobile ? 0 : yTransforms[index],
                  lineHeight: isMobile ? "2.5vh" : lineHeights[index],
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>

        <div className={styles.textHalf}>
          {textContent.slice(3).map((text, index) => (
            <div key={index + 3} className={styles.textSection}>
              <motion.p
                style={{
                  y: isMobile ? 0 : yTransforms[index + 3],
                  lineHeight: isMobile ? "2.5vh" : lineHeights[index + 3],
                }}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
