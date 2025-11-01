import { useRef, type ChangeEvent } from "react";

interface Props {
  fetchFileAndUploadDataFromServer: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UploadFileBtn = ({ fetchFileAndUploadDataFromServer }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

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
        onChange={fetchFileAndUploadDataFromServer}
      />
      <button
        className="bg-brown-900 text-brown-50 px-5 py-3 m-10 text-lg rounded-sm cursor-pointer hover:bg-brown-800"
        onClick={handleClick}>
        Upload File
      </button>
    </div>
  );
};

export default UploadFileBtn;
