import { AuthButton } from "@/components/auth-button";
import { Suspense } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <Suspense>
        <AuthButton />
      </Suspense>

      {children}
    </main>
  );
}
