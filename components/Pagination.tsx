type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const windowSize = 3;

  const startPage = Math.max(
    1,
    Math.min(currentPage - 1, totalPages - windowSize + 1),
  );

  const visiblePages = Array.from(
    { length: Math.min(windowSize, totalPages) },
    (_, i) => startPage + i,
  );

  return (
    <nav
      className="flex justify-end items-center gap-1 mt-2"
      aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        aria-label="Previous page">
        &lt;
      </button>

      {startPage > 1 && (
        <>
          <button type="button" onClick={() => onPageChange(1)}>
            1
          </button>
          {startPage > 2 && <span>...</span>}
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          type="button"
          className={
            page === currentPage
              ? "border-2 border-[var(--color-brown-900)]"
              : ""
          }
          aria-current={page === currentPage ? "page" : undefined}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}

      {startPage + windowSize - 1 < totalPages && (
        <>
          {startPage + windowSize - 1 < totalPages - 1 && <span>...</span>}
          <button type="button" onClick={() => onPageChange(totalPages)}>
            {totalPages}
          </button>
        </>
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        aria-label="Next page">
        &gt;
      </button>
    </nav>
  );
};

export default Pagination;
