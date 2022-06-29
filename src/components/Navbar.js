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
            <nav ref={navRef} className="nav-wrap pt-4 font-bold text-lg">
                <a className="nav-link hover:bg-orange-500 p-4 " href="#banner" id="portfolio-link">Protfolio</a>
                <a className="nav-link hover:bg-orange-600 p-4 " href="#about" id="about-link">About</a>
                <a className="nav-link hover:bg-orange-600 p-4" href="#contact" id="contact-link">Contact</a>
            </nav>
        </header>
    )
}