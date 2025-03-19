import AuthGuard from "@/components/authGuard"; // Import komponen AuthGuard

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}