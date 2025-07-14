const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const komisiRoutes = require('./routes/komisiRoutes');
const pembayaranRoutes = require('./routes/pembayaranRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', komisiRoutes);
app.use('/api/pembayaran', pembayaranRoutes);
app.get('/', (req, res) => {
  res.send('API Komisi Marketing Aktif!');
});


const PORT = process.env.PORT || 3600;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
