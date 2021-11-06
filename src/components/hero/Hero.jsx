import "./hero.scss";
import React from 'react'
import { NavLink } from "react-router-dom";
import AnimatedCircles from "../animatedCircles/AnimatedCircles";

export default function Hero() {
    return (
        <div className="hero">
            <div className="left">
                <div className="container">
                    <h1>Payment made <span>quick</span> and <span id="easy">easy</span> with BubblePay.</h1>
                    <p>
                        Lighting fast payment for <span>businesses</span> and <span>customers</span> alike!
                        Try our free trial today welcome super fast payments into your business today!
                    </p>
                    <NavLink className="button" exact to= "/sign-up">TRY FREE TODAY</NavLink>
                    <h2>Already have an account? <NavLink className="sign-in" exact to= "/sign-in">Sign in.</NavLink></h2>
                </div>
            </div>
            <div className="right">
                <img id="greenCircle" src="assets/greenCircle.png" alt="" />
                <img id="yellowCircle" src="assets/yellowCircle.png" alt="" />
                <img id="blueCircle" src="assets/blueCircle.png" alt="" />
                <img src="assets/woman.png" alt="" />
            </div>
            <AnimatedCircles />
        </div>
    )
}
