"use client";

import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import useUserStore from "../../store/useUserStore";

export default function LogoutButton() {
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert(`Logged out: ${user.email}`);
      clearUser();
      router.push("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}
