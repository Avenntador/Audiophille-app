import './Footer.scss';
import Nav from '../Nav/Nav';


let AppLogo = 'assets/shared/desktop/logo.svg';
let FB = 'assets/shared/desktop/icon-facebook.svg';
let Inst = 'assets/shared/desktop/icon-instagram.svg';
let Twitter = 'assets/shared/desktop/icon-twitter.svg';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__text">
                    <img src={AppLogo} alt="logo" />
                    <p className="paragraph">
                        Audiophile is an all in one stop to fulfill your audio needs. We're a small team <br /> of music lovers and sound specialists who are devoted to helping you get the <br /> most out of personal audio. Come and visit our demo facility - we're open 7 <br /> days a week.
                    </p>
                    <p className="paragraph">Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="footer__nav">
                    <Nav />
                    <div className="social">
                        <img src={FB} alt="facebook" />
                        <img src={Twitter} alt="twitter" />
                        <img src={Inst} alt="instagramm" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;