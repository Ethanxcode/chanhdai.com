"use client";

import { useRef } from "react";
import { isMobile } from "react-device-detect";
import ReactParallaxTilt from "react-parallax-tilt";

import { useIsInViewport } from "@/hooks";

type IProps = {
  children?: React.ReactNode;
};

export const AvatarParallaxTilt = ({ children }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInViewport = useIsInViewport(ref);

  return (
    <ReactParallaxTilt
      className="relative overflow-hidden rounded-full"
      tiltEnable={!isMobile && isInViewport}
      perspective={1000}
      glareEnable={false}
      trackOnWindow
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={ref}
        className="relative m-1 select-none overflow-hidden rounded-full ring-1 ring-slate-300 ring-offset-[3px] ring-offset-white dark:ring-slate-600 dark:ring-offset-slate-900"
      >
        {children}
      </div>
    </ReactParallaxTilt>
  );
};
