import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <Suspense fallback={<div>Loading...</div>}>
        <AuthButton />
      </Suspense>
    </main>
  );
}
