import Link from "next/link";
import styles from "./page.module.scss";
import React from "react";

function HomeFramework() {
  return (
    <div className={styles.page}>
      <h1>Hello World</h1>
      <Link className={styles.link} href="./insert">Insert</Link>
    </div>
  );
};

export default HomeFramework;