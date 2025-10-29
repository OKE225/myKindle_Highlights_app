import { useRef } from "react";

const UploadFile = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];

      const formData = new FormData();
      formData.append("highlights_file", file);

      fetch("http://localhost:5001/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error uploading file:", error));
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".txt"
        className="hidden"
        ref={inputRef}
        onChange={handleChange}
      />
      <button
        className="bg-brown-900 text-brown-50 px-5 py-3 m-10 text-lg rounded-sm cursor-pointer"
        onClick={handleClick}>
        Upload File
      </button>
    </div>
  );
};

export default UploadFile;
