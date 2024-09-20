"use client";
import NavbarContext from '@/store/NavbarContext';
import React, { ReactNode, useContext } from 'react';

type Props = {
  children: ReactNode;
}

const ContextWrapper = ({children}: Props) => {
  const { isDisplaySidebar } = useContext(NavbarContext);

  return (
    <>
      <html lang="en" className={`${isDisplaySidebar ? "light" : "dark"}`}>
        {children}
      </html>
    </>
  )
}

export default ContextWrapper;