import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import UserProfile from "../UserProfile";

export async function AuthButton() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  const user = data.user;

  return user ? (
    <div className="flex items-center gap-2">
      <UserProfile user={user} />
    </div>
  ) : (
    <div className="flex gap-2">
      <button className="bg-transparent">
        <Link href="/auth/login">Zaloguj się</Link>
      </button>
      <button className="bg-[var(--color-brown-600)]">
        <Link href="/auth/sign-up">Zarejestruj się</Link>
      </button>
    </div>
  );
}
