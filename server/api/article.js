const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Get all articles
router.get('/', async (req, res) => {
  const articles = await prisma.article.findMany();
  res.json(articles);
});

// Create a new article
router.post('/', async (req, res) => {
  const { title, content } = req.body;
  const newArticle = await prisma.article.create({
    data: { title, content },
  });
  res.json(newArticle);
});

// Update an article
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updatedArticle = await prisma.article.update({
    where: { id: parseInt(id) },
    data: { title, content },
  });
  res.json(updatedArticle);
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