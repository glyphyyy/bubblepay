import "./partners.scss"
import React from 'react'

export default function Partners() {
    return (
        <div className="partners">
            <div className="container">
                <img id="sideCircleLeft" src="assets/dotsAlt.svg" alt="" />
                <img id="sideCircleRight" src="assets/dotsAlt.svg" alt="" />
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
                        <img src="assets/monzo-logo.svg" alt="" />
                        <a href="https://monzo.com/">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/visa-logo.svg" alt="" />
                        <a href="https://www.visa.co.uk/">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/mastercard-logo.svg" alt="" />
                        <a href="https://www.mastercard.co.uk/en-gb.html">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/dell-logo.svg" alt="" />
                        <a href="https://www.dell.com/en-uk">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/american-express-logo.svg" alt="" />
                        <a href="https://www.americanexpress.com/en-gb/">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/xero-logo.svg" alt="" />
                        <a href="https://www.xero.com/uk/">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/chase-logo.svg" alt="" />
                        <a href="https://www.chase.com/">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                    <div className="partnerItem">
                        <img src="assets/citi-logo.svg" alt="" />
                        <a href="https://www.citigroup.com/citi/">
                            <img id="circleDark" src="assets/circleDark.svg" alt="" />
                            <img id="circleLight" src="assets/circleLight.svg" alt="" />
                            <img id="circleArrow" src="assets/circleArrow.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
