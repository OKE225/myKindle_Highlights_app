import { useLocation } from "react-router";
import type Book from "../types/Book";
import Header from "./Header";
import HighlightsList from "./HighlightsList";
import BookNotFound from "./BookNotFound";

const BookHighlightsPage = () => {
  const location = useLocation();
  const book = location.state?.book as Book;

  if (!book) {
    return <BookNotFound />;
  }

  return (
    <div>
      <Header />
      <h1 className="text-4xl">{book.title}</h1>
      <HighlightsList highlights={book.highlights} />
    </div>
  );
};

export default BookHighlightsPage;
