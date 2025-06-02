"use client";

import { useEffect } from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import useUserStore from "../../store/useUserStore";

const auth = getAuth();  // initialize auth here or import if already initialized elsewhere

export default function AuthListener() {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
          email: firebaseUser.email,
        });
      } else {
        clearUser();
      }
    });

    return () => unsubscribe();
  }, [setUser, clearUser]);

  return null;
}
