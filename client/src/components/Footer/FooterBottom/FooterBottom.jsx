import React from "react";
import logoFacebook from "../../../assets/icons8-facebook-30.png";
import logoLinkedin from "../../../assets/icons8-linkedin-30.png";
import logoInstagram from "../../../assets/icons8-instagram-50.png";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="socialApps-container">
                <a href="https://www.facebook.com/people/Beyond-Education-ES/100063540002514/" target="_blank">
                    <img src={logoFacebook} alt="" className="logos" />
                </a>
                <a href="https://www.linkedin.com/company/beyond-education-es/" target="_blank">
                    <img src={logoLinkedin} alt="" className="logos" />
                </a>
                <a href="https://www.instagram.com/beyond_education_es/?hl=es" target="_blank">
                    <img src={logoInstagram} alt="" className="logos" />
                </a>
            </div>
            <div className="infoContact-container">
                <a href="https://www.google.com/maps/place/Beyond+Education,+S.+L./@40.4383114,-3.6802086,15z/data=!4m6!3m5!1s0xd4229e12092441f:0x82fc87131f06cac1!8m2!3d40.4383114!4d-3.6802086!16s%2Fg%2F11fm4bkz9_?sa=X&ved=2ahUKEwi6_IXq0PKBAxXUUaQEHb48DcUQ_BJ6BAgvEAA&hl=es&ved=2ahUKEwi6_IXq0PKBAxXUUaQEHb48DcUQ_BJ6BAg-EAs&entry=tts" target="_blank" className="links-infoContact">Castello 128, -1, Madrid, 28006</a>
                <span> &nbsp;|&nbsp; </span>
                <a href="" target="_blank" className="links-infoContact">info@beyondeducation.es</a>
                <span> &nbsp;|&nbsp; </span>
                <a href="" className="links-infoContact">+34 617 801 590</a>
            </div>
        </div>
    )
};

export default FooterBottom;