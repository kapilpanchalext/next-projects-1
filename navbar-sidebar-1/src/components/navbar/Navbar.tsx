"use client";
import React from 'react';
import styles from "./Navbar.module.scss";
import Link from 'next/link';

type Props = {}

const Navbar = (props: Props) => {
  
  return (
    <>
      <div className={styles.backdrop}></div>
      <header className={styles.navbar}>
        <span className={`material-symbols-outlined ${styles['menu-icon']}`}>menu</span>
        <h1>Navbar</h1>
        <nav className={styles.navbar__links}>
          <Link href="/">Home</Link>
          <Link href="/">Insert</Link>
          <Link href="/">Design</Link>
          <Link href="/">Layout</Link>
          <Link href="/">References</Link>
          <Link href="/">Mailings</Link>
          <Link href="/">Review</Link>
          <Link href="/">View</Link>
        </nav>
      </header>
    </>
  )
}

export default Navbar;