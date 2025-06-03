"use client";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../lib/firebase";
import useUserStore from "../store/useUserStore";

export default function Home() {
  const router = useRouter();
  const setUser = useUserStore((state) => state.setUser);

  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      });
      router.push("/dashboard");
    } catch (err) {
      console.error("Google Sign-In Error", err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Welcome! Please Sign In</h1>
      <button onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  );
}
