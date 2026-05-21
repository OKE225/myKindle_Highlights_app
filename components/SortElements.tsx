"use client";

type SortOption = "Oldest" | "Newest" | "A-Z" | "Z-A";

type SortElementsProps = {
  sortKey: SortOption;
  setSortKey: (v: SortOption) => void;
  children: React.ReactNode;
};

export default function SortElements({
  sortKey,
  setSortKey,
  children,
}: SortElementsProps) {
  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as SortOption;
    setSortKey(newValue);
  };

  return (
    <select
      name="sort"
      className="lowercase rounded bg-[var(--color-brown-200)]"
      id="selectFloating"
      value={sortKey}
      onChange={handleSort}>
      {children}
    </select>
  );
}
