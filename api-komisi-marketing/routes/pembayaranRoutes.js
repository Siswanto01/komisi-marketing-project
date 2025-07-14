const express = require('express');
const router = express.Router();
const {
  tambahPembayaran,
  getAllPembayaran,
  getHistoriPembayaran,
  getSisaTagihan
} = require('../controllers/pembayaranController');

router.post('/', tambahPembayaran);
router.get('/', getAllPembayaran);
router.get('/sisa/:penjualan_id', getSisaTagihan);
router.get('/:penjualan_id', getHistoriPembayaran);

module.exports = router;
