"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function HoverBorderGradientDemo(name) {
  return (
    <div className="m-40 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="bg-black   border-2 border-cyan-600 text-white flex items-center space-x-2"
      >
        <AceternityLogo />
        <span>{name} </span>
      </HoverBorderGradient>
    </div>
  );
}
