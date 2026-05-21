"use client";

import { useEffect, useState } from "react";
import HighlightCard from "./HighlightCard";
import HighlightsCount from "./HighlightsCount";
import SortElements from "./SortElements";
import SearchInput from "./SearchInput";
import Pagination from "./Pagination";
import { Highlight } from "@/lib/types";

type SortKey = "Oldest" | "Newest" | "A-Z" | "Z-A";

const ITEMS_PER_PAGE = 50;

export default function HighlightsList({
  highlights,
}: {
  highlights: Highlight[];
}) {
  const [sortKey, setSortKey] = useState<SortKey>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("sortHighlightsKey");
      return ["Oldest", "Newest", "A-Z", "Z-A"].includes(saved as string)
        ? (saved as SortKey)
        : "Newest";
    }
    return "Newest";
  });
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const sortedHighlights =
    highlights.length > 0
      ? [...highlights].sort((a, b) => {
          const aDate = new Date(a.createdAt).getTime();
          const bDate = new Date(b.createdAt).getTime();

          if (sortKey === "Oldest") return aDate - bDate;
          if (sortKey === "Newest") return bDate - aDate;
          if (sortKey === "A-Z") return a.text.localeCompare(b.text);
          if (sortKey === "Z-A") return b.text.localeCompare(a.text);
          return bDate - aDate;
        })
      : [];

  const filteredHighlights = sortedHighlights.filter((highlight) =>
    highlight.text.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const totalItems = filteredHighlights.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  const paginatedBooks = filteredHighlights.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  useEffect(() => {
    localStorage.setItem("sortHighlightsKey", sortKey);
  }, [sortKey]);

  return (
    <div>
      <HighlightsCount count={filteredHighlights.length} />

      <div className="flex gap-1 mt-5">
        <SearchInput
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search highlight"
        />

        <SortElements sortKey={sortKey} setSortKey={setSortKey}>
          <option value="Newest" className="text-black">
            Newest
          </option>
          <option value="Oldest" className="text-black">
            Oldest
          </option>
          <option value="A-Z" className="text-black">
            A-Z
          </option>
          <option value="Z-A" className="text-black">
            Z-A
          </option>
        </SortElements>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 space-y-10 gap-10 mt-2">
        {paginatedBooks.map((highlight, id) => (
          <HighlightCard
            key={id}
            text={highlight.text}
            createdAt={highlight.createdAt}
          />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}
