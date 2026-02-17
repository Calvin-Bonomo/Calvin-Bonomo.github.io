import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";

export const metadata: Metadata = {
  title: "Calvin Bonomo",
  description: "Calvin Bonomo's personal website",
};

const ubuntu = Ubuntu({
    weight: ['400', '700']
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} m-0`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
