# komisi-marketing-project

Project ini dibuat sebagai bagian dari studi kasus developer: sistem manajemen komisi marketing dan pembayaran cicilan (kredit).  
Menggunakan **Node.js (Express)** untuk backend, **MySQL** sebagai database, dan **React.js** untuk frontend.

---

## Fitur Utama

### Komisi Marketing
- Menampilkan data komisi per marketing berdasarkan omzet bulanan
- Perhitungan komisi otomatis berdasarkan total penjualan dan persentase

### Pembayaran Cicilan
- Input pembayaran per transaksi penjualan (cicilan)
- Melihat histori pembayaran per transaksi
- Menampilkan sisa tagihan berdasarkan grand total vs pembayaran

### Frontend React
- Halaman Dashboard
- Tambah Pembayaran
- Histori Pembayaran + Sisa Tagihan

---

## Tech Stack

| Bagian     | Teknologi              |
|------------|------------------------|
| Backend    | Express.js (Node.js)   |
| Frontend   | React.js               |
| Database   | MySQL                  |
| Tool       | Postman (testing API)  |

---

## Cara menggunakannya

### 1. Jalankan Backend (Express)

```bash
cd api-komisi-marketing
npm install
cp .env // belum dibuatkan .env.example
npm run dev
Frontend akan jalan di: http://localhost:3600

### 2. Jalankan Frontend (React)

```bash
cd frontend-komisi
npm install
npm start
Frontend akan jalan di: http://localhost:3000


Author
Nama: Siswanto
GitHub: github.com/Siswanto01
