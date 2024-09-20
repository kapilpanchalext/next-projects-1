"use client"
import NavbarContext from "@/store/NavbarContext";
import { useContext } from "react";

export default function Home() {
  const { toggleSidebar } = useContext(NavbarContext);
  return (
    <>
      <button onClick={toggleSidebar}>Change Theme</button>
    </>
  );
}
