import type { ChangeEvent } from "react";
import BooksList from "./components/BooksList";
import Header from "./components/Header";
import UploadFileBtn from "./components/UploadFileBtn";
import { AppContext } from "./AppContext";
import { useState } from "react";

const App = () => {
  const [allBooksList, setAllBooksList] = useState([]);

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
    <AppContext.Provider value={{ allBooksList }}>
      <>
        <Header />
        <BooksList />
        <UploadFileBtn
          fetchFileAndUploadDataFromServer={fetchFileAndUploadDataFromServer}
        />
      </>
    </AppContext.Provider>
  );
};

export default App;
