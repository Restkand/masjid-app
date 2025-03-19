"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";


interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export default function MasterUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "User", password: "" });

  // Fungsi untuk mengambil data user dari API
  const fetchUsers = async () => {
    const response = await fetch("/api/users");
    if (response.ok) {
      const data = await response.json();
      setUsers(data);
    } else {
      console.error("Gagal mengambil data user");
    }
  };

  // Fungsi untuk menambahkan user baru
  const handleAddUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });
    if (response.ok) {
      alert("User berhasil ditambahkan!");
      setNewUser({ name: "", email: "", role: "User", password: "" });
      fetchUsers(); // Refresh daftar user
    } else {
      alert("Gagal menambahkan user");
    }
  };

  // Ambil data user saat komponen di-mount
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Master User</CardTitle>
          <CardDescription>Kelola data pengguna di sini.</CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleAddUser} className="space-y-4">
          {/* Field Nama */}
          <div className="space-y-2">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              required
            />
          </div>

          {/* Field Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              required
            />
          </div>

          {/* Field Password */}
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              required
            />
          </div>

          {/* Field Role */}
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <select
              id="role"
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="Admin">Admin</option>
              <option value="User">User</option>
            </select>
          </div>

          <Button type="submit" className="w-full">
            Tambah User
          </Button>
        </form>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Daftar User</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}