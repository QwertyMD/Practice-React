import React from "react";

export default function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 mt-10">
      <div className="bg-white/90 rounded-2xl shadow-2xl p-8 border border-purple-200">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-2">
          About NoteNest
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          NoteNest is a modern, beautiful, and feature-rich note-taking app
          built with React, React Router, Context API, and Tailwind CSS v4.
          Effortlessly create, edit, and manage your notes with a stunning UI.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-4">
          <li>📝 Create, edit, and delete notes</li>
          <li>🔍 View note details</li>
          <li>🌈 Gorgeous, non-classic UI</li>
          <li>⚡ Blazing fast and responsive</li>
        </ul>
        <div className="text-sm text-gray-400">Made with ❤️ by Anonymous.</div>
      </div>
    </div>
  );
}
