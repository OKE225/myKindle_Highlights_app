import { createClient } from "@/lib/supabase/client";
import SocialButton from "./SocialButton";
import Image from "next/image";

type provider = "google" | "github";

type providerType = {
  name: provider;
  label: string;
  icon: string;
};

const providers: providerType[] = [
  {
    name: "google",
    label: "Continue with Google",
    icon: "/google.svg",
  },
  {
    name: "github",
    label: "Continue with GitHub",
    icon: "/github.svg",
  },
];

const SocialAuthButtons = () => {
  const handleOAuthLogin = async (provider: provider) => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=/books`,
      },
    });

    if (error) {
      alert("Błąd logowania: " + error.message);
      return;
    }

    if (data?.url) window.location.href = data.url;
  };

  return (
    <div className="space-y-1 my-4">
      {providers.map((provider: providerType) => (
        <SocialButton
          key={provider.name}
          action={() => handleOAuthLogin(provider.name)}>
          <Image
            src={provider.icon}
            className="mr-2"
            width={20}
            height={20}
            alt={provider.name}
          />
          {provider.label}
        </SocialButton>
      ))}
    </div>
  );
};

export default SocialAuthButtons;
