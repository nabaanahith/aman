import type { Metadata } from "next";
import "./globals.css";
import { elMessiri } from "./styles/fonts";
import { almarai } from "./styles/fonts";




export const metadata: Metadata = {
  title: "أمان - ملجأ للحيوانات",
  description: "شارك في بناء أمان... أول دار إنقاذ ورعاية دائمة للحيوانات",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className={almarai.className}>
      <body className={` ${elMessiri.className}`} >{children}</body>
    </html>
  );
}
