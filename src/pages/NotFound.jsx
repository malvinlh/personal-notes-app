import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="detail-page">
      <h2>404 — Halaman tidak ditemukan</h2>
      <p>URL yang kamu akses tidak tersedia.</p>
      <p style={{ marginTop: 16 }}>
        <Link to="/">Kembali ke beranda</Link>
      </p>
    </section>
  );
}
