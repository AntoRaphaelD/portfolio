// src/components/Header.jsx or inside your main component

import React from 'react';

// You'll need to ensure the 'Pacifico' font is available in your project.
// This is typically done by linking it in index.html or importing it in your main CSS file.

function Header() {
  return (
    // Equivalent to <div class="sc-jSFjdj jcTaHb">
    // Tailwind classes for .jcTaHb: padding: 2rem;
    <div className="p-8">
      
      {/* Equivalent to <h1 color="light" class="sc-efHYUO iHfbCu"> */}
      {/* Tailwind classes for .iHfbCu: 
        color: rgb(0, 0, 0); -> text-black
        font-family: Pacifico, cursive; -> **Requires custom Tailwind setup (see below)**
        position: fixed; -> fixed
        left: 1rem; top: 2rem; -> left-4 top-8 (1rem=4 units, 2rem=8 units)
        z-index: 3; -> z-10 (using a slightly higher value for safety)
        font-size: 1.5em; -> text-2xl or text-3xl (1.5em is approx 24px-30px)
      */}
      <h1 
        className="
          fixed left-4 top-8 z-10 
          text-3xl text-black 
          font-pacifico // **Custom font utility class**
          "
      >
        AR
      </h1>

      {/* Equivalent to <button class="sc-iBzEeX glZmJR"> */}
      {/* Tailwind classes for .glZmJR:
        position: fixed; -> fixed
        top: 2rem; -> top-8
        left: 50%; transform: translate(-50%, 0px); -> left-1/2 -translate-x-1/2
        background-color: rgb(252, 246, 244); -> bg-[#FCF6F4] (approx pale beige)
        padding: 0.3rem; -> p-1.5 (0.3rem is tiny, using slightly more generous)
        border-radius: 50%; -> rounded-full
        border: 1px solid black; -> border border-black
        width: 2rem; height: 2rem; -> w-8 h-8 (2rem=8 units, adjusted size)
        display: flex; justify-content: center; align-items: center; -> flex justify-center items-center
        z-index: 9999999; -> z-[9999999] or z-50 (a very high value)
        cursor: pointer; -> cursor-pointer
      */}
      <button 
        className="
          fixed top-8 left-1/2 -translate-x-1/2 
          bg-[#FCF6F4] p-1.5 
          rounded-full border border-black 
          w-8 h-8 flex justify-center items-center 
          z-[9999999] cursor-pointer 
          hover:bg-gray-100 // Add a hover effect for good measure
        "
      >
        {/* Placeholder for button content (e.g., an icon or text) */}
        <span className="text-black">☰</span>
      </button>

    </div>
  );
}

export default Header;