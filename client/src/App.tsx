import type { ChangeEvent } from "react";
import { AppContext, defaultObject } from "./AppContext";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import BookHighlightsPage from "./components/BookHighlightsPage";

const App = () => {
  const [allBooksList, setAllBooksList] = useState(defaultObject.allBooksList);

  const fetchFileAndUploadDataFromServer = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append("highlights_file", file);

      fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => setAllBooksList(data))
        .catch((error) => console.error("Error uploading file:", error));
    }
  };

  return (
    <AppContext.Provider
      value={{ allBooksList, setBooks: fetchFileAndUploadDataFromServer }}>
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
