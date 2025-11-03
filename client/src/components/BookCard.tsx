import { Link } from "react-router";
import type Book from "../types/Book";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    <Link
      to={book.title}
      state={{ book }}
      className="bg-brown-500 text-white rounded-sm text-center flex flex-col justify-center p-5">
      <span className="text-4xl">📖</span>
      <h2 className="text-2xl font-light">{book.title}</h2>
    </Link>
  );
};

export default BookCard;
