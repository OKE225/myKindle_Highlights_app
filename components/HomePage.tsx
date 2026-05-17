"use client";

import BooksList from "@/components/BooksList";
import UploadFileBtn from "@/components/UploadFileBtn";
import ClearBooksListBtn from "@/components/ClearBooksListBtn";
import { useContext } from "react";
import { AppContext } from "@/AppContext";

const HomePage = () => {
  const { lastUploadError } = useContext(AppContext);

  return (
    <>
      <div>
        {lastUploadError && <p>Upload error: {lastUploadError}</p>}

        <BooksList />

        <div className="flex">
          <UploadFileBtn />
          <ClearBooksListBtn />
        </div>
      </div>
    </>
  );
};

export default HomePage;
