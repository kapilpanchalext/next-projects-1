"use client"
import React, { useContext } from 'react';
import styles from "./Sidebar.module.scss";
import NavigationContext from '@/store/NavigationContext';

type Props = {}

const Sidebar = (props: Props) => {
  const { isSideBarExpanded } = useContext(NavigationContext);
  
  return (
    isSideBarExpanded ? (<aside className={styles.sidebar}>Sidebar</aside>) : (<></>)
  )
}

export default Sidebar;