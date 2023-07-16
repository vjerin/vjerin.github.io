// src/components/Navbar.js

import React from "react";

export default function Navbar() {
  return (

      <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#home" className="ml-3 text-xl">
            Jerin Varghese
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        </nav>
        <a    rel="noreferrer noopener"
              href="https://drive.google.com/file/d/1QgMcktyEaf9bfprPIozYi7HGBlNTITY0/view?usp=sharing" target='_blank'
             className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
              >
              Résumé
        </a>
      </div>
    </header>
  );
}
