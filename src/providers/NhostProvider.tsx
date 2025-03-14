"use client";

import { NhostProvider } from "@nhost/nextjs";
import { nhost } from "@/lib/nhost";

const NhostProviderContext = ({ children }: { children: React.ReactNode }) => {
  return <NhostProvider nhost={nhost}>{children}</NhostProvider>;
};

export default NhostProviderContext;
