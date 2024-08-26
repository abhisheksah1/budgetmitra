"use client";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import { Eye, EyeOff } from "lucide-react"; // Import Eye and EyeOff icons from lucide-react

export default function SignupForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="max-w-lg w-full mx-auto rounded-lg p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl md:text-2xl text-neutral-800 dark:text-neutral-200">
        Welcome to Budget{" "}
        <span className="text-blue-500 border-2 px-2 rounded-lg bg-blue-100">
          Mitra
        </span>
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Login to Budget Mitra if you can because we don&apos;t have a login flow
        yet
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Username</Label>
            <Input id="lastname" placeholder="someone11" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="someone@gmail.com" type="email" />
        </LabelInputContainer>
        <PasswordInputContainer className="mb-4" id="password" placeholder="••••••••" />
        <PasswordInputContainer className="mb-8" id="twitterpassword" placeholder="••••••••" />

        <button
          className="bg-gradient-to-br from-blue-500 dark:from-blue-900 dark:to-blue-900 to-neutral-600 block dark:bg-blue-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] relative group/btn"
          type="submit"
        >
          Sign up &rarr;
          <BottomGradient />
        </button>

        <div className="flex justify-between items-center mt-5">
          <span className="text-sm">Already registered?</span>
          <span className="text-sm text-blue-500 cursor-pointer">Sign In</span>
        </div>
      </form>
    </div>
  );
}

const PasswordInputContainer = ({ id, placeholder, className }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <LabelInputContainer className={className}>
      <Label htmlFor={id}>{id === "password" ? "Password" : "Confirm password"}</Label>
      <div className="relative">
        <Input
          id={id}
          placeholder={placeholder}
          type={showPassword ? "text" : "password"}
          className="pr-10" // Add padding to the right to accommodate the eye icon
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 flex items-center"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      </div>
    </LabelInputContainer>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
