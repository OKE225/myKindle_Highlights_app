type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

const SearchInput = ({ value, onChange, placeholder }: SearchInputProps) => {
  return (
    <input
      type="text"
      className="w-full bg-[var(--color-brown-200)] placeholder:text-zinc-500 px-3"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
