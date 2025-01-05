import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/Login";
import Album from "./pages/album";
import Playlist from "./pages/Playlist"; // Import Album page
function App() {
  useEffect(() => {
    // Optional: Add any startup logic here
  }, []);

  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/album" element={<Album />} /> {/* Add route for Album */}
        <Route path="/Playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;
