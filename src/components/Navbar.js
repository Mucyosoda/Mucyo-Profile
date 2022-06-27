import React from "react";
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import "../style/style.css"
import logo from "../images/logo-black.png";

export default function Navbar(){
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return(
        <header>
            <img src={logo} alt="logo" />
            <nav ref={navRef} className="nav-wrap">
                <a className="nav-link hover:bg-sky-500 p-4 active:bg-orange-500 focus:ring-violet-300" href="#banner" id="portfolio-link">Protfolio</a>
                <a className="nav-link hover:bg-sky-500 p-4 active:bg-orange-500" href="#about" id="about-link">About</a>
                <a className="nav-link hover:bg-sky-500 p-4 active:bg-orange-500" href="#services" id="contact-link">Contact</a>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>

    )
}