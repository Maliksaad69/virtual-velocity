import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-950 focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-zinc-900 text-zinc-50 shadow-xs hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200",
        secondary:
          "border-transparent bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700",
        destructive:
          "border-transparent bg-red-500 text-zinc-50 shadow-xs hover:bg-red-600 dark:bg-red-900 dark:text-zinc-50 dark:hover:bg-red-800",
        outline: "text-zinc-950 dark:text-zinc-50 border-zinc-200 dark:border-zinc-800",
        emerald:
          "border-emerald-500/30 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-500/40 font-bold",
        amber:
          "border-amber-500/30 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
