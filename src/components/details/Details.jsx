import "./details.scss"
import React from 'react'

export default function Details() {
    return (
        <div className="details">
            <div className="cover"></div>
            <div className="container">
                <header>
                    <h1><span>Fast</span> and <span id="secure">secure</span> payments, made <span id="simple">simple.</span></h1>
                    <p>
                        BubblePay is an all in one payment system for individual and business use.
                        <span>Its fast, secure and the perfect fit for you, we've got you covered!</span>
                    </p>
                </header>
                <div className="text">
                    <div className="textBox">
                        <div className="imageContainer">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleMain" src="assets/logo-shield.svg" alt="" />
                        </div>
                        <h1><span>Security</span> as standard</h1>
                        <p>
                            We are highly proud of our security and encryption systems that our in place at BubblePay.
                            You can trust us to protect all of your payments with our flawless 100% security record.
                        </p>
                    </div>
                    <div className="textBox">
                        <div className="imageContainer">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleMain" src="assets/logo-fast.svg" alt="" />
                        </div>
                        <h1><span>Fast</span> speeds you can depend on</h1>
                        <p>
                            BubblePay is an all in one payment system for individual and business use.
                            Its fast, secure and the perfect fit for you, we've got you covered!
                        </p>
                    </div>
                    <div className="textBox">
                        <div className="imageContainer">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleMain" src="assets/logo-simple.svg" alt="" />
                        </div>
                        <h1><span>Simple</span> and easily accessible </h1>
                        <p>
                            We are highly proud of our security and encryption systems that our in place at BubblePay.
                            You can trust us to protect all of your payments with our flawless 100% security record.
                        </p>
                    </div>
                    <div className="textBox">
                        <div className="imageContainer">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleMain" src="assets/logo-grow.svg" alt="" />
                        </div>
                        <h1><span>Grow</span> your business with BubblePay</h1>
                        <p>
                            We are highly proud of our security and encryption systems that our in place at BubblePay.
                            You can trust us to protect all of your payments with our flawless 100% security record.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
