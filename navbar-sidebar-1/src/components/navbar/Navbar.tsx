"use client";
import React, { useContext, useEffect, useState } from 'react';
import styles from "./Navbar.module.scss";
import Link from 'next/link';
import NavigationContext from '@/store/NavigationContext';

type Props = {}

const Navbar = (props: Props) => {
  const { isTheme, toggleTheme, toggleSidebar } = useContext(NavigationContext);
  const [ isNavbarExtended, setIsNavbarExtended ] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 769 && isNavbarExtended) {
        setIsNavbarExtended(false);
      }
    };

    if (window.innerWidth > 769 && isNavbarExtended) {
      setIsNavbarExtended(false);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNavbarExtended]);

  const toggleIconHandler = () => {
    if (isTheme) {
      return <span className={`material-symbols-outlined`}>dark_mode</span>
    } else {
      return <span className={`material-symbols-outlined`}>light_mode</span>
    }
  }

  const openLinksMenuHandler = () => {
    setIsNavbarExtended((prevResult) => !prevResult);
  }

  return (
    <>
      <div className={styles.backdrop}></div>
      <header className={`${styles['navbar']} ${isNavbarExtended ? styles['navbar__extended'] : ''}`}>
        <button className={`${styles['sidebar-button']}`} onClick={toggleSidebar}><span className={`material-symbols-outlined`}>menu</span></button>
        <div className={styles['navbar__title']}>
          <Link href="/"><h1>Navbar</h1></Link>
        </div>
        
        <nav className={styles['navbar__links']}>
          <Link href="/">Home</Link>
          <Link href="/">Insert</Link>
          <Link href="/">Design</Link>
          <Link href="/">Layout</Link>
          <Link href="/">References</Link>
          <Link href="/">Mailings</Link>
          <Link href="/">Review</Link>
          <Link href="/">View</Link>
        </nav>
        <button className={styles['theme-button']} onClick={toggleTheme}>{toggleIconHandler()}</button>
        <button className={`${styles['menu-button']}`} onClick={openLinksMenuHandler}><span className={`material-symbols-outlined`}>menu</span></button>
      </header>
    </>
  )
}

export default Navbar;