import dayjs from "dayjs";
import { TrophyIcon } from "lucide-react";
import React from "react";

import { Markdown } from "@/components/markdown";
import { cn } from "@/lib/cn";

import { Award } from "../../types/awards";

export function AwardItem({
  className,
  award,
}: {
  className?: string;
  award: Award;
}) {
  return (
    <div className={cn("flex items-center", className)}>
      <TrophyIcon className="mx-4 size-4 shrink-0 text-amber-500" />

      <div className="border-grid space-y-1 border-l p-4">
        <div className="font-mono text-sm font-semibold text-balance">
          {award.title}
        </div>

        <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-sm">
          <div>{award.prize}</div>

          <div className="bg-border flex h-4 w-px shrink-0" />
          <div>{dayjs(award.date).format("MMM YYYY")}</div>

          <div className="bg-border flex h-4 w-px shrink-0" />
          <div>{award.grade}</div>
        </div>

        {award.description && (
          <div className="prose prose-sm prose-zinc dark:prose-invert -mb-1 max-w-none font-mono">
            <Markdown>{award.description}</Markdown>
          </div>
        )}
      </div>
    </div>
  );
}
