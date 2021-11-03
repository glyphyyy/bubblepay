import "./burgerMenu.scss"
import React from "react";
import { NavLink } from "react-router-dom";

export default function BurgerMenu({ burgerMenuOpen, setBurgerMenuOpen }) {
    return (
        <div className={"burgerMenu " + (burgerMenuOpen && "burgerActive")}>
            <ul>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/bubblepaylite">BubblePay Lite</NavLink>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/bubblepaypro">BubblePay Pro</NavLink>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/bubblepaybusiness">BubblePay Business</NavLink>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/whybublepay">Why BubblePay?</NavLink>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                <NavLink className="link" exact to= "/pricing">Pricing</NavLink>
                </li>
                <li onClick={()=>setBurgerMenuOpen(false)}>
                    <NavLink className="link" exact to= "/pricing">Sign up</NavLink>
                </li>
            </ul>
        </div>
    )
}
