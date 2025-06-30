import type { Metadata } from "next";
import "./globals.css";
import inter from "./lib/fonts";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Legala AI",
  description: "Your AI-Powered Legal Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
