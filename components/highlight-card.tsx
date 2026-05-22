"use client";

import { Highlight } from "@/lib/types";

export default function HighlightCard({ createdAt, text }: Highlight) {
  const date = createdAt instanceof Date ? createdAt : new Date(createdAt);

  return (
    <div className="break-inside-avoid overflow-hidden">
      <div>
        <h4>{text}</h4>
      </div>
      <div>
        <p className="text-xs text-zinc-500">
          {date.toLocaleDateString("pl-PL", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
}
