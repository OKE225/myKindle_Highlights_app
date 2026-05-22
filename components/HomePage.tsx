"use client";

import BooksList from "@/components/BooksList";
import UploadFileBtn from "@/components/UploadFileBtn";
import ClearBooksListBtn from "@/components/ClearBooksListBtn";
import { useContext, useState } from "react";
import { AppContext } from "@/AppContext";
import { uploadFileCheck } from "@/lib/uploadFileCheck";

const HomePage = () => {
  const [uploadError, setUploadError] = useState("");
  const { setBooks, allBooksList } = useContext(AppContext);

  const handleUploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    const result = await uploadFileCheck(file);

    if (!result.ok) {
      setUploadError(result.error);
      return;
    }

    setBooks(e);
  };

  return (
    <div className="w-[95%] max-w-7xl mx-auto mb-6">
      <BooksList />

      {uploadError && <p className="text-red-500">{uploadError}</p>}

      {allBooksList.length === 0 && (
        <UploadFileBtn onUpload={handleUploadFile} />
      )}
      {allBooksList.length > 0 && <ClearBooksListBtn />}
    </div>
  );
};

export default HomePage;
