import React from 'react';
import SmallLine from '../AboutUs/SmallLine';
import './ContactUsTeamCard.css';

const ContactUsTeamCard = ({ name, title, image }) => {
    return (
        <div className='employeeCardContainer'>
            <img src={image} className="employeeImage" alt="employeeImage" />
            <div className="employeeName">{name}</div>
            <SmallLine />
            <div className="employeeTitle">{title}</div>
        </div>
    )
}

export default ContactUsTeamCard