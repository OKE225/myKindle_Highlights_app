"use client";

import BooksList from "@/components/ui/BooksList";
import UploadFileBtn from "@/components/ui/UploadFileBtn";
import ClearBooksListBtn from "@/components/ui/ClearBooksListBtn";
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
