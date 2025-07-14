const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'komisi_db'
});

db.connect((err) => {
  if (err) {
    console.error('Koneksi gagal:',
     err);
    return;
  }
  console.log('MySQL terkoneksi!');
});

module.exports = db;
