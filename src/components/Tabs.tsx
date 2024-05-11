"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useState } from "react";

function Tab({
  label,
  selected,
  setSelected,
}: {
  label: string;
  selected: boolean;
  setSelected: (label: string) => void;
}) {
  return (
    <button
      onClick={() => {
        setSelected(label);
      }}
      className={`${
        selected ? "text-white" : "text-gray-500 hover:text-gray-900"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{label}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-red-500"
        ></motion.span>
      )}
    </button>
  );
}

export default function Tabs({
  className,
  tabs,
  onChange,
}: {
  className?: string;
  tabs: string[];
  onChange?: (tab: string) => void;
}) {
  const [selected, setSelected] = useState<string>(tabs[0]);
  const handleChange = (tab: string) => {
    onChange?.(tab);
    setSelected(tab);
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-2 w-fit", className)}>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          label={tab}
          selected={tab === selected}
          setSelected={handleChange}
        />
      ))}
    </div>
  );
}
