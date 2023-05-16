import codeImg from "../assets/images/image-qr-code.png"
import './QrCodeImage.css'
function QrCodeImage(){
    return(
        <div className="qrcode-image">
            <img src={codeImg} alt="qrcode" />
        </div>
    )
}

export default QrCodeImage;