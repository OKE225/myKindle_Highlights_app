import { useLocation } from "react-router";
import type Book from "../types/Book";

const BookHighlightsPage = () => {
  const location = useLocation();
  const book = location.state?.book as Book;

  return (
    <div>
      <h1 className="bg-brown-900 text-5xl py-8 px-5 font-light text-brown-50">
        {book.title}
      </h1>
    </div>
  );
};

export default BookHighlightsPage;
