import { useLocation } from "react-router";
import type Book from "../types/Book";
import Header from "./Header";
import HighlightsList from "./HighlightsList";

const BookHighlightsPage = () => {
  const location = useLocation();
  const book = location.state?.book as Book;

  return (
    <div>
      <Header />
      <h1 className="text-4xl">{book.title}</h1>
      <HighlightsList highlights={book.highlights} />
    </div>
  );
};

export default BookHighlightsPage;
