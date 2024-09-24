"use client"
import React, { useContext } from 'react';
import styles from "./Sidebar.module.scss";
import NavigationContext from '@/store/NavigationContext';
import Link from 'next/link';

type Props = {}

const Sidebar = (props: Props) => {
  const { isSideBarExpanded } = useContext(NavigationContext);

  return (
    isSideBarExpanded ? (
    <aside className={styles.sidebar}>
      <nav className={styles['sidebar__links']}>
        <Link href="/">Info</Link>
        <Link href="/">New</Link>
        <Link href="/">Open</Link>
        <Link href="/">Save</Link>
        <Link href="/">SaveAs</Link>
        <Link href="/">Print</Link>
        <Link href="/">Share</Link>
        <Link href="/">Export</Link>
        <Link href="/">Close</Link>
      </nav>
    </aside>) 
    : 
    (<></>)
  )
}

export default Sidebar;