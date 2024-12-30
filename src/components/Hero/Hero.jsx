import React from 'react'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
export const Hero = () => {
    return (
        <section className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Nidhi</h1>
            <p className={styles.description}>
            I am a pre-final year B.Tech Computer Science student specializing in AI/ML. I thrive on solving complex problems and continuously expanding my knowledge. With a strong foundation in AI/ML and a flexible mindset, I am eager to apply my skills to develop innovative solutions and contribute to impactful projects in technology.
  
            </p>
            <a href="mailto:bajajnidhi213@gmail.com" className={styles.contactBtn}>
              Contact Me
            </a>
          </div>
          <img
            src={getImageUrl("hero/Nidhi.jpeg")}
            alt="Hero image of me"
            className={styles.heroImg}
          />
          <div className={styles.topBlur} />
          <div className={styles.bottomBlur} />
        </section>
      );
};


