import { createContext } from "react";

export const defaultObject = {
  allBooksList: [],
};

export const AppContext = createContext(defaultObject);
