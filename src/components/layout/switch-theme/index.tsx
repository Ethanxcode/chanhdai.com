"use client";

import { motion } from "framer-motion";
import _ from "lodash";
import { JSX, useEffect, useState } from "react";

import { useTheme } from "@/libs/next-themes";
import { cn } from "@/utils/cn";

import { IconThemeDark, IconThemeLight, IconThemeSystem } from "./icons";

const SelectTheme = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center overflow-hidden rounded-full bg-slate-50 ring-1 ring-inset ring-slate-300 dark:bg-slate-900 dark:ring-slate-700">
      {children}
    </div>
  );
};

const ThemeOption = ({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: string) => void;
}) => {
  return (
    <div
      className={cn(
        "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-all hover:text-slate-900 dark:text-slate-500 dark:hover:text-slate-50",
        {
          "text-slate-900 dark:text-slate-50": isActive,
        }
      )}
      aria-hidden
      aria-label={_.upperFirst(value)}
      onClick={() => onClick(value)}
    >
      {icon}

      {isActive && (
        <motion.div
          layoutId="theme-option"
          transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
          className="absolute inset-0 rounded-full border border-slate-300 dark:border-slate-700"
        />
      )}
    </div>
  );
};

const THEME_OPTIONS = [
  {
    icon: <IconThemeLight size="1em" />,
    value: "light",
  },
  {
    icon: <IconThemeDark size="1em" />,
    value: "dark",
  },
  {
    icon: <IconThemeSystem size="1em" />,
    value: "system",
  },
];

export const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex h-8 w-24 rounded-full ring-1 ring-inset ring-slate-300 dark:ring-slate-700"></div>
    );
  }

  return (
    <SelectTheme key={String(isMounted)}>
      {THEME_OPTIONS.map((option) => (
        <ThemeOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={theme === option.value}
          onClick={setTheme}
        />
      ))}
    </SelectTheme>
  );
};
