import { NhostClient } from "@nhost/nhost-js";

export const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN,
  region: process.env.NEXT_PUBLIC_NHOST_REGION,
});

await nhost.auth.signIn({
  email: process.env.NEXT_PUBLIC_NHOST_AUTH_EMAIL!,
  password: process.env.NEXT_PUBLIC_NHOST_AUTH_PASSWORD!,
});
