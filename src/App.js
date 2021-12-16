
// src/App.js

import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Home />
    <footer className='text-center text-sm pb-3 pt-1 bg-black'>
        Jerin Varghese © 2021 
    </footer>
    </main>
  );
}