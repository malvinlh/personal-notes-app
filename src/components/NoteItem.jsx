import React from "react";
import { Link } from "react-router-dom";
import parser from "html-react-parser";
import { showFormattedDate } from "../utils";

export default function NoteItem({ note }) {
  return (
    <article className="note-item">
      <Link
        to={`/notes/${note.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <h3 className="note-item__title">{note.title}</h3>
        <p className="note-item__createdAt">
          {showFormattedDate(note.createdAt)}
        </p>

        <div className="note-item__body">{parser(note.body || "")}</div>
      </Link>
    </article>
  );
}
