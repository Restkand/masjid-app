"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token"); // Hapus token
    router.push("/login"); // Redirect ke halaman login
  };

  return (
    <Button onClick={handleLogout} variant="destructive">Logout</Button>
  );
}