import Header from "./Header";
import BooksList from "./BooksList";
import UploadFileBtn from "./UploadFileBtn";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="mx-10 my-5">
        <BooksList />
        <UploadFileBtn />
      </div>
    </>
  );
};

export default HomePage;
