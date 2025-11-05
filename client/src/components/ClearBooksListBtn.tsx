const ClearBooksListBtn = () => {
  const handleClear = () => {
    if (confirm("Are you sure?")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <button
      className="bg-stone-200 text-black shadow px-5 py-3 rounded-sm cursor-pointer"
      onClick={handleClear}>
      Delete Books
    </button>
  );
};

export default ClearBooksListBtn;
