import React from 'react';
import { useNotes } from '../context';
import NoteCard from '../components/NoteCard';

export default function Home() {
  const { state, dispatch } = useNotes();

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_NOTE', payload: id });
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-3xl font-extrabold text-indigo-700 mb-6">Your Notes</h1>
      {state.notes.length === 0 ? (
        <div className="text-center text-gray-400 text-lg mt-20">No notes yet. Create your first note!</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {state.notes.map((note) => (
            <NoteCard key={note.id} note={note} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
