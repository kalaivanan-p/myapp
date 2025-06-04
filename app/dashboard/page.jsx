"use client";

import LogoutButton from "../../components/home/LogoutButton";
import useUserStore from "../../store/useUserStore";
import withAuth from "../store/hoc/withAuth";


export default function Dashboard() {
  const user = useUserStore((state) => state.user);

  if (!user) return <p>Loading or not logged in...</p>;

  return (
    <div>
      <h1>Welcome, {user.displayName}!</h1>
      <p>Your email: {user.email}</p>
      <LogoutButton />
    </div>
  );
}
