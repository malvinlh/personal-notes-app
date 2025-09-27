import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="note-search">
      <input
        type="text"
        placeholder="Cari berdasarkan judul…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}