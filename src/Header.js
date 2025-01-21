import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.css";
// import { a } from "react-router-dom";
import resumePdf from "./assets/IT Resume as of January 2025.pdf";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-amber-800 fixed w-full z-10" style={{right:'0px',left:'0px'}}>
      <a href="#hero" className="logo text-2xl font-bold text-cyan-700 hover:text-cyan-600">
        Personal Porfolio
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block bg-white rounded-lg shadow-md">
        <ul className="flex">
        <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            {/* <a href="/#resume" target="https://www.linkedin.com/in/elise-frazier-89b356180/overlay/1706385664154/single-media-viewer/?profileId=ACoAACrEJncBAR7UhRnWfb7rbygduE_YmOj7DJA" without rel="noreferrer"> */}
              <a href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
        <li>
            <a to="#hero">Home</a>
          </li>
          <li>
            <a to="#project">Project</a>
          </li>
          <li>
          <a to="#about">About</a>
          </li>
          <li>
          <a to="#blog">Blog</a>
          </li>
          <li>
          <a to="#contact">Contact</a>
          </li>
          <li>
            <a href={resumePdf} id="#resume" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;