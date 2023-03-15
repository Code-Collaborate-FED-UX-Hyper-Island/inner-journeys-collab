import React, { useRef } from "react";
import './ContactUsLedareContainer.css';
import team from "../../assets/team.json";
import { register } from "swiper/element/bundle";
import ContactUsLedareCard from "./ContactUsLedareCard";

register();

const ContactUsLedareContainer = () => {
    const swiperElRef = useRef(null);

    return (
        <div>
            <div className="titleContactUsLedare">Retreats Ledare</div>

            <div className="swiperContainer">
                <swiper-container
                    style={{
                        "--swiper-navigation-color": "#191919",
                        "--swiper-pagination-color": "#191919",
                    }}
                    ref={swiperElRef}
                    slides-per-view="3"
                    navigation="true"
                    pagination="true"
                    loop="true"
                >
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[0].name}
                            title={team[0].title}
                            image={team[0].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[1].name}
                            title={team[1].title}
                            image={team[1].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[2].name}
                            title={team[2].title}
                            image={team[2].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[3].name}
                            title={team[3].title}
                            image={team[3].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[4].name}
                            title={team[4].title}
                            image={team[4].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[5].name}
                            title={team[5].title}
                            image={team[5].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[6].name}
                            title={team[6].title}
                            image={team[6].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[7].name}
                            title={team[7].title}
                            image={team[7].image}
                        />
                    </swiper-slide>
                    <swiper-slide>
                        <ContactUsLedareCard
                            name={team[8].name}
                            title={team[8].title}
                            image={team[8].image}
                        />
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    )
}

export default ContactUsLedareContainer;