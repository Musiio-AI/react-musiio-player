import React from "react";

import styles from "./index.module.css";

const About = () => (
  <div className={styles.container}>
    <div className={styles.header}>React Musiio Player</div>
    <input
      className={styles.input}
      readOnly={true}
      value="npm install react-musiio-player"
    />
    <div className={styles.text}>
      Musiio player is a react component that let's you play both Youtube and
      audio links without writing a lot of code or separating your music catalog
    </div>
  </div>
);

export default About;
