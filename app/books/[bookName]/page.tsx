import { Suspense } from "react";
import BookHighlightsClient from "./BookHighlightsClient";

export default function Page() {
  return (
    <Suspense
      fallback={<div className="w-[95%] max-w-7xl mx-auto">Loading...</div>}>
      <BookHighlightsClient />
    </Suspense>
  );
}
