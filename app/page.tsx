"use client";

import { useActionState } from "react";
import Form from "next/form";
import { createWaitlist } from "@/app/actions/submitWaitlist";
import { PrismaFormStateTypes } from "./lib/types";

const initialState: PrismaFormStateTypes = {
  message: "",
  status: "idle",
};

export default function Home() {
  const [state, formAction] = useActionState(createWaitlist, initialState);

  return (
    <section className="flex flex-col mx-auto mt-5 items-center justify-center max-w-4xl text-center px-4">
      <div className="flex mx-auto w-1/2 items-center gap-x-5 justify-between">
        <hr className="h-1 w-full rounded-xl bg-line-gradient" />
        <h3 className="text-white text-lg tracking-wider ">Waitlist</h3>
        <hr className="h-1 w-full rounded-xl bg-line-gradient-reverse" />
      </div>

      <div className="text-white text-center mt-9">
        <h1 className="uppercase font-koulen tracking-widest font-bold text-6xl md:text-8xl">
          <span className="bg-gradient-to-r from-[#4749E7] to-[#CACBE5] bg-clip-text text-transparent">
            legala ai
          </span>{" "}
          <br /> empowering your <br /> legal journey
        </h1>
      </div>
      <div className="text-white max-w-sm md:max-w-[34rem] mx-auto">
        <p className="font-light text-xs md:text-xl">
          Legala AI Delivers Personalized Learning, AI-Powered <br /> Inisghts,
          and Fun Gamified Challenges. Join the <br /> Waitlist!
        </p>
      </div>
      <div className="relative w-[34rem] flex flex-col mt-5.5 md:p-3.5">
        <div
          className="bg-gradient-to-r from-[#131318] via-[#313381] to-[#131318] 
            w-[27rem] -z-10 absolute h-3 rounded-full top-0 blur-sm right-10 md:right-15 "
        ></div>
        <Form
          action={formAction}
          className="flex items-center rounded-md bg-[#1A1A1A] p-1 ring-1 ring-[#2e2e2e]"
        >
          <input
            type="email"
            autoComplete="off"
            name="email"
            placeholder="Email Address"
            className="flex-1 bg-transparent w-full px-4 text-sm md:text-base placeholder-gray-500 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="whitespace-nowrap cursor-pointer rounded-md bg-[#4749E7] px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-white hover:opacity-90 transition"
          >
            Join Waitlist →
          </button>
        </Form>
        {state.status === "success" && (
          <p className="text-green-600 font-bold">
            Your email has been waitlisted!
          </p>
        )}
        {state.status === "error" && (
          <p className="text-red-600 font-bold">Oh oh! Something went wrong.</p>
        )}
      </div>
      {/* <div className="flex h-dvh w-full items-center justify-center">
        
        <div className="text-white mt-16 text-center ">
          <h1 className="uppercase font-koulen tracking-widest font-bold text-6xl md:text-8xl">
            <span className="bg-gradient-to-r from-[#4749E7] to-[#CACBE5] bg-clip-text text-transparent">
              legala ai
            </span>{" "}
            <br /> empowering your <br /> legal journey
          </h1>
          <div className="mt-8 max-w-sm md:max-w-[34rem] mx-auto ">
            <p className="font-light text-sm md:text-xl">
              Legala AI Delivers Personalized Learning, AI-Powered <br />{" "}
              Inisghts, and Fun Gamified Challenges. Join the Waitlist!
            </p>

            <div className="relative flex flex-col gap-y-2 mt-5 md:mt-10 p-3 md:p-3.5">
              <div
                className="bg-gradient-to-r from-[#131318] via-[#313381] to-[#131318] 
            w-[19rem] -z-50 absolute h-8 rounded-full -top-3 right-10 md:right-[8rem] opacity-20"
              ></div>
              <Form
                action={formAction}
                className="flex items-center rounded-md bg-[#1A1A1A] p-1 ring-1 ring-[#2e2e2e]"
              >
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  placeholder="Email Address"
                  className="flex-1 bg-transparent px-4 text-sm md:text-base placeholder-gray-500 text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="whitespace-nowrap cursor-pointer rounded-md bg-[#4749E7] px-2 md:px-4 py-2 text-xs md:text-sm font-medium text-white hover:opacity-90 transition"
                >
                  Join Waitlist →
                </button>
              </Form>
              {state.status === "success" && (
                <p className="text-green-600 font-bold">
                  Your email has been waitlisted!
                </p>
              )}
              {state.status === "error" && (
                <p className="text-red-600 font-bold">
                  Oh oh! Something went wrong.
                </p>
              )}
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
