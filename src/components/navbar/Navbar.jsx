import "./navbar.scss";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar({ menuOpen, setMenuOpen, burgerMenuOpen, setBurgerMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active") + (burgerMenuOpen && "active")}>
            <div className="container">
                <div className="wrapper">
                    <div className="left">
                        <img src="assets/logo.svg" alt="bubble pay logo" />
                        <ul>
                            <li id="products" onClick={()=>setMenuOpen(!menuOpen)}>
                                Products
                                <svg xmlns="http://www.w3.org/2000/svg" width="12.189" height="7.509" viewBox="0 0 12.189 7.509">
                                    <g id="Arrow" transform="translate(-823.086 -37.586)">
                                        <line id="line1" x2="4.68" y2="4.68" transform="translate(824.5 39)" fill="none" stroke="#323353" stroke-linecap="round" stroke-width="2"/>
                                        <line id="line2" x1="4.68" y2="4.68" transform="translate(829.18 39)" fill="none" stroke="#323353" stroke-linecap="round" stroke-width="2"/>
                                    </g>
                                </svg>
                            </li>
                            <li>Why BubblePay?</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="right">
                        <NavLink className="button" exact to= "/sign-up">SIGN UP</NavLink>
                        <div className="hamburger" onClick={()=>setBurgerMenuOpen(!burgerMenuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
