import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Header.css";
import { Link } from "react-router-dom";
import resumePdf from "./assets/MyResume.pdf"

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-amber-800 fixed w-full z-10" style={{right:'0px',left:'0px'}}>
      <a href="/" className="logo text-2xl font-bold text-amber-800">
        Personal Porfolio
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
        <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="about/#about">About</Link>
          </li>
          <li>
            <Link to="project/#project">Projects</Link>
          </li>
          <li>
            <Link to="blog/#blog">Blog</Link>
          </li>
          <li>
            <Link to="contact/#contact">Contact</Link>
          </li>
          <li>
            {/* <a href="/#resume" target="https://www.linkedin.com/in/elise-frazier-89b356180/overlay/1706385664154/single-media-viewer/?profileId=ACoAACrEJncBAR7UhRnWfb7rbygduE_YmOj7DJA" without rel="noreferrer"> */}
              <Link to="resume/#resume">
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
        <li>
            <Link to="/#home">Home</Link>
          </li>
          <li>
            <Link to="project/#project">Project</Link>
          </li>
          <li>
          <Link to="about/#about">About</Link>
          </li>
          <li>
          <Link to="blog/#blog">Blog</Link>
          </li>
          <li>
          <Link to="contact/#contact">Contact</Link>
          </li>
          <li>
            <a href={resumePdf} target="_blank" rel="noreferrer">Resume</a>
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