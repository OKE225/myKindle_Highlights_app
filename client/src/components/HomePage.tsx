import Header from "./Header";
import BooksList from "./BooksList";
import UploadFileBtn from "./UploadFileBtn";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="m-10">
        <BooksList />
        <UploadFileBtn />
      </div>
    </>
  );
};

export default HomePage;
