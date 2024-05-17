"use client";

import Trash from "@/components/icons/trash";
import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { HTMLProps } from "react";

export default function TrashButton({
  className,
  ...props
}: {
  className?: string;
  onClick: HTMLProps<HTMLButtonElement>["onClick"];
  tabIndex?: number;
}) {
  return (
    <motion.button
      type="button"
      className={cn(
        "text-red-400 m-auto aspect-square p-0.5 rounded-md border-2 border-transparent focus-visible:outline-none  focus-visible:border-blue-300/50",
        className
      )}
      initial={{
        scale: 1,
        color: "#737373",
        rotate: "0deg",
      }}
      whileHover={{
        scale: 1.15,
        color: "#f87171",
        rotate: ["0deg", "3deg", "0deg", "-3deg", "0deg"],
      }}
      whileTap={{
        scale: 0.95,
      }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 300,
        rotate: {
          repeat: Infinity,
          duration: 0.5,
          type: "keyframes",
        },
        color: {
          type: "tween",
        },
      }}
      {...props}
    >
      <Trash width={20} height={20} />
    </motion.button>
  );
}
