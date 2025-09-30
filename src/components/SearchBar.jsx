import React from "react";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Cari berdasarkan judul...",
}) {
  return (
    <div className="search-bar">
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}
