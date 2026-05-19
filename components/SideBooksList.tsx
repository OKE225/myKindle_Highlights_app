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
    <aside>
      {allBooksList.map((book: Book, id) => {
        const href = `/books/${encodeURIComponent(book.id)}`;
        const { title } = separateTitleAndAuthor(book.title);
        const isActive = book.id === currentTitle;

        return (
          <Link
            href={href}
            key={id}
            className={`${isActive ? "underline" : "no-underline"}`}>
            <div>{title}</div>
          </Link>
        );
      })}
    </aside>
  );
};

export default SideBooksList;
