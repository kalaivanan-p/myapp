"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../../store/useUserStore";

export default function DashboardPage() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.push("/"); 
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Welcome, {user.displayName}!</h1>
      <p>Your email: {user.email}</p>
    </div>
  );
}
