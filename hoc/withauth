"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../store/useUserStore";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
    const router = useRouter();
    const user = useUserStore((state) => state.user);

    useEffect(() => {
      if (user === null) {
        router.push("/"); // redirect if no user
      }
    }, [user, router]);

    if (!user) {
      return null; // or loading spinner here
    }

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
