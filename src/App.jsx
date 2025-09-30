import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import AddPage from "./pages/AddPage";
import ArchivePage from "./pages/ArchivePage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notes/new" element={<AddPage />} />
            <Route path="/notes/:id" element={<DetailPage />} />
            <Route path="/archives" element={<ArchivePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
