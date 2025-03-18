const express = require('express');
const cors = require('cors');
const articleRoutes = require('./api/article'); // Import dari folder api
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/articles', articleRoutes); // Mount router di path /api/articles

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});