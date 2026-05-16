"use client";

export default function HighlightsCount({ count }: { count: number }) {
  return <p>{count === 1 ? `${count} Highlight` : `${count} Highlights`}</p>;
}
