"use client";
import styles from "./Contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.stickyFooter}>
        <div className={styles.contentContainer}>
          <div className={styles.titleText}>
            <p className={styles.titleTop}>{`I’d`} Love</p>
            <p>to chat</p>
          </div>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              BASED &#9734; IN THE PAKISTAN
              <br />
              <span className={styles.portText}>PORTFOLIO © 2025 &#9825;</span>
            </p>
          </div>
          <div className={styles.contactText}>
            <p className={styles.bioText}>
              {`I’m`} actively looking for new opportunities. <br />
              If {`you’re`} in the market for a developer or designer, {`I’d`} love to hear from you{" "}
            </p>
            <div className={styles.contactDetails}>
              <a
                href="https://www.linkedin.com/in/emad-ahmed-7b1024314/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linked-in-logo.png"
                  alt="LinkedIn Icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </a>
              <p>Emad Ahmed </p>
            </div>
            <div className={styles.contactDetails}>
              <a
                href="https://github.com/Mr-devp-emad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/github-icon.png"
                  alt="GitHub Icon"
                  width={20}
                  height={20}
                  className={styles.icon}
                />
              </a>
              <p>Mr-devp-emad</p>
            </div>
            <div className={styles.contactDetails}>
              <Image
                src="/emailIcon.png"
                alt="Email Icon"
                width={20}
                height={20}
                className={styles.icon}
              />
              <p>emadahmed7427@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
