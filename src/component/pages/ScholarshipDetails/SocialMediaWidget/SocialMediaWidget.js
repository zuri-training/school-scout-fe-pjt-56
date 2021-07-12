import { Link } from "react-router-dom";
import './SocialMediaWidget.css'
import whatsapp from './images/whatsapp.svg'
import instagram from './images/instagram.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import copy from './images/copy.svg'

const SocialMediaWidget = () => {
    return (
        <div className="social-widget-container">
            <Link className="social-media-btn-link">CLICK HERE TO APPLY</Link>
            <div className="social-media-links">
                <p className="social-share">SHARE:</p>
                <Link to=""><img src={ whatsapp } alt="" /></Link>
                <Link to=""><img src={ instagram } alt="" /></Link>
                <Link to=""><img src={ facebook } alt="" /></Link>
                <Link to=""><img src={ twitter } alt="" /></Link>
            </div>
            <div className="social-media-copy-link">
                <p className="social-copy">COPY LINK</p>
                <Link to=""><img src={ copy } alt="" /></Link>
            </div>
        </div>
    );
}
 
export default SocialMediaWidget;