import { createContext, type ChangeEvent } from "react";
import type Book from "./types/Book";

type AppContextType = {
  allBooksList: Book[];
  fetchIsLoading: boolean;
  setBooks: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const defaultObject: AppContextType = {
  allBooksList: [],
  fetchIsLoading: true,
  setBooks: () => {},
};

export const AppContext = createContext(defaultObject);
