"use client";

import { AppContext } from "@/AppContext";
import { useContext, useRef } from "react";

export default function UploadFileBtn() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setBooks, isUploading } = useContext(AppContext);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBooks(e);
  };

  return (
    <div>
      <input
        type="file"
        accept=".txt,text/plain"
        className="hidden"
        ref={inputRef}
        onChange={handleChange}
        data-testid="file-input"
      />

      <button
        type="button"
        className="bg-blue-600 hover:bg-blue-700"
        disabled={isUploading}
        onClick={handleClick}>
        {isUploading ? "Loading..." : "Upload File"}
      </button>
    </div>
  );
}
