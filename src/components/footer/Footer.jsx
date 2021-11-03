import "./footer.scss"
import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="newsletter" id="newsletter">
                    <h1>Newsletter</h1>
                    <p>Sign up to our newsletter receive information and deals from BubblePay.</p>
                    <div className="inputContainer">
                        <input type="text" placeholder="Email" />
                        <button><img src="assets/mail-icon.svg" alt="" /></button>
                    </div>
                </div>
                <div className="logos">
                    <div className="left">
                        <img src="assets/logo.svg" alt="" />
                        <h1>A powerful payment app for people on the go.</h1>
                    </div>
                    <div className="right">
                        <img src="assets/twitter.svg" alt="" />
                        <img src="assets/facebook.svg" alt="" />
                        <img src="assets/linkedin.svg" alt="" />
                        <img src="assets/instagram.svg" alt="" />
                        <img src="assets/youtube.svg" alt="" />
                    </div>
                </div>
                <div className="links">
                    <div className="col">
                        <h1>PRODUCTS</h1>
                        <ul>
                            <li>BubblePay Lite</li>
                            <li>BubblePay Pro</li>
                            <li>BubblePay Business</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>DOCS</h1>
                        <ul>
                            <li>Bank and Credit partners</li>
                            <li>Tech Specs</li>
                            <li>API</li>
                        </ul>
                    </div>
                    <div className="col">
                        <h1>COMPANY</h1>
                        <ul>
                            <li>About us</li>
                            <li>Blog</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <h1>BubblePay &copy; 2021, all rights reserved.</h1>
            </div>
        </div>
    )
}
