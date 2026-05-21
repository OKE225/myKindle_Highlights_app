"use client";

export default function HighlightsCount({ count }: { count: number }) {
  return (
    <p className="text-zinc-500 text-sm">
      {count === 1 ? `${count} highlight` : `${count} highlights`}
    </p>
  );
}
