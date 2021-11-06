import "./partners.scss"
import React from 'react'

export default function Partners() {
    return (
        <div className="partners">
            <img id="dotsLeft" src="assets/dotsLeft.svg" alt="" />
            <img id="dotsRight" src="assets/dotsRight.svg" alt="" />
            <div className="container">
                <div className="title">
                    <h1>Our <span>trusted</span> partners</h1>
                    <p>
                        Our trusted partners work closely with us to ensure payments are made quickley and most 
                        importantly safely. We are actively working towards adding more partners to push BubblePay
                        to be the most successful payment system available.
                    </p>
                </div>
                <div className="partnerList">
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/monzo-logo.svg" alt="" />
                        </div>
                        <a href="https://monzo.com/">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/visa-logo.svg" alt="" />
                        </div>
                        <a href="https://www.visa.co.uk/">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/mastercard-logo.svg" alt="" />
                        </div>
                        <a href="https://www.mastercard.co.uk/en-gb.html">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/dell-logo.svg" alt="" />
                        </div>
                        <a href="https://www.dell.com/en-uk">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/american-express-logo.svg" alt="" />
                        </div>
                        <a href="https://www.americanexpress.com/en-gb/">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/xero-logo.svg" alt="" />
                        </div>
                        <a href="https://www.xero.com/uk/">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/chase-logo.svg" alt="" />
                        </div>
                        <a href="https://www.chase.com/">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <div className="logoContainer">
                            <img src="assets/citi-logo.svg" alt="" />
                        </div>
                        <a href="https://www.citigroup.com/citi/">
                            <img id="circleYellow" src="assets/circleYellow.svg" alt="" />
                            <img id="circleBlue" src="assets/circleBlue.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
