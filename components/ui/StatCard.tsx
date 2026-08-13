"use client";

import { useEffect, useRef, useState } from "react";

type StatCardProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  durationMs?: number;
};

function easeOutQuint(t: number) {
  return 1 - Math.pow(1 - t, 5);
}

export function StatCard({
  value,
  prefix = "",
  suffix = "",
  label,
  durationMs = 1600,
}: StatCardProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      requestAnimationFrame(() => setDisplay(value));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / durationMs, 1);
          setDisplay(Math.round(value * easeOutQuint(progress)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value, durationMs]);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center justify-center gap-2.5 rounded-[10px] border border-border-secondary bg-surface px-4 py-6 drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)] transition-[border-color,box-shadow] hover:border-primary hover:shadow-[0px_10px_10px_0px_rgba(0,0,0,0.03)] lg:px-8"
    >
      <p className="font-heading text-h3 font-semibold text-primary-400">
        {prefix}
        {display.toLocaleString("fr-FR")}
        {suffix}
      </p>
      <p className="text-center text-sm font-semibold text-black">{label}</p>
    </div>
  );
}
