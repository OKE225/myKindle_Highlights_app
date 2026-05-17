"use client";

import { Book } from "@/lib/types";
import Link from "next/link";

export default function BookCard({ book }: { book: Book }) {
  const href = `/books/${encodeURIComponent(book.title)}`;

  return (
    <Link href={href}>
      <div>
        <h2>{book.title}</h2>
        <p>{book.author}</p>
      </div>
      <div>
        <p className="text-xs">
          {book.highlightsCount === 1
            ? `${book.highlightsCount} highlight`
            : `${book.highlightsCount} highlights`}
        </p>
      </div>
    </Link>
  );
}
