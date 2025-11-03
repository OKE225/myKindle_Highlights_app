import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";

const UploadFileBtn = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setBooks } = useContext(AppContext);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".txt"
        className="hidden"
        ref={inputRef}
        onChange={setBooks}
      />
      <button
        className="bg-brown-900 text-brown-50 px-5 py-3 m-10 rounded-sm cursor-pointer hover:bg-brown-800"
        onClick={handleClick}>
        Upload File
      </button>
    </div>
  );
};

export default UploadFileBtn;
