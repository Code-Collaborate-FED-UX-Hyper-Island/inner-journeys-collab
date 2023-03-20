import React from 'react'
import './footer.css'
import backgroundImage from '../../assets/images/bjornbakca-garden-2200px.png';
import facebookImage from '../../assets/images/facebook.svg';
import instagramImage from '../../assets/images/instagram.svg';
import footerLogo from '../../assets/images/Ellipse13.svg';

export default function Footer(props) {
    return (
        <div className='footer'>
            <img className="footer-image" src={backgroundImage} alt='footer-img' />
            <div className='footer-info'>
                <div className='sub-section-a'>
                    <p className='footer-title'>Kontakt</p>
                    <p className='footer-text'>Bokning: {props.phoneNumber}</p>
                    <p className='footer-text'>Mail: {props.mail}</p>
                    <br></br>
                    <br></br>
                    <p className='footer-text'>Besöksadress:</p>
                    <p className='footer-text'>{props.adress}</p>
                    <br></br>
                    <br></br>
                    <p className='footer-text'>Ytterligare resurser:</p>
                    <a href={props.faq}><p className='footer-text'>FAQ</p></a>
                    <a href={props.privatepolicy}><p className='footer-text'>Private Policy</p></a>
                    <a href={props.cancellationpolicy}><p className='footer-text'>Cancellation policy</p></a>
                    <a href={props.terms}><p className='footer-text'>Terms and conditions</p></a>
                </div>
                <div className='sub-section-b'>
                    <a href={props.facebook}><img className="social-media-icons" src={facebookImage} alt='facebook-img' /></a>
                    <a href={props.instagram}><img className="social-media-icons" src={instagramImage} alt='instagram-img' /></a>
                </div>
                <div className='sub-section-c'>
                    <img className="footer-logo" src={footerLogo} alt='footer-logo' />
                </div>
            </div>
        </div>
    )
}