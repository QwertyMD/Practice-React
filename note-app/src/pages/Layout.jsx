import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 pb-10">
      <Navbar />
      <main className="pt-4">
        <Outlet />
      </main>
    </div>
  );
}
