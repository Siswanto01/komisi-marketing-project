import React, { useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const HistoriPembayaran = () => {
    const { id } = useParams();
    const [histori, setHistori] = useState([]);
    const [sisa, setSisa] = useState(null);


    useEffect(() => {
        axios.get(`http://localhost:3600/api/pembayaran/${id}`)
        .then(res => setHistori(res.data))
        .catch(err => console.error(err));


        axios.get(`http://localhost:3600/api/pembayaran/sisa/${id}`)
        .then(res => setSisa(res.data))
        .catch(err => console.error(err));
    }, [id]);

    return (
        <div style={{ padding: '20px'}}>
            <h2>Histori Pembayaran - ID Transaksi {id}</h2>

            {sisa && (
                <div>
                    <p><strong>Grand Total:</strong> {Number(sisa.grand_total).toLocaleString()}</p>
                    <p><strong>Total Dibayar:</strong> {Number(sisa.total_dibayar).toLocaleString()}</p>
                    <p><strong>Sisa Tagihan:</strong> {Number(sisa.sisa_tagihan).toLocaleString()}</p>
                </div>
            )}


            <h3>Riwayat Pembayaran</h3>
            <table border="1" cellPadding={10}>
                <thead>
                    <tr>
                        <th>Tanggal</th>
                        <th>Jumlah</th>
                        <th>Metode</th>
                    </tr>
                </thead>
                <tbody>
                    {histori.length === 0 ? (
                        <tr><td colSpan="3">Belum ada pembayaran</td></tr>
                    ) : (
                        histori.map((item, index) => (
                            <tr key={index}>
                                <td>{item.tanggal_pembayaran}</td>
                                <td>{Number(item.jumlah_pembayaran).toLocaleString()}</td>
                                <td>{item.metode_pembayaran}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default HistoriPembayaran;