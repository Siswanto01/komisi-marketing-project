import React, { useState } from "react";
import axios from "axios";

const TambahPembayaran = () => {
    const [form, setForm] = useState ({
        penjualan_id: '',
        tanggal_pembayaran: '',
        jumlah_pembayaran: '',
        metode_pembayaran: ''
    });

    const [pesan, setPesan] = useState ('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3600/api/pembayaran', form);
            setPesan('Pembayaran Berhasil Ditambahkan');
            setForm({
                penjualan_id: '',
                tanggal_pembayaran: '',
                jumlah_pembayaran: '',
                metode_pembayaran: ''
            });
        } catch (error) {
            console.error(error);
            setPesan('Gagal Menambahkan Pembayaran.');
        }
    };

    return (
        <div style={{ padding: "20px" }}>
      <h2>Tambah Pembayaran</h2>
      {pesan && <p>{pesan}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>ID Penjualan:</label><br />
          <input type="number" name="penjualan_id" value={form.penjualan_id} onChange={handleChange} required />
        </div>

        <div>
          <label>Tanggal Pembayaran:</label><br />
          <input type="date" name="tanggal_pembayaran" value={form.tanggal_pembayaran} onChange={handleChange} required />
        </div>

        <div>
          <label>Jumlah Pembayaran:</label><br />
          <input type="number" name="jumlah_pembayaran" value={form.jumlah_pembayaran} onChange={handleChange} required />
        </div>

        <div>
          <label>Metode Pembayaran:</label><br />
          <input type="text" name="metode_pembayaran" value={form.metode_pembayaran} onChange={handleChange} required />
        </div>
        <br />
        <button type="submit">Kirim Pembayaran</button>
      </form>
    </div>
  );
}

export default TambahPembayaran;