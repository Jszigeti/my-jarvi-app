"use client";

import { useUserData } from "@nhost/nextjs";
import { useEffect, useState } from "react";
import StatsDashboard from "@/src/components/StatsDashboard";
import Header from "@/src/components/Header";

export default function Home() {
  const userData = useUserData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Chargement...</p>;
  if (!userData) return <p>Merci de vous connecter.</p>;

  return (
    <>
      <Header userDisplayName={userData.displayName} />
      <main className="container mx-auto">
        <StatsDashboard />
      </main>
    </>
  );
}
