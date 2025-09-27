import React, { useState } from "react";

export default function NoteInput({ onAdd }) {
  const MAX = 50;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  function handleTitleChange(e) {
    const next = e.target.value;
    if (next.length <= MAX) setTitle(next);
  }

  const sisa = MAX - title.length;
  const canSubmit = title.trim() && body.trim();

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    onAdd({
      id: +new Date(),
      title: title.trim(),
      body: body.trim(),
      archived: false,
      createdAt: new Date().toISOString(),
    });
    setTitle("");
    setBody("");
  }

  return (
    <form className="note-input" onSubmit={handleSubmit}>
      <input
        className="note-input__title"
        type="text"
        placeholder="Judul catatan (maks 50 karakter)…"
        value={title}
        onChange={handleTitleChange}
      />
      <div className="note-input__title__char-limit">Sisa karakter: {sisa}</div>

      <textarea
        className="note-input__body"
        placeholder="Tulis catatanmu di sini…"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />

      <button type="submit" disabled={!canSubmit}>
        Tambah
      </button>
    </form>
  );
}