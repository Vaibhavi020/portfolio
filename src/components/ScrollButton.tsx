"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type ScrollButtonProps = {
  direction: "up" | "down";
  targetId: string;
};

export default function ScrollButton({
  direction,
  targetId,
}: ScrollButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const shouldShow =
        direction === "up"
          ? window.scrollY > 300
          : window.scrollY < window.innerHeight * 0.8;
      setVisible(shouldShow);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [direction]);

  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "fixed z-50 p-3 rounded-full text-white bg-primary shadow-lg transition-all duration-300 ease-in-out hover:scale-105",
        direction === "up"
          ? "bottom-6 right-6"
          : "bottom-6 left-1/2 -translate-x-1/2",
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label={`Scroll ${direction}`}
    >
      {direction === "up" ? (
        <ArrowUp className="w-5 h-5" />
      ) : (
        <ChevronDown className="w-5 h-5" />
      )}
    </button>
  );
}
