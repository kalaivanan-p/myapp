// /store/hoc/withAuth.js
"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import useUserStore from "../useUserStore";

const withAuth = (WrappedComponent) => {
  const AuthenticatedComponent = (props) => {
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

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;