import "./productDropDown.scss"
import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductDropDown({ menuOpen }) {
    return (
        <div className="productDropDown">
            <div className={"menuContainer " + (menuOpen && "active")}>
                <div className="item">
                    <ul>
                        <li>
                            <NavLink className="link" exact to= "/bubblepaylite">BubblePay Lite</NavLink>
                            <p>The free version of BubblePay, perfect for users who simply want fast and secure payments!</p>
                        </li>
                        <li>
                            <NavLink className="link" exact to= "/bubblepaypro">BubblePay Pro</NavLink>
                            <p>The professional version of BubblePay, great for users who want to utilise BubblePay's awesome payment features!</p>
                        </li>
                        <li>
                            <NavLink className="link" exact to= "/bubblepaybusiness">BubblePay Business</NavLink>
                            <p>The all-round BubblePay business package allowing businesses to utilize the BubblePay platform within their own business!</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}