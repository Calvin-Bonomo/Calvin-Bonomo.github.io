import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import { GoogleTagManager } from '@next/third-parties/google'

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
    <GoogleTagManager gtmId="G-8T0S94SWZY" />
      <body className={`${ubuntu.className} m-0`}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
