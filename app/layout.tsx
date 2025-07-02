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
    <html lang="en" className="h-dvh">
      <body
        className={`${inter.className} antialiased m-0 p-0 relative flex h-full flex-col w-full items-center justify-start bg-linear-to-r from-[#1E1E1E] to-[#0B0B0B]`}
      >
        <Navbar />

        <div className="absolute top-1/2 left-0 -mt-50 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>
        <div className="absolute top-1/2 left-0 -mt-70 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>

        <div className="absolute  inset-0 m-auto -z-50 size-[45rem] opacity-30 bg-[rgba(71,73,231,0.1)] rounded-full blur-3xl"></div>
        <div className="absolute size-2 bg-white rounded-full left-1/3 -ml-81 top-[14%]"></div>

        {/* left vertical lines */}
        <div className="absolute top-0 left-1/3 md:left-1/3 -ml-60 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>
        <div className="absolute top-0 left-1/3 md:left-1/3 -ml-80 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>

        {children}

        <div className="absolute top-[calc(5/9*100%)] left-0 mt-40 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>
        <div className="absolute top-[calc(5/9*100%)] left-0 mt-60 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>

        <div className="absolute size-1 bg-gray-600 rounded-full ml-60 left-[66.5556%] top-[14%]"></div>
        <div className="absolute size-2 bg-white rounded-full left-[66.4445%] ml-80 top-[24%]"></div>

        <div className="fixed bottom-[-8rem] left-[-8rem] opacity-30 -z-50 size-72 bg-[#4749E70D] rounded-full blur-2xl"></div>

        <div className="absolute size-2 bg-gray-600 rounded-full ml-60 left-[66.4446%] bottom-[13.1%]"></div>

        {/* right vertical lines */}
        <div className="absolute top-0 left-1/2 md:left-[calc(2/3*100%)] ml-60 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>
        <div className="absolute top-0 left-1/2 md:left-[calc(2/3*100%)] ml-80 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0 opacity-50"></div>
      </body>
    </html>
  );
}
