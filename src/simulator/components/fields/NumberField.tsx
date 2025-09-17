// src/simulator/components/fields/NumberField.tsx
import React from "react";
import Tooltip from "../../../components/ui/Tooltip";
import { HelpCircle } from "lucide-react";

type Size = "sm" | "md" | "lg";

type Props = {
  label: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  helpText?: string;
  tooltip?: React.ReactNode;
  size?: Size;
};

const SIZE_MAP: Record<Size, { input: string; label: string; icon: string }> = {
  sm: { input: "px-3 py-2 text-sm h-9",  label: "text-xs",  icon: "h-3.5 w-3.5" },
  md: { input: "px-3.5 py-2.5 text-sm h-10", label: "text-xs",  icon: "h-4 w-4" },
  lg: { input: "px-4 py-3 text-base h-12",   label: "text-sm",  icon: "h-4.5 w-4.5" as any },
};

export default function NumberField({
  label, value, onChange, step = 1, min, max, placeholder,
  className, disabled, helpText, tooltip, size = "md",
}: Props) {
  const clamp = (x: number) => {
    let y = x;
    if (typeof min === "number") y = Math.max(min, y);
    if (typeof max === "number") y = Math.min(max, y);
    return y;
  };
  const sz = SIZE_MAP[size];

  return (
    <div className={className}>
      <div className="flex items-center gap-1">
        <label className={`block ${sz.label} text-gray-400 mb-1`}>{label}</label>
        {tooltip && (
          <Tooltip content={tooltip} side="top">
            <HelpCircle
              className={`${sz.icon} mb-1 text-cyan-300 hover:text-cyan-200 transition-colors
                          drop-shadow-[0_0_6px_rgba(34,211,238,0.55)]`}
            />
          </Tooltip>
        )}
      </div>

      <input
        type="number"
        step={step}
        min={min}
        max={max}
        disabled={disabled}
        value={Number.isFinite(value) ? value : 0}
        placeholder={placeholder}
        onChange={(e) => onChange(Number(e.target.value))}
        onBlur={(e) => onChange(clamp(Number(e.target.value)))}
        className={`w-full bg-black/40 border border-white/10 rounded-md
                    text-white placeholder:text-gray-500 disabled:opacity-60 ${sz.input}`}
      />
      {helpText && <p className="mt-1 text-[11px] text-gray-400">{helpText}</p>}
    </div>
  );
}
