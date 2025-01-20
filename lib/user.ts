import { authClient } from "./auth-client";

export const handleSocialSignOn = async (provider: "github" | "google") => {
  await authClient.signIn.social({
    provider: provider,
    callbackURL: "/dashboard/snippet",
  });
};
