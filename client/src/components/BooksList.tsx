import { useContext } from "react";
import BookCard from "./BookCard";
import { AppContext } from "../AppContext";

const BooksList = () => {
  const { allBooksList } = useContext(AppContext);

  return (
    <>
      <h2 className="text-4xl">Your books</h2>
      <div className="grid grid-cols-4 gap-2 m-5">
        {allBooksList.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </>
  );
};

export default BooksList;
