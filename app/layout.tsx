import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latte Talk",
  description:
    "A real-time chat app built using TypeScript, Tailwind CSS, and Socket.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-theme="coffee" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
