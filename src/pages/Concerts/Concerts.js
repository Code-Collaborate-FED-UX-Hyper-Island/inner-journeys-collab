import React from 'react';
import './Concerts.css';
import ConcertContainer from '../../components/ConcertsContainer/ConcertsContainer';
import Carousel from '../../components/Carousel/Carousel';

const Concerts = () => {
    return (
        <div>
            <Carousel />
            <ConcertContainer />
        </div>)
}

export default Concerts;