"use client";

import { motion } from "motion/react";

import { NavLink } from "./nav-link";

export function NavItem({
  title,
  href,
  active,
}: {
  title: string;
  href: string;
  active?: boolean;
}) {
  return (
    <div className="relative">
      <NavLink className="relative z-1" href={href} title={title} />

      {active && (
        <motion.div
          layoutId="nav-item-active"
          className="absolute -inset-x-1.5 inset-y-0 rounded border bg-accent dark:border-zinc-700"
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
}
