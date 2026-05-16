import { Suspense } from "react";
import BookHighlightsClient from "./BookHighlightsClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookHighlightsClient />
    </Suspense>
  );
}
