import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./componentes/NavBar";
//Explicar isso
const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: "Achados & perdiso -IFMA Monte Castelo	",
  description: "Sistema web para regirstro e localizaçao de objetos perdidos no ifma",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
     <NavBar/>
    <main className="bg-slate-700 h-screen p-16">{children}</main>
      </body>
    </html>
  );
}