import React, { useId, useState } from "react";

type Side = "top" | "bottom" | "left" | "right";

export default function Tooltip({
  content,
  children,
  side = "top",
  className = "",
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: Side;
  className?: string;
}) {
  const id = useId();
  const [open, setOpen] = useState(false);

  // positions
  const pos =
    side === "top"
      ? "bottom-full mb-2 left-1/2 -translate-x-1/2"
      : side === "bottom"
      ? "top-full mt-2 left-1/2 -translate-x-1/2"
      : side === "left"
      ? "right-full mr-2 top-1/2 -translate-y-1/2"
      : "left-full ml-2 top-1/2 -translate-y-1/2";

  return (
    <span
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {/* make trigger focusable for keyboard users */}
      <span tabIndex={0} aria-describedby={id} className="inline-flex items-center">
        {children}
      </span>

      {open && (
        <div
          id={id}
          role="tooltip"
          className={`absolute ${pos} z-50 max-w-xs rounded-md border border-white/10 bg-[#0b1220] px-3 py-2 text-xs text-gray-200 shadow-lg`}
        >
          {content}
          {/* small arrow */}
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
