import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "HelloWorld Framework 2",
  description: "HelloWorld Framework 2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
