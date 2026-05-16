type Pagination = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ totalPages, currentPage, onPageChange }: Pagination) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav
      className="flex justify-center items-center gap-1"
      aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        aria-label="Previous page">
        Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          className={`${page === currentPage && "bg-blue-500"}`}
          aria-current={page === currentPage ? "page" : undefined}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        aria-label="Next page">
        Next
      </button>
    </nav>
  );
};

export default Pagination;
