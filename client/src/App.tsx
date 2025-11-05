import type { ChangeEvent } from "react";
import { AppContext, defaultObject } from "./AppContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import BookHighlightsPage from "./components/BookHighlightsPage";
import type Book from "./types/Book";

const App = () => {
  const [allBooksList, setAllBooksList] = useState<Book[]>(
    defaultObject.allBooksList
  );
  const [fetchIsLoading, setFetchIsLoading] = useState<boolean>(false);

  const fetchFileAndUploadDataFromServer = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFetchIsLoading(true);

      const file = e.target.files[0];

      const formData = new FormData();
      formData.append("highlights_file", file);

      fetch("https://mykindle-highlights-backend.onrender.com/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setAllBooksList(data);
          setFetchIsLoading(false);

          localStorage.setItem("booksArr", JSON.stringify(data));
        })
        .catch((error) => {
          console.error("Error uploading file:", error);
          setFetchIsLoading(false);
        });
    }
  };

  const savedBookArr = localStorage.getItem("booksArr");

  return (
    <AppContext.Provider
      value={{
        allBooksList: savedBookArr ? JSON.parse(savedBookArr) : allBooksList,
        setBooks: fetchFileAndUploadDataFromServer,
        fetchIsLoading,
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:bookName" element={<BookHighlightsPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
