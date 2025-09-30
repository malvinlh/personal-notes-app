import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import parser from "html-react-parser";
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
} from "../utils/local-data";
import { showFormattedDate } from "../utils";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(() => getNote(id));

  useEffect(() => {
    setNote(getNote(id));
  }, [id]);

  if (!note) {
    return (
      <section className="detail-page">
        <h2>Catatan tidak ditemukan</h2>
        <p>ID: {id}</p>
      </section>
    );
  }

  const onDelete = () => {
    deleteNote(note.id);
    navigate("/");
  };

  const onToggleArchive = () => {
    if (note.archived) unarchiveNote(note.id);
    else archiveNote(note.id);
    setNote(getNote(id));
  };

  return (
    <section className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>

      <article className="detail-page__body">
        {note.body ? parser(note.body) : null}
      </article>

      <div className="detail-page__action">
        <button
          className="action"
          title={note.archived ? "Batal arsip" : "Arsipkan"}
          onClick={onToggleArchive}
        >
          {note.archived ? "📤" : "📥"}
        </button>
        <button className="action" title="Hapus catatan" onClick={onDelete}>
          🗑️
        </button>
      </div>
    </section>
  );
}
