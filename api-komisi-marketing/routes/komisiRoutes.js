const express = require('express');
const router = express.Router();
const { hitungKomisi } = require('../controllers/komisiController');

router.get('/', (req, res) => {
  res.json({ message: 'API Komisi Berjalan!' });
});

router.get('/komisi', hitungKomisi);

module.exports = router;
