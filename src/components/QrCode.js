// import React from "react";
import QrCodeImage from "./QrCodeImage";
import './QrCode.css'

function QrCode(){
    return(
        <div className="qr-container">
            <div className="img-wrap">
                <QrCodeImage />
            </div>
            <div className="text-wrap">
                <h4 className="title">Improve your front-end <br /> skills by building projects</h4>
                <h5 className="text">
                    Scan the QR code to visit Frontend 
                    Mentor and take your coding still to 
                    the next level
                </h5>
            </div>
        </div>
    )
}

export default QrCode;