const dotenv = require('dotenv');
dotenv.config(); // Load environment variables dari file .env

const express = require('express');
const cors = require('cors');
const articleRoutes = require('./api/article'); // Impor router artikel
const authRoutes = require('./api/auth'); // Impor router auth
const userLogin = require('./api/users'); // Impor router user
const donationRoutes = require('./api/donation'); // Impor router user
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Mount router di path /api/articles
app.use('/api/articles', articleRoutes);

// Mount router di path /api/auth
app.use('/api/auth', authRoutes);

// Mount router di path /api/users
app.use('/api/users', userLogin);

// Gunakan endpoint donasi
app.use("/api/donations", donationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});