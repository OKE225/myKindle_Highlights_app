"use client";

import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { LogoutButton } from "./supabase/logout-button";
import { useState } from "react";

interface props {
  user: User;
}

const UserProfile = ({ user }: props) => {
  const [isDetailsShows, setIsDetailsShows] = useState<boolean>(false);

  const avatarUrl =
    user?.user_metadata.avatar_url ??
    user?.user_metadata.picture ??
    "/user.png";

  return (
    <div className="relative">
      <div
        className="flex justify-between items-center gap-1 cursor-pointer select-none bg-zinc-950/20 hover:bg-zinc-950/35 py-1.5 px-2 rounded-full"
        onClick={() => setIsDetailsShows((prev) => !prev)}>
        {avatarUrl && (
          <Image
            src={avatarUrl}
            alt={user.email ?? "User avatar"}
            width={20}
            height={20}
            className="rounded-full object-cover"
          />
        )}
        <p className="[font-family:var(--font-crimson-text)]">
          {user.user_metadata.name}
        </p>
      </div>

      {isDetailsShows && (
        <div className="absolute right-0 bg-[var(--color-brown-900)] rounded px-3 py-1 text-sm text-zinc-300">
          <p className="[font-family:var(--font-crimson-text)] text-zinc-300">
            {user.email}
          </p>

          <LogoutButton />
        </div>
      )}
    </div>
  );
};

export default UserProfile;
