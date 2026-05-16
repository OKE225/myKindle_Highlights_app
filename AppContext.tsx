"use client";

import type { ChangeEvent, PropsWithChildren } from "react";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Book, Highlight } from "./lib/types";
import { extractDetailsFromMetadata } from "./lib/extractDetailsFromMetadata";
import { separateTitleAndAuthor } from "./lib/separateTitleAndAuthor";
import {
  addBookWithHighlights,
  deleteAllBooks,
  getBooks,
} from "./lib/supabaseBooks";

type AppContextType = {
  allBooksList: Book[];
  setBooks: (e: ChangeEvent<HTMLInputElement>) => void;
  clearBooks: () => void;
  lastUploadError: string | null;
  hasHydrated: boolean;
  isUploading: boolean;
};

const defaultValue: AppContextType = {
  allBooksList: [],
  setBooks: () => {},
  clearBooks: () => {},
  lastUploadError: null,
  hasHydrated: false,
  isUploading: false,
};

export const AppContext = createContext<AppContextType>(defaultValue);

export function AppProvider({ children }: PropsWithChildren) {
  const [allBooksList, setAllBooksList] = useState<Book[]>([]);
  const [lastUploadError, setLastUploadError] = useState<string | null>(null);
  const [hasHydrated, setHasHydrated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const loadBooks = async () => {
      try {
        const books = await getBooks();

        if (mounted) {
          const withDates = books.map((book) => ({
            id: book.id,
            user_id: book.user_id,
            title: book.title,
            author: book.author,
            highlightsCount: book.highlights_count,
            createdAt: new Date(book.createdAt),
            highlights: book.highlights?.map((highlight: Highlight) => ({
              text: highlight.text,
              createdAt: new Date(highlight.createdAt),
            })),
          })) as Book[];

          setAllBooksList(withDates);
        }
      } catch (error) {
        console.error("Failed to load books:", error);
        setLastUploadError("Nie udało się załadować książek");
      } finally {
        if (mounted) {
          setHasHydrated(true);
        }
      }
    };

    loadBooks();
    return () => {
      mounted = false;
    };
  }, []);

  const setBooks = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    setLastUploadError(null);
    setIsUploading(false);

    try {
      setIsUploading(true);
      const file = e.target.files[0];
      const content = await file.text();

      const mod = await import("@sole/kindle-clippings-parser");
      const parsed = mod.parse(content);

      const books = parsed
        .map((book) => {
          const { title, author } = separateTitleAndAuthor(book.title);

          const highlights = book.highlights
            .map((highlight) => {
              const { date } = extractDetailsFromMetadata(highlight.metadata);

              return {
                text: highlight.text,
                createdAt: new Date(date),
              };
            })
            .filter(
              (highlight) => highlight.text && highlight.text.trim().length > 0,
            );

          if (highlights.length === 0) return null;

          return {
            title,
            author,
            highlightsCount: book.highlights.length,
            highlights,
            createdAt: highlights[0].createdAt,
          };
        })
        .filter((book): book is Book => book !== null);

      for (const book of books) {
        await addBookWithHighlights(book);
      }

      const uploadedBooks = await getBooks();
      const withDates = uploadedBooks.map((book) => ({
        id: book.id,
        user_id: book.user_id,
        title: book.title,
        author: book.author,
        highlightsCount: book.highlights_count,
        createdAt: new Date(book.createdAt),
        highlights: book.highlights?.map((highlight: Highlight) => ({
          text: highlight.text,
          createdAt: new Date(highlight.createdAt),
        })),
      })) as Book[];

      setAllBooksList(withDates);
    } catch (error) {
      console.error("Error parsing file:", error);
      setLastUploadError(
        error instanceof Error ? error.message : "Parsing failed",
      );
      setIsUploading(false);
    } finally {
      setIsUploading(false);
    }
  }, []);

  const clearBooks = useCallback(async () => {
    if (!confirm("Are you sure?")) return;

    await deleteAllBooks();
    setAllBooksList([]);
  }, []);

  const value = useMemo(
    () => ({
      allBooksList,
      setBooks,
      clearBooks,
      lastUploadError,
      hasHydrated,
      isUploading,
    }),
    [
      allBooksList,
      setBooks,
      clearBooks,
      lastUploadError,
      hasHydrated,
      isUploading,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
