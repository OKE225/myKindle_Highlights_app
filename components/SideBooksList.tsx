import { useContext } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AppContext } from "@/AppContext";
import { Book } from "@/lib/types";
import { separateTitleAndAuthor } from "@/lib/separateTitleAndAuthor";

const SideBooksList = () => {
  const params = useParams<{ bookName: string }>();
  const { allBooksList } = useContext(AppContext);

  const raw = params?.bookName ?? "";
  const currentTitle =
    decodeURIComponent(Array.isArray(raw) ? raw[0] : raw) || "";

  return (
    <aside className="w-[20%] max-lg:hidden">
      <p className="[font-family:var(--font-crimson-text)] text-2xl ml-2 mb-2">
        Your collection
      </p>
      {allBooksList.map((book: Book, id) => {
        const href = `/books/${encodeURIComponent(book.id)}`;
        const { title } = separateTitleAndAuthor(book.title);
        const isActive = book.id === currentTitle;

        return (
          <Link href={href} key={id} className="w-fit block text-sm">
            <div
              className={`rounded px-2 ${isActive ? "text-[var(--color-brown-500)] underline" : "text-[var(--color-brown-700)] hover:text-[var(--color-brown-500)]"} line-clamp-1`}>
              {title}
            </div>
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBooksList;
