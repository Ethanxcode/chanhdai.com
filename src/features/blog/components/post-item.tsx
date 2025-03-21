import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Post } from "@/features/blog/types/posts";
import { cn } from "@/lib/cn";

export function PostItem({
  post,
  shouldPreloadImage,
}: {
  post: Post;
  shouldPreloadImage?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "group/post flex flex-col gap-2 p-2",
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
    >
      {post.metadata.image && (
        <div className="relative select-none [&_img]:aspect-[1200/630] [&_img]:rounded-xl">
          <Image
            className={cn(post.metadata.imageDark && "dark:hidden")}
            src={post.metadata.image}
            alt={post.metadata.title}
            width={1200}
            height={630}
            priority={shouldPreloadImage}
          />

          {post.metadata.imageDark && (
            <Image
              className="hidden dark:block"
              src={post.metadata.imageDark}
              alt={post.metadata.title}
              width={1200}
              height={630}
              priority={shouldPreloadImage}
            />
          )}

          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-black/10 ring-inset dark:ring-white/10" />
        </div>
      )}

      <div className="flex flex-col gap-1 p-2">
        <h3 className="font-heading text-lg leading-snug font-medium text-balance underline-offset-4 group-hover/post:underline">
          {post.metadata.title}
        </h3>

        <time
          className="font-mono text-sm text-muted-foreground"
          dateTime={dayjs(post.metadata.createdAt).toISOString()}
        >
          {dayjs(post.metadata.createdAt).format("YYYY.MM.DD")}
        </time>
      </div>
    </Link>
  );
}
