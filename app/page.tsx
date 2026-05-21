import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-[95%] max-w-7xl mx-auto">
        <br />
        <Link
          href="/books"
          className="block w-fit bg-[var(--color-brown-700)] text-white text-lg px-3 py-0.5 rounded-full">
          Go to my books
        </Link>
      </main>
    </>
  );
}
