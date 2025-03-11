"use client";

import { useUserData } from "@nhost/nextjs";
import { useEffect, useState } from "react";

export default function Home() {
  const userData = useUserData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <p>Chargement...</p>;

  return (
    <>
      <h1>Homepage</h1>
      <p>Connecté en tant que : {userData?.displayName}</p>
    </>
  );
}
