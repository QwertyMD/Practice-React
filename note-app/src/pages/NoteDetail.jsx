import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useNotes } from "../context";

export default function NoteDetail() {
  const { id } = useParams();
  const { state, dispatch } = useNotes();
  const navigate = useNavigate();
  const note = state.notes.find((n) => n.id === id);

  if (!note) {
    return (
      <div className="text-center text-gray-400 text-lg mt-20">
        Note not found.
      </div>
    );
  }

  const handleDelete = () => {
    dispatch({ type: "DELETE_NOTE", payload: id });
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto px-4">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 border border-purple-200 mt-6">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-2">
          {note.title}
        </h2>
        <div className="text-gray-500 text-xs mb-4">
          {new Date(note.date).toLocaleString()}
        </div>
        <div className="text-lg text-gray-800 whitespace-pre-line mb-6">
          {note.content}
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => navigate(`/edit/${note.id}`)}
            className="px-5 py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold rounded-xl shadow hover:scale-105 transition-transform"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold rounded-xl shadow hover:scale-105 transition-transform"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
