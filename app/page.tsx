import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />
      <p>Strona główna</p>
      <Link
        href="/books"
        className="block w-fit text-sm bg-amber-800 text-white px-2 py-1 rounded">
        Przejdź do moich książek
      </Link>
    </main>
  );
}
