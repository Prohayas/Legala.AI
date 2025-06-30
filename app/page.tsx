"use client";

import { useActionState } from "react";
import Form from "next/form";
import { createWaitlist } from "@/app/actions/submitWaitlist";

interface FormState {
  message: string;
  status: "idle" | "success" | "error";
}

const initialState: FormState = {
  message: "",
  status: "idle",
};

export default function Home() {
  const [state, formAction] = useActionState(createWaitlist, initialState);

  return (
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
              legala ai
            </span>{" "}
            <br /> empowering your <br /> legal journey
          </h1>
          <p className="mt-8 font-light text-2xl">
            Legala AI Delivers Personalized Learning, AI-Powered <br />{" "}
            Inisghts, and Fun Gamified Challenges. Join the Waitlist!
          </p>
        </div>

        <div className="relative flex flex-col gap-y-2 mt-10 max-w-[30rem] md:max-w-[39rem]  mx-auto">
          <div
            className="bg-gradient-to-r from-[#131318] via-[#313381] to-[#131318] 
            w-[24rem] -z-50 absolute h-8  rounded-full -top-5 right-10 md:right-[8rem] opacity-20"
          ></div>
          <Form
            action={formAction}
            className="flex items-center rounded-md bg-[#1A1A1A] p-1 ring-1 ring-[#2e2e2e]"
          >
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent px-4  placeholder-gray-500 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="whitespace-nowrap cursor-pointer rounded-md bg-[#4749E7] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition"
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
      </section>
    </main>
  );
}
