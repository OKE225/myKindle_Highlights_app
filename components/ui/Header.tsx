import Link from "next/link";
import { Suspense } from "react";
import { AuthButton } from "../auth-button";
export default function Header() {
  return (
    <div className="bg-blue-200 flex justify-between items-center">
      <Link href="/">myKindle Highlights</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <AuthButton />
      </Suspense>
    </div>
  );
}
