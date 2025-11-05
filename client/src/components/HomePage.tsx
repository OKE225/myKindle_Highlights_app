import Header from "./Header";
import BooksList from "./BooksList";
import UploadFileBtn from "./UploadFileBtn";
import ClearBooksListBtn from "./ClearBooksListBtn";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="m-10">
        <BooksList />
        <UploadFileBtn />
        <ClearBooksListBtn />
      </div>
    </>
  );
};

export default HomePage;
