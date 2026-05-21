import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "./supabase/auth-button";
export default function Header() {
  return (
    <div className="bg-[var(--color-brown-950)] py-2">
      <div className="flex justify-between items-center w-[95%] max-w-7xl mx-auto">
        <Link
          href="/"
          className="[font-family:var(--font-crimson-text)] text-3xl">
          myKindle
        </Link>

        <Suspense fallback={<div>Loading...</div>}>
          <AuthButton />
        </Suspense>
      </div>
    </div>
  );
}
