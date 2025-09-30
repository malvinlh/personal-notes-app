import React, { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { getActiveNotes } from "../utils/local-data";
import NoteItem from "../components/NoteItem";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const notes = useMemo(() => getActiveNotes(), []);
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const onChange = (e) => {
    const value = e.target.value;
    if (value) setSearchParams({ q: value });
    else setSearchParams({});
  };

  const filtered = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    if (!keyword) return notes;
    return notes.filter((n) => n.title.toLowerCase().includes(keyword));
  }, [notes, q]);

  return (
    <>
      <SearchBar value={q} onChange={onChange} />

      {filtered.length === 0 ? (
        <div className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </div>
      ) : (
        <section className="notes-list">
          {filtered.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </section>
      )}
    </>
  );
}
