"use client";

import { useContext, useEffect, useState } from "react";
import BookCard from "./BookCard";
import SortElements from "./SortElements";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import { AppContext } from "@/AppContext";
import { Book } from "@/lib/types";

type SortKey = "Oldest" | "Newest" | "A-Z" | "Z-A";

const ITEMS_PER_PAGE = 14;

export default function BooksList() {
  const { allBooksList, hasHydrated } = useContext(AppContext);
  const [sortKey, setSortKey] = useState<SortKey>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sortBooksKey");
      return ["Oldest", "Newest", "A-Z", "Z-A"].includes(saved as string)
        ? (saved as SortKey)
        : "Oldest";
    }
    return "Oldest";
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sortedBooks =
    hasHydrated && allBooksList.length > 0
      ? [...allBooksList].sort((a, b) => {
          const aDate = new Date(a.createdAt).getTime();
          const bDate = new Date(b.createdAt).getTime();

          if (sortKey === "Oldest") return aDate - bDate;
          if (sortKey === "Newest") return bDate - aDate;
          if (sortKey === "A-Z") return a.title.localeCompare(b.title);
          if (sortKey === "Z-A") return b.title.localeCompare(a.title);
          return bDate - aDate;
        })
      : [];

  const filteredBooks = sortedBooks.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalItems = filteredBooks.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginatedBooks = filteredBooks.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    localStorage.setItem("sortBooksKey", sortKey);
  }, [sortKey]);

  return (
    <div>
      <h2>Your books</h2>

      {!hasHydrated ? (
        <p>Loading…</p>
      ) : allBooksList.length > 0 ? (
        <>
          <SearchInput value={searchQuery} onChange={setSearchQuery} />

          <SortElements sortKey={sortKey} setSortKey={setSortKey}>
            <option value="Oldest">Oldest</option>
            <option value="Newest">Newest</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </SortElements>

          <div className="grid grid-cols-2 gap-1">
            {paginatedBooks.map((book: Book, id) => (
              <BookCard key={`${id} ${book.title}`} book={book} />
            ))}
          </div>

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </>
      ) : (
        <p>You don&apos;t have any books</p>
      )}
    </div>
  );
}
