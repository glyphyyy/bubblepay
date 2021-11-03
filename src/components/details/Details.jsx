import "./details.scss"
import React from 'react'

export default function Details() {
    return (
        <div className="details">
            <div className="container">
                <img id="sideCircleLeft" src="assets/side-circle-2.svg" alt="" />
                <img id="sideCircleRight" src="assets/side-circle-2.svg" alt="" />
                <header>
                    <h1><span>Fast</span> and <span>secure</span> payments, made simple.</h1>
                    <p>
                        BubblePay is an all in one payment system for individual and business use.
                        <span>Its fast, secure and the perfect fit for you, we've got you covered!</span>
                    </p>
                </header>
                <div className="text">
                    <div className="textBox">
                        <img id="shield" src="assets/logo-shield.svg" alt="" />
                        <h1><span>Security</span> as standard</h1>
                        <p>
                            We are highly proud of our security and encryption systems that our in place at BubblePay.
                            You can trust us to protect all of your payments with our flawless 100% security record.
                        </p>
                    </div>
                    <div className="textBox">
                        <img id="fast" src="assets/logo-fast.svg" alt="" />
                        <h1><span>Fast</span> speeds you can depend on</h1>
                        <p>
                            BubblePay is an all in one payment system for individual and business use.
                            Its fast, secure and the perfect fit for you, we've got you covered!
                        </p>
                    </div>
                    <div className="textBox">
                        <img id="simple" src="assets/logo-simple.svg" alt="" />
                        <h1><span>Simple</span> and easily accessible </h1>
                        <p>
                            We are highly proud of our security and encryption systems that our in place at BubblePay.
                            You can trust us to protect all of your payments with our flawless 100% security record.
                        </p>
                    </div>
                    <div className="textBox">
                        <img id="grow" src="assets/logo-grow.svg" alt="" />
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
