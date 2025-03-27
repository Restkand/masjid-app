const express = require("express");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = express.Router();

// POST: Simpan data donasi
router.post("/", async (req, res) => {
  try {
    const { donorName, amount, donationDate, notes } = req.body;

    // Validasi input
    if (!donorName || !amount || !donationDate) {
      return res.status(400).json({ message: "Semua field wajib diisi" });
    }

    // Simpan data donasi ke database
    const newDonation = await prisma.donation.create({
      data: {
        donorName,
        amount: parseFloat(amount), // Konversi ke number
        donationDate: new Date(donationDate), // Konversi ke Date
        notes,
      },
    });

    res.status(201).json(newDonation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal menyimpan donasi" });
  }
});

// GET: Ambil semua data donasi (opsional, jika diperlukan)
router.get("/", async (req, res) => {
  try {
    const donations = await prisma.donation.findMany();
    res.json(donations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Gagal mengambil data donasi" });
  }
});

module.exports = router;