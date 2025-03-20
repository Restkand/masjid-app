"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { format } from "date-fns";

export default function EditContent() {
  const router = useRouter();
  interface Article {
    articleId: string;
    title: string;
    createdAt: string;
  }

  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  // Fetch data artikel dari API
  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();
      setArticles(data);
      setFilteredArticles(data); // Set filteredArticles dengan data awal
    };
    fetchArticles();
  }, []);

  // Filter dan sortir artikel
  useEffect(() => {
    let filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTitle.toLowerCase())
    );

    if (searchDate) {
      filtered = filtered.filter(
        (article) =>
          format(new Date(article.createdAt), "yyyy-MM-dd") === searchDate
      );
    }

    // Sortir hasil filter
    const sorted = [...filtered].sort((a, b) => {
      if (sortOrder === "newest") {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      } else {
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      }
    });

    setFilteredArticles(sorted);
  }, [searchTitle, searchDate, articles, sortOrder]); // Gabungkan semua dependency

  // Handle delete artikel
  const handleDelete = async (id: string) => {
    const confirmDelete = confirm("Apakah Anda yakin ingin menghapus artikel ini?");
    if (confirmDelete) {
      const response = await fetch(`/api/articles/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setArticles(articles.filter((article) => article.articleId !== id));
        setFilteredArticles(filteredArticles.filter((article) => article.articleId !== id));
      }
    }
  };

  // Handle edit artikel
  const handleEdit = (id: string) => {
    router.push(`/admin/ContentManagement/${id}`);
  };

  // Handle buat artikel baru
  const handleCreateNewArticle = () => {
    router.push("/admin/CreateContent");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Link href="/admin">
          <Button variant="ghost" className="text-lg font-semibold">
            Admin
          </Button>
        </Link>
      </nav>

    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mt-4 mb-4">
        <h1 className="text-2xl font-bold">Content Managements</h1>
        <Button onClick={handleCreateNewArticle}>Buat Artikel Baru</Button>
      </div>

      {/* Filter dan Sortir */}
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Filter dan Sortir</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Input
              type="text"
              placeholder="Cari berdasarkan judul..."
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
            />
            <Input
              type="date"
              value={searchDate}
              onChange={(e) => setSearchDate(e.target.value)}
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Sortir: {sortOrder === "newest" ? "Terbaru" : "Terlama"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setSortOrder("newest")}>
                Terbaru
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSortOrder("oldest")}>
                Terlama
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardContent>
      </Card>

      {/* Tabel Artikel */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Artikel</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredArticles.map((article) => (
                <TableRow key={article.articleId}>
                  <TableCell>{article.title}</TableCell>
                  <TableCell>
                    {format(new Date(article.createdAt), "dd/MM/yyyy")}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      className="mr-2"
                      onClick={() => handleEdit(article.articleId)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(article.articleId)}
                    >
                      Hapus
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}