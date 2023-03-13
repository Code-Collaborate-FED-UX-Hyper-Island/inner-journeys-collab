import React from 'react';
import './ConcertsContainer.css';

import ConcertCard from './ConcertCard';


const ConcertsContainer = () => {
    return (
        <div className='ConcertContainer'>

            {/* <div className='ConcertContainer-title'>
               <h1>Konserter</h1>
            </div>*/}

            <div className='ConcertContainer-grid'>
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
                < ConcertCard />
            </div>

        </div>
    )
}

export default ConcertsContainer;