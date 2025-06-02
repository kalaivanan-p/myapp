"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../../../store/useUserStore";

export default function DashboardSettings() {
  const user = useUserStore((state) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/");
    }
  }, [user]);

  if (!user) return null;

  return (
    <div>
      <h1>Dashboard Settings</h1>
      <p>Hi, {user.displayName}</p>
    </div>
  );
}
