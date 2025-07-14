const db = require('../models/db');

const hitungKomisi = async (req, res) => {
    const sql = `
    SELECT 
      m.name AS marketing,
      DATE_FORMAT(p.date, '%Y-%m') AS bulan,
      SUM(p.total_balance + p.cargo_fee) AS omzet
    FROM penjualan p
    JOIN marketing m ON p.marketing_id = m.id
    GROUP BY marketing, bulan
    ORDER BY bulan ASC;
  `;

db.query(sql, (err, results) => {
    if (err) {
        return res.status(500).json({ error: 'Gagal mengambil data komisi'});
    }

    // Hitung komisi
    const data = results.map((row) => {
        const omzet = row.omzet;
        let persen = 0;

        if (omzet >= 500_000_000) {
            persen = 10;
        } else if (omzet >= 200_000_000){
            persen = 5;
        } else if (omzet >= 100_000_000) {
            persen = 2.5;
        }

        const komisi = Math.round((persen / 100) * omzet);


        return{
            marketing: row.marketing,
            bulan: formatBulan(row.bulan),
            omzet,

            'komisi %': `${persen}%`,
            'komisi nominal' : komisi
        };
    });

    res.json(data);
});
};

function formatBulan(yyyyMM) {
  const [year, month] = yyyyMM.split('-');
  const namaBulan = [
    '', 'Januari', 'Februari', 'Maret', 'April', 'Mei',
    'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  return `${namaBulan[parseInt(month)]} ${year}`;
}

module.exports = { hitungKomisi };

// db.query(sql, (err, results) => {
//   if (err) {
//     console.error("Query error:", err);  // Tambahkan log error
//     return res.status(500).json({ error: 'Gagal mengambil data komisi' });
//   }

//   console.log("Hasil query:", results); // Tambahkan log hasil
// });