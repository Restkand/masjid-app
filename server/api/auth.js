const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.userLogin.findUnique({ where: { email } });
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: 'Invalid password' });
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});


router.post("/logout", (req, res) => {
  // Jika Anda menggunakan session, hancurkan session
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.clearCookie("session_id"); // Hapus cookie session
      return res.status(200).json({ message: "Logout successful" });
    });
  } else {
    // Jika Anda menggunakan JWT, cukup kirim respons sukses
    return res.status(200).json({ message: "Logout successful" });
  }
});

module.exports = router;