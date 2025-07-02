import React from "react";

export default function Background({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="absolute top-0 left-0 h-80 w-80 rounded-full bg-indigo-600 blur-[1000px]"></div>

      <div className="absolute top-1/2 left-0 -mt-70 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
      <div className="absolute top-1/2 left-0 -mt-50 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
      <div className="absolute top-1/2 left-0 mt-50 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
      <div className="absolute top-1/2 left-0 mt-70 h-px w-full bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>

      {children}

      <div className="absolute top-0 left-1/2 -ml-80 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
      <div className="absolute top-0 left-1/2 -ml-60 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
      <div className="absolute top-0 left-1/2 ml-60 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
      <div className="absolute top-0 left-1/2 ml-80 h-dvh w-px bg-gradient-to-tr from-indigo-950/0 via-indigo-500/40 to-indigo-950/0"></div>
    </div>
  );
}
