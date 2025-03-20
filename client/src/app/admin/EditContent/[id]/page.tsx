"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation"; // Tambahkan useParams
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function EditArticle() {
  const router = useRouter();
  const params = useParams(); // Ambil params menggunakan useParams
  const id = params.id as string; // Type assertion untuk TypeScript

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Fetch data artikel berdasarkan ID
  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`/api/articles/${id}`);
      const data = await response.json();
      if (response.ok) {
        setTitle(data.title);
        setContent(data.content);
      } else {
        alert("Gagal mengambil data artikel");
        router.push("/admin/EditContent");
      }
    };
    fetchArticle();
  }, [id, router]); // Gunakan id sebagai dependency

  // Handle submit form edit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(`/api/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      alert("Artikel berhasil diperbarui!");
      router.push("/admin/EditContent");
    } else {
      alert("Gagal memperbarui artikel");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Artikel</h1>

      <Card>
        <CardHeader>
          <CardTitle>Form Edit Artikel</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Judul</Label>
              <Input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="content">Konten</Label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                rows={5}
                required
              />
            </div>
            <Button type="submit">Simpan Perubahan</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}