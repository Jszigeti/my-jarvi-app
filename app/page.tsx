"use client";

import { useUserData } from "@nhost/nextjs";
import { useEffect, useState } from "react";
import StatsDashboard from "@/src/components/StatsDashboard";

export default function Home() {
  const userData = useUserData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Chargement...</p>;

  return (
    <main className="container mx-auto">
      <h1>Mon dashboard</h1>
      {userData && (
        <>
          <p>Bienvenue {userData.displayName} !</p>
          <StatsDashboard />
        </>
      )}
    </main>
  );
}
