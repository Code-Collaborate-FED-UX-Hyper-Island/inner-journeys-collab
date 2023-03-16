import React from 'react';
import './ContactUs.css';
import Line from '../LandingPage/Line';
import ContactUsTeamContainer from './ContactUsTeamContainer';
import ContactUsLedareContainer from './ContactUsLedareContainer';

const ContactUs = () => {
    return (
        <div>
            <ContactUsTeamContainer />
            <Line />
            <ContactUsLedareContainer />
        </div>
    )
}

export default ContactUs;