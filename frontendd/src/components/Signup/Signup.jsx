"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "../ui/animated-modal";

import SignUpForm from "./SignUpFrom";

export default function SignUp() {
  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Sign Up
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <SignUpForm />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
