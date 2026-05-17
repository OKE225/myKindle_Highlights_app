import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { LogoutButton } from "./logout-button";
import Image from "next/image";

export async function AuthButton() {
  const supabase = await createClient();

  const { data } = await supabase.auth.getUser();

  const user = data.user;

  const avatarUrl =
    user?.user_metadata?.avatar_url ?? user?.user_metadata?.picture ?? null;

  return user ? (
    <div className="flex items-center gap-4">
      Hey, {user.email}!
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt={user.email ?? "User avatar"}
          width={25}
          height={25}
          className="rounded-full object-cover"
        />
      )}
      <LogoutButton />
    </div>
  ) : (
    <div className="flex gap-2">
      <button>
        <Link href="/auth/login">Sign in</Link>
      </button>
      <button>
        <Link href="/auth/sign-up">Sign up</Link>
      </button>
    </div>
  );
}
