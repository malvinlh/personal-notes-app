import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [bodyHTML, setBodyHTML] = useState(""); // simpan HTML
  const editorRef = useRef(null);
  const navigate = useNavigate();

  const onInputHandler = (e) => {
    setBodyHTML(e.currentTarget.innerHTML); // penting: innerHTML, bukan value
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addNote({ title, body: bodyHTML });
    navigate("/");
  };

  return (
    <section className="add-new-page">
      <form onSubmit={onSubmit} className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Judul catatan ..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <div
          ref={editorRef}
          className="add-new-page__input__body"
          data-placeholder="Tulis catatan rich text (Ctrl+B, Ctrl+I, Enter untuk baris baru)..."
          contentEditable
          onInput={onInputHandler}
        />

        <div className="add-new-page__action">
          <button className="action" type="submit" title="Simpan">
            ✔️
          </button>
        </div>
      </form>
    </section>
  );
}
