import React, { useMemo, useState } from "react";
import { getInitialData } from "./utils";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NotesList from "./components/NoteList";

export default function App() {
  const [notes, setNotes] = useState(getInitialData());
  const [query, setQuery] = useState("");

  function addNote(newNote) {
    setNotes((prev) => [newNote, ...prev]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  function toggleArchive(id) {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, archived: !n.archived } : n))
    );
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return notes;
    return notes.filter((n) => n.title.toLowerCase().includes(q));
  }, [notes, query]);

  const activeNotes = filtered.filter((n) => !n.archived);
  const archivedNotes = filtered.filter((n) => n.archived);

  return (
    <>
      <Header query={query} onChangeQuery={setQuery} />

      <main className="note-app__body">
        <h2>Tambah Catatan</h2>
        <NoteInput onAdd={addNote} />

        <NotesList
          title="Catatan Aktif"
          notes={activeNotes}
          onDelete={deleteNote}
          onToggleArchive={toggleArchive}
        />

        <NotesList
          title="Arsip"
          notes={archivedNotes}
          onDelete={deleteNote}
          onToggleArchive={toggleArchive}
        />
      </main>
    </>
  );
}