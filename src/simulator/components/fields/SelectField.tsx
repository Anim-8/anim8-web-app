import React from "react";

export type Option<T extends string = string> = { label: string; value: T };

type Props<T extends string = string> = {
  label: string;
  value: T;
  options: Option<T>[];
  onChange: (v: T) => void;
  className?: string;
};

export default function SelectField<T extends string>({
  label, value, options, onChange, className,
}: Props<T>) {
  return (
    <div className={className}>
      <label className="block text-xs text-gray-400 mb-1">{label}</label>
      <select
        className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}
