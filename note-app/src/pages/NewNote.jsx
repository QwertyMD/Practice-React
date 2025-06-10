import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useNotes } from "../context";

export default function NewNote() {
  const { dispatch } = useNotes();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setError("Title and content are required.");
      return;
    }
    dispatch({
      type: "ADD_NOTE",
      payload: {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toISOString(),
      },
    });
    navigate("/");
  };

  return (
    <div className="max-w-xl mx-auto px-4">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-6">
        Create New Note
      </h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 flex flex-col gap-4 border border-purple-200"
      >
        <input
          className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg font-semibold"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-h-[120px] text-base"
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm">{error}</div>}
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl shadow hover:scale-105 transition-transform"
        >
          Save Note
        </button>
      </form>
    </div>
  );
}
