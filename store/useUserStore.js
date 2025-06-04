// store/useUserStore.js
import { create } from "zustand";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";  // your firebase config file

const useUserStore = create((set) => {
  // Setup Firebase auth listener once when store is created
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User signed in
      set({ user });
    } else {
      // User signed out
      set({ user: null });
    }
  });

  return {
    user: null,
    setUser: (user) => set({ user }),
  };
});

export default useUserStore;
