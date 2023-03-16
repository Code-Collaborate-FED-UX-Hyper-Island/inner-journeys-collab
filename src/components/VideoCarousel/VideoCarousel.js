import React from 'react';
import Tabs from './Tabs';

const src = 'https://youtu.be/Jx70OITA2nI';

const VideoCarousel = () => {
    return (
        <div>
            <div>VideoCarousel</div>
            <div> <Tabs tabsConfig={tabsConfig} /> </div>
        </div>
    )
}

const tabsConfig = [
    {
        label: "Tab1",
        content: "Fia - Shine (studioversion)",
        icon: "😍"
    },
    {
        label: "Tab2",
        content: "Content Panel 2",
        icon: "🤓"
    }
];


export default VideoCarousel;