const bcrypt = require('bcrypt');

// server/routes/users.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
  const users = await prisma.userLogin.findMany();
  res.json(users);
});

// Add a new user
router.post('/', async (req, res) => {
  const { name, email, role, password } = req.body;

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await prisma.userLogin.create({
    data: { name, email, role, password: hashedPassword },
  });

  res.json(newUser);
});

module.exports = router;