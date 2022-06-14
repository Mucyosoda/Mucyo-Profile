import React from "react";
import './Navbar.css';
import logo from "../images/logo-black.png";

export default function Navbar(){
    return(
    <nav classNameName="text-2xl">
        <img src={logo} alt="logo" />
        <div className="nav-wrap">
            <a className="nav-link hover:bg-sky-500 p-4 active:bg-violet-700 focus:ring-violet-300" href="#banner" id="portfolio-link">Protfolio</a>
            <a className="nav-link hover:bg-sky-500 p-4 active:bg-violet-700" href="#about" id="about-link">About</a>
            <a className="nav-link hover:bg-sky-500 p-4 active:bg-violet-700" href="#services" id="contact-link">Contact</a>
            {/* <a href=""><i className="fa fa-envelope-square"></i></a> */}
          </div>
    </nav>

    )
}