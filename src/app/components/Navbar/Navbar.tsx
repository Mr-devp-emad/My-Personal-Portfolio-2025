"use client";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const handleNavigation = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <nav className={styles.container}>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("hero")}
        >
          index
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("projects")}
        >
          projects
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("about")}
        >
          about
        </button>
        <button
          className={styles.navButton}
          onClick={() => handleNavigation("contact")}
        >
          contact
        </button>

      </nav>
    </>
  );
}
