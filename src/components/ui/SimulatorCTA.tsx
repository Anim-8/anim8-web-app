// src/components/ui/SimulatorCTA.tsx
import React, { forwardRef, useEffect, useMemo, useState } from "react";

type Variant = "glow" | "metallic" | "solid";
type Size = "sm" | "md" | "lg";

export type SimulatorCTAProps = {
  label: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  icon?: React.ReactNode;
  ariaLabel?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  /** Optional analytics hook */
  onView?: () => void;
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setReduced(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

const SIZE_CLASSES: Record<Size, { pad: string; text: string; icon: string }> = {
  sm: { pad: "px-4 py-2", text: "text-xs", icon: "h-3.5 w-3.5" },
  md: { pad: "px-5 py-2.5", text: "text-sm", icon: "h-4 w-4" },
  lg: { pad: "px-6 py-3", text: "text-base", icon: "h-5 w-5" },
};

const SimulatorCTA = forwardRef<HTMLAnchorElement | HTMLButtonElement, SimulatorCTAProps>(
  (
    {
      label,
      href,
      onClick,
      icon,
      ariaLabel,
      variant = "glow",
      size = "md",
      className,
      target,
      rel,
      onView,
    },
    ref
  ) => {
    const reduced = usePrefersReducedMotion();

    // Fire a lightweight "view" callback once mounted (for analytics)
    useEffect(() => {
      onView?.();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const asLink = Boolean(href);
    const safeRel = useMemo(() => {
      if (target === "_blank") {
        return rel ? rel : "noopener noreferrer";
      }
      return rel;
    }, [rel, target]);

    const base =
      "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide " +
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-black " +
      "disabled:opacity-60 disabled:pointer-events-none " +
      "transition-[box-shadow,transform,background,opacity] duration-300";

    const { pad, text, icon: iconSize } = SIZE_CLASSES[size];

    const variantClasses: Record<Variant, string> = {
      glow: cx(
        "text-white",
        "bg-[radial-gradient(120%_120%_at_50%_0%,rgba(34,211,238,0.20)_0%,rgba(14,165,233,0.08)_40%,rgba(2,6,23,0.6)_100%)]",
        "border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_10px_30px_-10px_rgba(14,165,233,0.45)]",
        "hover:shadow-[0_0_0_1px_rgba(34,211,238,0.35),0_14px_40px_-8px_rgba(34,211,238,0.65)]",
        !reduced && "hover:scale-[1.03] active:scale-[0.99]"
      ),
      metallic: cx(
        "text-white",
        // Subtle steel gradient with thin inner stroke
        "bg-[linear-gradient(135deg,#1f2937_0%,#0b1220_55%,#1f2937_100%)]",
        "border border-white/12",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_8px_24px_-8px_rgba(59,130,246,0.35)]",
        "hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_36px_-10px_rgba(59,130,246,0.55)]",
        !reduced && "hover:scale-[1.02] active:scale-[0.99]"
      ),
      solid: cx(
        "text-black bg-white",
        "border border-white/80",
        "shadow-[0_6px_16px_-6px_rgba(255,255,255,0.35)]",
        "hover:shadow-[0_10px_30px_-8px_rgba(255,255,255,0.55)]",
        !reduced && "hover:scale-[1.02] active:scale-[0.99]"
      ),
    };

    // Sheen element (disabled on reduced motion)
    const Sheen = () =>
      reduced ? null : (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <span
            className={cx(
              "absolute -inset-y-8 -left-20 w-1/3 rotate-12 opacity-0",
              "bg-gradient-to-r from-transparent via-white/40 to-transparent",
              "animate-[sheen_2.6s_ease-in-out_infinite]"
            )}
          />
        </span>
      );

    // Soft outer glow ring for the glow variant (reduced-motion friendly)
    const OuterRing = () =>
      variant !== "glow" || reduced ? null : (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-full blur-md"
          style={{
            background:
              "radial-gradient(120% 120% at 50% 0%, rgba(34,211,238,0.18) 0%, rgba(14,165,233,0.10) 40%, transparent 70%)",
            maskImage:
              "radial-gradient(120% 120% at 50% 50%, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.0) 70%)",
          }}
        />
      );

    const content = (
      <>
        {/* Local CSS for sheen keyframes (self-contained) */}
        <style>{`
          @keyframes sheen {
            0% { transform: translateX(0); opacity: 0; }
            10% { opacity: 0.65; }
            50% { transform: translateX(220%); opacity: 0.0; }
            100% { transform: translateX(220%); opacity: 0; }
          }
        `}</style>

        <OuterRing />
        <Sheen />

        {/* inner border highlight */}
        <span
          aria-hidden="true"
          className={cx(
            "absolute inset-0 rounded-full",
            "ring-1 ring-inset ring-white/10",
            variant === "solid" && "ring-black/10"
          )}
        />

        {/* Button content */}
        <span
          className={cx(
            "relative z-[1] flex items-center gap-2",
            text,
            // cap/mono feel similar to Augment's vibe
            "uppercase tracking-[0.08em]",
            variant === "solid" ? "text-black" : "text-white"
          )}
        >
          {icon && (
            <span
              className={cx(
                "flex items-center justify-center",
                iconSize,
                variant === "solid" ? "text-black/80" : "text-white/80"
              )}
              aria-hidden="true"
            >
              {icon}
            </span>
          )}
          <span>{label}</span>
          {/* arrow */}
          <svg
            aria-hidden="true"
            className={cx(iconSize, "shrink-0", variant === "solid" ? "text-black/80" : "text-white/80")}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12h12m0 0-4-4m4 4-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </>
    );

    if (asLink) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={safeRel}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          aria-label={ariaLabel || label}
          className={cx(base, variantClasses[variant], pad, className)}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        aria-label={ariaLabel || label}
        className={cx(base, variantClasses[variant], pad, className)}
      >
        {content}
      </button>
    );
  }
);

SimulatorCTA.displayName = "SimulatorCTA";

export default SimulatorCTA;
