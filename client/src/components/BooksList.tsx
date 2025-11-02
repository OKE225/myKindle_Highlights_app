import { useContext } from "react";
import BookCard from "./BookCard";
import { AppContext } from "../AppContext";
import type Book from "../types/Book";

const BooksList = () => {
  const { allBooksList } = useContext(AppContext);

  return (
    <>
      <h2 className="text-4xl">Your books</h2>
      {allBooksList.length > 0 ? (
        <div className="grid grid-cols-4 gap-2 m-5">
          {allBooksList.map((book: Book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      ) : (
        <p>You don't have any books</p>
      )}
    </>
  );
};

export default BooksList;
