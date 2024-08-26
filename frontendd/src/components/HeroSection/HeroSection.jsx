"use client";
import SignUp from "../Signup/Signup";
import { TypewriterEffectSmooth } from "../ui/typewriter";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Take",
    },
    {
      text: "Charge",
    },
    {
      text: "Of",
    },

    {
      text: "Your",
    },
    {
      text: "Personal",
    },
    {
      text: "Finance",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center   ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Budget better, save more, and achieve your financial goals with ease.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <SignUp />
      </div>
    </div>
  );
}
