// src/components/ui/Tooltip.tsx
import React, { useId, useState } from "react";

type Side = "top" | "bottom" | "left" | "right";
type Size = "sm" | "md" | "lg";
type Align = "center" | "start" | "end";

const SIZE_CLS: Record<Size, string> = {
  sm: "text-[11px] px-2.5 py-1.5 max-w-lg",
  md: "text-xs px-3 py-2 max-w-lg",
  lg: "text-sm px-3.5 py-2.5 max-w-xl",
};

function pos(side: Side, align: Align) {
  const a =
    align === "start" ? "left-2" :
    align === "end"   ? "right-2" :
                        "left-1/2 -translate-x-1/2";
  if (side === "top")    return `bottom-full mb-2 ${a}`;
  if (side === "bottom") return `top-full mt-2 ${a}`;
  if (side === "left")   return `right-full mr-2 top-1/2 -translate-y-1/2`;
  return `left-full ml-2 top-1/2 -translate-y-1/2`;
}

export default function Tooltip({
  content,
  children,
  side = "top",
  align = "center",
  size = "md",
  className = "",
  contentClassName = "",  // NEW
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: Side;
  align?: Align;
  size?: Size;
  className?: string;
  contentClassName?: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      <span tabIndex={0} aria-describedby={id} className="inline-flex items-center">
        {children}
      </span>

      {open && (
        <div
          id={id}
          role="tooltip"
          className={`absolute ${pos(side, align)} z-50 rounded-md border border-white/10
                      bg-[#0b1220] shadow-lg whitespace-normal break-words
                      ${SIZE_CLS[size]} ${contentClassName}`}
        >
          {content}
          <span
            className={`absolute block h-2 w-2 rotate-45 border border-white/10 bg-[#0b1220] ${
              side === "top"
                ? "left-1/2 -translate-x-1/2 -bottom-1"
                : side === "bottom"
                ? "left-1/2 -translate-x-1/2 -top-1"
                : side === "left"
                ? "-right-1 top-1/2 -translate-y-1/2"
                : "-left-1 top-1/2 -translate-y-1/2"
            }`}
            aria-hidden="true"
          />
        </div>
      )}
    </span>
  );
}
