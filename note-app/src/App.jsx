import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NoteProvider } from './context';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import NoteDetail from './pages/NoteDetail';
import EditNote from './pages/EditNote';
import About from './pages/About';

const App = () => {
  return (
    <NoteProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="new" element={<NewNote />} />
            <Route path="note/:id" element={<NoteDetail />} />
            <Route path="edit/:id" element={<EditNote />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </NoteProvider>
  );
};

export default App;