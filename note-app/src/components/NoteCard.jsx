import React from "react";
import { Link } from "react-router-dom";

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 flex flex-col gap-3 border border-purple-200 hover:scale-[1.02] transition-transform">
      <Link
        to={`/note/${note.id}`}
        className="text-xl font-bold text-indigo-700 hover:underline"
      >
        {note.title}
      </Link>
      <p className="text-gray-700 line-clamp-3">{note.content}</p>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-400">
          {new Date(note.date).toLocaleString()}
        </span>
        <button
          onClick={() => onDelete(note.id)}
          className="px-3 py-1 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg shadow hover:scale-105 transition-transform"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
