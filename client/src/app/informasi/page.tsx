"use client";

import { useEffect, useState } from 'react';

interface Article {
  articleId: number;
  title: string;
  content: string;
  createdAt: string;
}

export default function Informasi() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('/api/articles')
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Artikel Terbaru</h1>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.articleId} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p className="text-gray-700 mt-2">{article.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              Diposting pada: {new Date(article.createdAt).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}