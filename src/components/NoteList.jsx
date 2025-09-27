import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ title, notes, onDelete, onToggleArchive }) {
  return (
    <>
      <h2>{title}</h2>
      {notes.length === 0 ? (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      ) : (
        <div className="notes-list">
          {notes.map((n) => (
            <NoteItem
              key={n.id}
              note={n}
              onDelete={onDelete}
              onToggleArchive={onToggleArchive}
            />
          ))}
        </div>
      )}
    </>
  );
}