"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import LogoutButton from "@/components/logoutButton"; 

export default function AdminPage() {

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Link href="/">
          <Button variant="ghost" className="text-lg font-semibold">
            Home
          </Button>
        </Link>
        <LogoutButton /> 
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Master User */}
          <Link href="/admin/MasterUser">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Master User</CardTitle>
                <CardDescription>Kelola data pengguna</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Akses dan kelola semua data pengguna di sini.</p>
              </CardContent>
            </Card>
          </Link> 

          {/* Card 3: Master Content */}
          <Link href="/admin/ContentManagement">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Content Management </CardTitle>
                <CardDescription>Membuat, Mengedit dan Menghapus Konten</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Membuat Baru, Mengkoreksi bahkan Menghilangkan Konten yang sudah pernah di buat.</p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}