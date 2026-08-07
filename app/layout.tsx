
import type { Metadata } from "next";
import "./globals.css";

export const metadata:Metadata = {
  title : "Planora",
   description: "Professional task tracker built using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}