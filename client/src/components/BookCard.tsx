import type Book from "../types/Book";

interface Props {
  book: Book;
}

const BookCard = ({ book }: Props) => {
  return (
    // <div className="bg-brown-400 py-14 rounded-sm text-center">
    <div className="bg-brown-200">
      <span className="text-4xl">📖</span>
      <h2 className="text-2xl">{book.title}</h2>
    </div>
  );
};

export default BookCard;
