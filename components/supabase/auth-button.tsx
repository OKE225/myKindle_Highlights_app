import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import UserProfile from "../user-profile";

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
        <Link href="/auth/login">Log In</Link>
      </button>
      <button className="bg-[var(--color-brown-600)]">
        <Link href="/auth/sign-up">Sign Up</Link>
      </button>
    </div>
  );
}
