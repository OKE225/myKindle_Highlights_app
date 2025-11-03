import { Link } from "react-router";

const BookNotFound = () => {
  return (
    <div>
      <h1 className="bg-rose-700 text-5xl py-8 px-5 font-light text-white">
        Book not found
      </h1>
      <Link
        to="/"
        className="inline-block bg-rose-700 text-white px-5 py-3 m-5 rounded-sm cursor-pointer hover:bg-rose-600">
        Go to home page
      </Link>
    </div>
  );
};

export default BookNotFound;
