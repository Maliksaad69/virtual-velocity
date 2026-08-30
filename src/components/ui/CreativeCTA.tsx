"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";

interface CreativeCTAProps {
  text: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  variant?: "electric" | "glass" | "light";
  fullWidth?: boolean;
  className?: string;
}

export const CreativeCTA: React.FC<CreativeCTAProps> = ({
  text,
  href,
  onClick,
  type = "button",
  icon = <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />,
  variant = "electric",
  fullWidth = false,
  className = "",
}) => {
  const baseStyles =
    "relative inline-flex items-center justify-center gap-3 px-9 py-5 rounded-full font-outfit font-extrabold text-sm sm:text-base tracking-wider uppercase select-none transition-all duration-500 overflow-hidden group cursor-pointer";

  let variantStyles = "";
  if (variant === "electric") {
    variantStyles =
      "bg-[#00f0ff] text-black hover:bg-white shadow-[0_0_35px_rgba(0,240,255,0.4)] hover:shadow-[0_0_50px_rgba(0,240,255,0.7)] border border-[#00f0ff]";
  } else if (variant === "glass") {
    variantStyles =
      "bg-surface/90 text-white border border-white/20 hover:border-[#00f0ff] hover:text-[#00f0ff] backdrop-blur-xl shadow-xl";
  } else {
    variantStyles =
      "bg-white text-black hover:bg-[#00f0ff] hover:text-black shadow-2xl";
  }

  const content = (
    <>
      {/* Animated Light Shimmer Beam */}
      <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

      {/* Subtle Pulsing Neon Border Ring */}
      <span className="absolute inset-0 rounded-full border border-white/30 group-hover:border-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Button Label & Icon */}
      <span className="relative z-10 flex items-center gap-2.5 font-extrabold tracking-wider">
        <Sparkles className="w-4 h-4 opacity-75 group-hover:opacity-100 group-hover:rotate-12 transition-all text-current" />
        <span>{text}</span>
      </span>

      <span className="relative z-10 p-1.5 rounded-full bg-black/10 group-hover:bg-black/20 transition-colors">
        {icon}
      </span>
    </>
  );

  if (href) {
    return (
      <Magnetic strength={0.35} className={fullWidth ? "w-full" : ""}>
        <Link
          href={href}
          className={`${baseStyles} ${variantStyles} ${fullWidth ? "w-full" : ""} ${className}`}
          data-cursor-pointer
        >
          {content}
        </Link>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.35} className={fullWidth ? "w-full" : ""}>
      <button
        type={type}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles} ${fullWidth ? "w-full" : ""} ${className}`}
        data-cursor-pointer
      >
        {content}
      </button>
    </Magnetic>
  );
};
