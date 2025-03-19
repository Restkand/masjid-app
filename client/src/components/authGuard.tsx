"use client"; // Pastikan ini adalah Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect ke halaman login jika tidak ada token
    }
  }, [router]);

  return <>{children}</>;
}