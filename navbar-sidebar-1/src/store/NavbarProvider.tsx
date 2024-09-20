"use client";
import React, { ReactNode, useState } from 'react'
import NavbarContext from './NavbarContext';

type Props = {
  children: ReactNode;
}

const NavbarProvider = ({children}: Props) => {
  const[isDisplaySidebarState, setIsDisplaySidebarState] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsDisplaySidebarState(!isDisplaySidebarState);
  }

  return (
    <NavbarContext.Provider value={{ isDisplaySidebar: isDisplaySidebarState, toggleSidebar }}>
      {children}
    </NavbarContext.Provider>
  )
}

export default NavbarProvider;