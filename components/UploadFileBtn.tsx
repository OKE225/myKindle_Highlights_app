"use client";

import { AppContext } from "@/AppContext";
import { useContext, useRef } from "react";

interface Props {
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => Promise<void> | void;
}

export default function UploadFileBtn({ onUpload }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { isUploading } = useContext(AppContext);

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <div>
        <input
          type="file"
          accept=".txt,text/plain"
          className="hidden"
          ref={inputRef}
          onChange={onUpload}
          data-testid="file-input"
        />

        <button
          type="button"
          className="bg-[var(--color-brown-700)] hover:bg-[var(--color-brown-800)]"
          disabled={isUploading}
          onClick={handleClick}>
          {isUploading ? "Loading..." : "Upload File"}
        </button>
      </div>
    </>
  );
}
