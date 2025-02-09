import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Divyaa Varshini</h1>
        <p className={styles.description}>
          I'm a software developer with experience using React and
          ui/ux. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:varshinidivyaa@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src="assets/hero/heroimage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};