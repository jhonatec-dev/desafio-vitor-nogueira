import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio Front End | Jhonatec",
  description: "Desafio de NextJS/TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Image
          src='/assets/images/code.png'
          alt='Logo'
          width={100}
          height={100}
          className='absolute bottom-5 left-10 hidden md:block'
        />
        {children}
      </body>
    </html>
  );
}
