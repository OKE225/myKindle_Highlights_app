"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { AppContext } from "../../../AppContext";
import { Book } from "@/lib/types";
import BookNotFound from "../../not-found";
import { separateTitleAndAuthor } from "@/lib/separateTitleAndAuthor";
import SideBooksList from "@/components/SideBooksList";
import HighlightsList from "@/components/HighlightsList";

export default function BookHighlightsClient() {
  const params = useParams<{ bookName: string }>();
  const { allBooksList } = useContext(AppContext);

  const decoded = decodeURIComponent(params.bookName);
  const currentBook = allBooksList.find((book: Book) => book.title === decoded);

  if (!currentBook) return <BookNotFound />;

  const { title, author } = separateTitleAndAuthor(currentBook.title);

  return (
    <>
      <div>
        <SideBooksList />
        <div>
          <h1>{title}</h1>
          <p>{author}</p>
          <HighlightsList highlights={currentBook.highlights} />
        </div>
      </div>
    </>
  );
}
