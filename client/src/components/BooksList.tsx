import { useContext } from "react";
import BookCard from "./BookCard";
import { AppContext } from "../AppContext";
import type Book from "../types/Book";
import BookMotivateQuote from "./BookMotivateQuote";

const BooksList = () => {
  const { allBooksList, fetchIsLoading } = useContext(AppContext);

  return (
    <div className="mb-10">
      <h2 className="text-4xl">Your books</h2>
      {allBooksList.length > 0 ? (
        <div className="grid grid-cols-4 gap-2 mt-2">
          {allBooksList.map((book: Book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      ) : (
        <>
          <p>You don't have any books</p>

          {fetchIsLoading && (
            <>
              <div className="loader bg-stone-500 mt-5"></div>
              <BookMotivateQuote />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BooksList;
