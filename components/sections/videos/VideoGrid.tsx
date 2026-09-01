"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/layout/TransitionLink";
import { Arrow } from "@/components/ui/Arrow";
import {
  cleaningVideos,
  videoEmbed,
  videoThumb,
  videoTopics,
  type CleaningVideo,
} from "@/lib/videos";

/**
 * Cleaning videos, as click-to-play facades.
 *
 * Ten live YouTube iframes on one page would pull several megabytes of
 * third-party script before anyone pressed play, and would set cookies for
 * every visitor. Each card renders YouTube's own poster frame instead and
 * swaps in the iframe on click — the embed is only created for the clip
 * someone actually wants, and it uses the nocookie host.
 */
export function VideoGrid() {
  const [topic, setTopic] = useState<string | null>(null);
  const shown = topic
    ? cleaningVideos.filter((v) => v.topic === topic)
    : cleaningVideos;

  const chip =
    "cursor-pointer rounded-full px-[16px] py-2 text-[13px] font-semibold transition-[background,color,transform] duration-300";
  const off =
    "bg-white text-muted-3 ring-1 ring-inset ring-line-2 hover:bg-green-tint hover:text-navy";
  const on = "scale-[1.04] bg-navy text-white";

  return (
    <>
      <div
        role="group"
        aria-label="Filter videos by topic"
        className="mb-9 flex flex-wrap justify-center gap-2"
      >
        <button
          type="button"
          onClick={() => setTopic(null)}
          aria-pressed={topic === null}
          className={`${chip} ${topic === null ? on : off}`}
        >
          All videos
          <span className={topic === null ? "text-white/60" : "text-muted-2"}>
            {" "}
            {cleaningVideos.length}
          </span>
        </button>
        {videoTopics.map((t) => {
          const n = cleaningVideos.filter((v) => v.topic === t).length;
          if (!n) return null;
          const active = topic === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              aria-pressed={active}
              className={`${chip} ${active ? on : off}`}
            >
              {t}
              <span className={active ? "text-white/60" : "text-muted-2"}>
                {" "}
                {n}
              </span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Showing {shown.length} videos.
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
        {shown.map((v, i) => (
          <Reveal key={v.id} dir="up" delay={Math.min(i, 5) * 70}>
            <VideoCard video={v} />
          </Reveal>
        ))}
      </div>
    </>
  );
}

function VideoCard({ video }: { video: CleaningVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-card bg-white ring-1 ring-inset ring-line-2 transition-[transform,box-shadow] duration-[350ms] hover:-translate-y-1 hover:shadow-card-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-navy">
        {playing ? (
          <iframe
            src={videoEmbed(video.id)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
            className="group/play absolute inset-0 h-full w-full cursor-pointer border-none p-0"
          >
            {/* YouTube's own poster frame. A plain img keeps the request
                direct rather than proxying a third-party asset through us.
                alt="" is deliberate: the button already carries
                aria-label="Play video: <title>" and the title is in the h3
                below, so a described thumbnail would announce it three
                times. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={videoThumb(video.id)}
              alt=""
              loading="lazy"
              decoding="async"
              width={480}
              height={360}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover/play:scale-[1.04]"
            />
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(29,31,35,.05),rgba(29,31,35,.45))]" />
            <span className="pointer-events-none absolute left-1/2 top-1/2 flex h-[62px] w-[62px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-green-cta shadow-[0_10px_30px_-8px_rgba(29,31,35,.6)] transition-transform duration-300 group-hover/play:scale-110">
              <svg
                width="20"
                height="22"
                viewBox="0 0 20 22"
                fill="#fff"
                aria-hidden="true"
                className="ml-[3px]"
              >
                <path d="M0 1.8v18.4a1.2 1.2 0 0 0 1.83 1.02l15.5-9.2a1.2 1.2 0 0 0 0-2.04L1.83.78A1.2 1.2 0 0 0 0 1.8Z" />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-2.5 font-mono text-[10.5px] uppercase tracking-[0.12em] text-green-deep">
          {video.topic}
        </span>
        <h3 className="mb-2.5 text-[16.5px] font-semibold leading-[1.32] text-navy">
          {video.title}
        </h3>
        <p className="mb-5 flex-1 text-[13px] leading-[1.65] text-muted-3">
          {video.description}
        </p>
        {video.related && (
          <TransitionLink
            href={video.related.href}
            className="group/link flex items-center justify-between gap-3 text-[12.5px] font-semibold text-navy no-underline transition-colors hover:text-green"
          >
            {video.related.label}
            <Arrow />
          </TransitionLink>
        )}
      </div>
    </article>
  );
}
