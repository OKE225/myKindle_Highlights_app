"use client";

import { AppContext } from "@/AppContext";
import { useContext } from "react";

export default function ClearBooksListBtn() {
  const { clearBooks, isUploading } = useContext(AppContext);

  return (
    <button
      className="bg-rose-500/60 hover:bg-rose-600/60"
      onClick={clearBooks}>
      {isUploading ? "Loading..." : "Delete All"}
    </button>
  );
}
