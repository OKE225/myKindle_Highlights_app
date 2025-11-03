import { Link } from "react-router";

const BookNotFound = () => {
  return (
    <div>
      <h1 className="bg-rose-700 text-5xl py-8 px-5 font-light text-brown-50">
        Book not found
      </h1>
      <Link to="/">Go to home page</Link>
    </div>
  );
};

export default BookNotFound;
