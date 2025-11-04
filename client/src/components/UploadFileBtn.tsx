import { useContext, useRef } from "react";
import { AppContext } from "../AppContext";

const UploadFileBtn = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { setBooks, fetchIsLoading } = useContext(AppContext);

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
        className="bg-brown-900 text-white px-5 py-3 rounded-sm cursor-pointer hover:bg-brown-800 disabled:bg-stone-700 disabled:cursor-default"
        disabled={fetchIsLoading}
        // disabled={true}
        onClick={handleClick}>
        {fetchIsLoading ? "Loading..." : "Upload File"}
        {/* Loading... */}
      </button>
    </div>
  );
};

export default UploadFileBtn;
