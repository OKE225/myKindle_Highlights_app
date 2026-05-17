"use client";

import { Highlight } from "@/lib/types";

export default function HighlightCard({ createdAt, text }: Highlight) {
  console.log(createdAt);
  const date = createdAt instanceof Date ? createdAt : new Date(createdAt);

  return (
    <div className="border-2 p-2 rounded">
      <div>
        <h4>{text}</h4>
      </div>
      <div>
        <p className="text-xs">
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
