import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ query, onChangeQuery }) {
  return (
    <header className="note-app__header">
      <h1>Personal Notes</h1>
      <SearchBar value={query} onChange={onChangeQuery} />
    </header>
  );
}