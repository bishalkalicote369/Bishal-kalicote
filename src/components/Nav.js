import React, { useState } from 'react';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <header className={`bg-gray-700 text-white ${showLinks ? 'h-20' : 'h-20'} fixed w-full z-10 top-0`}>
      <div className="container flex justify-between items-center h-full mx-auto">
        <a className="flex text-2xl font-bold items-center p-2 font-montserrat hover:text-green-500" href='#home'>KALICOTE</a>
        <div className="lg:hidden relative">
          <button className="p-4" onClick={() => setShowLinks(!showLinks)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          {showLinks && (
            <ul className="absolute font-semibold text-lg right-0 top-full bg-black text-white p-2 space-y-2 w-[150px]">

              <li className="flex">
                <a className="flex items-center px-4 hover:text-green-500" href="#about" >About-Me</a>
              </li>
              <li className="flex">
                <a className="flex items-center px-4 hover:text-green-500" href="./Project.js">Projects</a>
              </li>
              <li className="flex">
                <a className="flex items-center px-4 hover:text-green-500" href="#contact">Contact-Me</a>
              </li>
            </ul>
          )}
        </div>
        <ul className={`items-center font-semibold text-lg space-x-3 hidden lg:flex font-palanquin ${showLinks ? '' : 'hidden'}`}>
          <li className="flex">
            <a className="flex items-center px-4 hover:text-green-500" href="./Project.js">Projects</a>
          </li>
          <li className="flex">
            <a className="flex items-center px-4 hover:text-green-500" href="#about">About-Me</a>
          </li>
          <li className="flex">
            <a className="flex items-center px-4 hover:text-green-500" href="#contact">Contact-Me</a>
          </li>

        </ul>
      </div>
    </header>
  );
}

export default Nav;
