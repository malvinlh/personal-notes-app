import React, { useMemo } from "react";
import { getArchivedNotes } from "../utils/local-data";
import NoteItem from "../components/NoteItem";

export default function ArchivePage() {
  const archived = useMemo(() => getArchivedNotes(), []);

  return (
    <>
      <h2>Arsip</h2>
      {archived.length === 0 ? (
        <div className="notes-list-empty">
          <p>Arsip kosong</p>
        </div>
      ) : (
        <section className="notes-list">
          {archived.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </section>
      )}
    </>
  );
}
