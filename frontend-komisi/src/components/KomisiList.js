import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KomisiList = () => {
  const [komisi, setKomisi] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3600/api/komisi')
      .then(res => setKomisi(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Data Komisi Marketing</h2>
      <table border={2} cellPadding={10} style={{ marginTop: "20px", width: "100%"}}>
        <thead>
            <tr>
                <th>Marketing</th>
                <th>Bulan</th>
                <th>Omzet</th>
                <th>Komisi %</th>
                <th>Komisi Nominal</th>
            </tr>
        </thead>
        <tbody>
            {komisi.map((item, index) => (
                <tr key={index}>
                    <td>{item.marketing}</td>
                    <td>{item.bulan}</td>
                    <td>{Number(item.omzet).toLocaleString()}</td>
                    <td>{item["komisi %"]}</td>
                    <td>{Number(item["komisi nominal"]).toLocaleString()}</td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
    );
};

export default KomisiList;