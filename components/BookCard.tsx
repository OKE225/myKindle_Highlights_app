"use client";

import { Book } from "@/lib/types";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  const href = `/books/${encodeURIComponent(book.id)}`;

  return (
    <Link
      href={href}
      className="bg-[var(--color-brown-950)] rounded p-3 flex flex-col justify-between">
      <div>
        <h2 className="[font-family:var(--font-crimson-text)] text-2xl">
          {book.title}
        </h2>
        <p className="text-sm">{book.author}</p>
      </div>
      <p className="text-xs mt-3 text-zinc-500">
        {book.highlightsCount === 1
          ? `${book.highlightsCount} highlight`
          : `${book.highlightsCount} highlights`}
      </p>
    </Link>
  );
}
