import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/navbar/Navbar";
import ContextWrapper from "./ContextWrapper";
import NavigationProvider from "@/store/NavigationProvider";
import Sidebar from "@/components/sidebar/Sidebar";

export const metadata: Metadata = {
  title: "Navigation",
  description: "Navigation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavigationProvider>
      <ContextWrapper>
        <body>
          <header>
            <Navbar/>
            <Sidebar/>
            {children}
          </header>
        </body>
      </ContextWrapper>
    </NavigationProvider>
  );
}
