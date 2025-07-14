const db = require ('../models/db');

// Tambah Pembayaran Baru
const tambahPembayaran = (req, res) => {
    const { penjualan_id, tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran } = req.body;

    const sql = `INSERT INTO pembayaran (penjualan_id, tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran) VALUES (?, ?, ?, ?)`;

    db.query(sql, [penjualan_id, tanggal_pembayaran, jumlah_pembayaran, metode_pembayaran], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json ({message: 'Gagal menambahkan pembayaran'});
        }

        res.json({ mesasage: 'Pembayaran Berhasil Ditambahkan'});
    });
};

// Ambil semua pembayaran
const getAllPembayaran = (req, res) => {
  db.query(`SELECT * FROM pembayaran`, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Histori pembayaran untuk satu transaksi
const getHistoriPembayaran = (req, res) => {
  const { penjualan_id } = req.params;
  db.query(`SELECT * FROM pembayaran WHERE penjualan_id = ? ORDER BY tanggal_pembayaran ASC`, [penjualan_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};

// Cek sisa tagihan dari transaksi
const getSisaTagihan = (req, res) => {
  const { penjualan_id } = req.params;
const query = `
    SELECT p.id AS penjualan_id, p.grand_total, 
           IFNULL(SUM(pb.jumlah_pembayaran), 0) AS total_dibayar,
           (p.grand_total - IFNULL(SUM(pb.jumlah_pembayaran), 0)) AS sisa_tagihan
    FROM penjualan p
    LEFT JOIN pembayaran pb ON p.id = pb.penjualan_id
    WHERE p.id = ?
    GROUP BY p.id
  `;

  db.query(query, [penjualan_id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results[0]);
  });
};
module.exports = {
  tambahPembayaran,
  getAllPembayaran,
  getHistoriPembayaran,
  getSisaTagihan
};