import React from "react";
import Tooltip from "../../../components/ui/Tooltip";
import { HelpCircle } from "lucide-react";

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
  tooltip?: React.ReactNode; // NEW
};

export default function NumberField({
  label, value, onChange, step = 1, min, max, placeholder,
  className, disabled, helpText, tooltip,
}: Props) {
  const clamp = (x: number) => {
    let y = x;
    if (typeof min === "number") y = Math.max(min, y);
    if (typeof max === "number") y = Math.min(max, y);
    return y;
  };

  return (
    <div className={className}>
      <div className="flex items-center gap-1">
        <label className="block text-xs text-gray-400 mb-1">{label}</label>
        {tooltip && (
          <Tooltip content={tooltip} side="top">
            <HelpCircle className="mb-1 h-3.5 w-3.5 text-gray-400 hover:text-cyan-300" />
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
        className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-gray-500 disabled:opacity-60"
      />
      {helpText && <p className="mt-1 text-[11px] text-gray-400">{helpText}</p>}
    </div>
  );
}
