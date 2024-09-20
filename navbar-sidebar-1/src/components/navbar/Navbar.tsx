"use client";
import React from 'react';
import styles from "./Navbar.module.scss";

type Props = {}

const Navbar = (props: Props) => {
  
  return (
    <>
      <header className={styles.navbar}>
        <h1>Navbar</h1>
      </header>
    </>
  )
}

export default Navbar;