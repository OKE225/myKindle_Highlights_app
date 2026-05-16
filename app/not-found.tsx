import Link from "next/link";

export default function BookNotFound() {
  return (
    <div>
      <h1 className="bg-rose-500">Page not found</h1>
      <Link href="/">Go to home page</Link>
    </div>
  );
}
