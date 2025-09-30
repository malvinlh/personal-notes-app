import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Personal Notes</h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/archives">Arsip</Link>
          </li>
          <li>
            <Link to="/notes/new">Tambah</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
