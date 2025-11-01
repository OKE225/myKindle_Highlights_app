import { createContext, type ChangeEvent } from "react";
import type Book from "./types/Book";

type AppContextType = {
  allBooksList: Book[];
  setBooks: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const defaultObject: AppContextType = {
  allBooksList: [],
  setBooks: () => {},
};

export const AppContext = createContext(defaultObject);
