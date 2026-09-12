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
    "relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-outfit font-extrabold text-xs sm:text-sm tracking-wider uppercase select-none transition-all duration-200 overflow-hidden group cursor-pointer active:scale-[0.98]";

  let variantStyles = "";
  if (variant === "electric") {
    variantStyles =
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-lg hover:shadow-emerald-600/25 border border-emerald-600";
  } else if (variant === "glass") {
    variantStyles =
      "bg-white text-zinc-950 border border-zinc-300 hover:border-emerald-600 hover:text-emerald-600 shadow-sm";
  } else {
    variantStyles =
      "bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 shadow-sm";
  }

  const content = (
    <>
      {/* Animated Light Shimmer Beam */}
      <span className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-25deg] group-hover:animate-shimmer" />

      {/* Subtle Border Ring */}
      <span className="absolute inset-0 rounded-xl border border-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Button Label & Icon */}
      <span className="relative z-10 flex items-center gap-2.5 font-extrabold tracking-wider">
        <Sparkles className="w-4 h-4 opacity-75 group-hover:opacity-100 group-hover:rotate-12 transition-all text-current" />
        <span>{text}</span>
      </span>

      <span className="relative z-10 p-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors">
        {icon}
      </span>
    </>
  );

  if (href) {
    return (
      <Magnetic strength={0.05} className={fullWidth ? "w-full" : ""}>
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
    <Magnetic strength={0.05} className={fullWidth ? "w-full" : ""}>
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
