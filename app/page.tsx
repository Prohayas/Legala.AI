"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
];
export default function Home() {
  const [nav, setNav] = useState("home");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center justify-between w-full max-w-4xl">
        <nav className="flex w-full justify-center gap-x-28 uppercase text-md text-white">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setNav(item.label.toLowerCase())}
              className={`hover:underline ${
                nav === item.label.toLowerCase()
                  ? "text-blue-custom font-semibold"
                  : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main className="flex justify-start mt-6 flex-col row-start-2 items-center h-screen w-full">
        <section id="home">
          <div className="flex mx-auto w-[30rem] md:w-[35rem] items-center justify-center gap-7 ">
            <hr className="h-1 w-full rounded-xl bg-line-gradient" />
            <h3 className="text-white text-lg tracking-wider">Waitlist</h3>
            <hr className="h-1  w-full  rounded-xl bg-line-gradient-reverse" />
          </div>
          <div className="text-white mt-16 text-center">
            <h1 className="uppercase font-koulen tracking-widest font-bold text-8xl">
              <span className="bg-gradient-to-r from-[#4749E7] to-[#CACBE5] bg-clip-text text-transparent">
                lexora ai
              </span>{" "}
              <br /> empowering your <br /> legal journey
            </h1>
            <p className="mt-8 font-light text-2xl">
              Lexora AI Delivers Personalized Learning, AI-Powered <br />{" "}
              Inisghts, and Fun Gamified Challenges. Join the Waitlist!
            </p>
          </div>

          <div className="flex mt-10 max-w-[30rem] md:max-w-[39rem] mx-auto items-center rounded-md bg-[#1A1A1A] p-1 ring-1 ring-[#2e2e2e]">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent px-4  placeholder-gray-500 focus:outline-none"
            />
            <button className="whitespace-nowrap cursor-pointer rounded-md bg-[#4749E7] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition">
              Join Waitlist →
            </button>
          </div>
        </section>

        <section
          id="roadmap"
          className="max-w-4xl mx-auto px-6 py-26 text-white"
        >
          <h2 className="text-4xl font-bold mb-4">MVP ROADMAP</h2>
          <p className=" mb-8">
            This roadmap outlines the key phases for bringing our app to life,
            from initial development to public release.
          </p>

          <div className="mb-8">
            <h3 className="font-semibold text-lg">
              Phase 1: Core Development{" "}
              <span className="text-sm">(Months 1–4)</span>
            </h3>
            <p className=" ml-4">
              • Focus: Building the foundational features and core
              functionalities of the app.
            </p>
            <p className=" ml-4">• Activities:</p>
            <ul className="list-disc ml-10">
              <li>Backend infrastructure setup</li>
              <li>UI/UX Design and Mobile App Development</li>
              <li>Initial feature development and internal testing</li>
              <li>AI Integration</li>
              <li>Gathering of Resources</li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-lg">
              Phase 2: Iteration & Public Alpha Testing{" "}
              <span className="text-sm">(Months 5–6)</span>
            </h3>
            <p className=" ml-4">
              • Focus: Refining the app based on early feedback and identifying
              critical bugs.
            </p>
            <p className=" ml-4">• Activities:</p>
            <ul className="list-disc ml-10">
              <li>Gathering feedback from a select group of alpha testers</li>
              <li>Implementing requested features and improvements</li>
              <li>Extensive bug fixing and performance optimization</li>
              <li>Further internal testing and quality assurance</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Phase 3: Competitions & Seed Funding{" "}
              <span className="text-sm">(Months 7+)</span>
            </h3>
            <p className=" ml-4">
              • Focus: Gaining recognition, securing initial investment, and
              expanding our network.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
