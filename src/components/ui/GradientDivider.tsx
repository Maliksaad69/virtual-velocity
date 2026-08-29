"use client";

/* ─── Seamless gradient dividers for dark → light section transitions ─── */

interface GradientDividerProps {
  /** Color of the top section (e.g. "#050507", "#08080a") */
  fromColor?: string;
  /** Color of the bottom section (e.g. "#ffffff", "#f8f9fa") */
  toColor?: string;
  /** Height in rem — default 10rem for a long, smooth fade */
  heightRem?: number;
}

export const GradientDivider = ({
  fromColor = "#050507",
  toColor = "#ffffff",
  heightRem = 8,
}: GradientDividerProps) => (
  <div
    className="w-full pointer-events-none select-none"
    style={{
      height: `${heightRem}rem`,
      background: `linear-gradient(to bottom, ${fromColor} 0%, ${fromColor} 5%, ${toColor} 95%, ${toColor} 100%)`,
    }}
  />
);