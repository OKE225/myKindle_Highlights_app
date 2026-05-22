"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { AppContext } from "../../../AppContext";
import { Book } from "@/lib/types";
import BookNotFound from "../../not-found";
import SideBooksList from "@/components/side-books-list";
import HighlightsList from "@/components/highlights-list";

export default function BookHighlightsClient() {
  const params = useParams<{ bookName: string }>();
  const { allBooksList } = useContext(AppContext);

  const decoded = decodeURIComponent(params.bookName);
  const currentBook = allBooksList.find((book: Book) => book.id === decoded);

  if (!currentBook) return <BookNotFound />;

  return (
    <div className="w-[95%] max-w-7xl mx-auto mt-10 flex flex-row max-lg:flex-col gap-10">
      <SideBooksList />
      <div className="w-[80%] max-lg:w-full">
        <h1 className="[font-family:var(--font-crimson-text)] text-5xl">
          {currentBook.title}
        </h1>
        <p>{currentBook.author}</p>
        <HighlightsList highlights={currentBook.highlights} />
      </div>
    </div>
  );
}
