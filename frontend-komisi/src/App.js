import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import KomisiList from "./components/KomisiList";
import TambahPembayaran from "./components/TambahPembayaran";
import HistoriPembayaran from "./components/HistoriPembayaran";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px"}} >
        <h1>Dashboard Komisi</h1>
        <nav style={{ marginBottom: "20px" }}>
          <Link to= "/">Komisi Marketing</Link> | {' '}
          <Link to= "/pembayaran">Tambah Pembayaran</Link> | {' '}
          <Link to={`/transaksi/1`}>Lihat Histori Transaksi #1</Link>
        </nav>

        <Routes>
          <Route path="/" element= {<KomisiList />} />
          <Route path="/pembayaran" element= {<TambahPembayaran />} />
          <Route path="/transaksi/:id" element= {<HistoriPembayaran />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
