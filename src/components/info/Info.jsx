import "./info.scss"
import React from 'react'

export default function Info() {
    return (
        <div className="info">
            <img id="sideCircle" src="assets/side-circle-1.svg" alt="" />
            <img id="sideCircleRight" src="assets/side-circle-1.svg" alt="" />
            <div className="left">
            <div className="circle"></div>
                <img id="phone" src="assets/phone.svg" alt="" />
                <img id="phoneGrey" src="assets/phone-grey.svg" alt="" />
                <img id="phoneCard" src="assets/phone-card.svg" alt="" />
                <img id="phonePay" src="assets/phone-pay.svg" alt="" />
                <img id="phoneTick1" src="assets/phone-tick-1.svg" alt="" />
                <img id="phoneTick2" src="assets/phone-tick-2.svg" alt="" />
                <img id="phoneTick3" src="assets/phone-tick-3.svg" alt="" />
            </div>
            <div className="right">
                <div className="container">
                    <h1>BubblePay is incredibly fast &#38; smooth.</h1>
                    <h2 data-text="It just works. ">It just works.</h2>
                    <p>
                        Just simply enter your card details into our <span>secure encrypted network</span> and BubblePay 
                        will do all the heavy lifting! <span>Secure, fast</span> and <span>smooth</span> payments await you and your business!
                    </p>
                    <a href="#newsletter" className="button" >NEWSLETTER</a>
                </div>
            </div>
        </div>
    )
}
