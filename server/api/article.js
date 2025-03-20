const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  const articles = await prisma.article.findMany();
  res.json(articles);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const article = await prisma.article.findUnique({
    where: { articleId: parseInt(id) },
  });
  if (!article) {
    return res.status(404).json({ message: "Artikel tidak ditemukan" });
  }
  res.json(article);
});

// Create a new article
router.post('/', async (req, res) => {
  const { title, content } = req.body;

  // Ambil email user dari header
  const userEmail = req.headers['user-email'];
  console.log("User email from header:", userEmail);

  if (!userEmail) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Cari user berdasarkan email
    const user = await prisma.userLogin.findUnique({
      where: { email: userEmail },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log("Author ID:", user.userId);

    // Buat artikel dengan menghubungkan ke user yang ditemukan
    const newArticle = await prisma.article.create({
      data: {
        title,
        content,
        author: {
          connect: { userId: user.userId }, // Hubungkan ke user yang sudah ada
        },
      },
    });

    console.log("New article created:", newArticle);
    res.json(newArticle);
  } catch (error) {
    console.error("Error details:", error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
});

// Update an article
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  try {
    const updatedArticle = await prisma.article.update({
      where: { articleId: parseInt(id) },
      data: { title, content },
    });
    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal memperbarui artikel" });
  }
});

// Delete an article
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.article.delete({
    where: { id: parseInt(id) },
  });
  res.json({ message: 'Article deleted' });
});

module.exports = router;