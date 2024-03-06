import React from 'react';

import frame_2 from "../assets/png/access_svgrepo.com_2.png";

import frame_1_EN from "../assets/png/access_svgrepo.com_1_EN.png";
import frame_1_DE from "../assets/png/access_svgrepo.com_1_GE.png";

import frame_3_EN from "../assets/png/access_svgrepo.com_3_EN.png";
import frame_3_DE from "../assets/png/access_svgrepo.com_3_GE.png";

import frame_5_EN from "../assets/png/access_svgrepo.com_5_EN.png";
import frame_5_DE from "../assets/png/access_svgrepo.com_5_GE.png";
import {useLanguage} from "../Language";


const OurStrhengths = () => {

    const {currentLanguage} = useLanguage();
    const imageSrc_1 = currentLanguage === 'de' ? frame_1_DE : frame_1_EN;
    const imageSrc_3 = currentLanguage === 'de' ? frame_3_DE : frame_3_EN;
    const imageSrc_5 = currentLanguage === 'de' ? frame_5_DE : frame_5_EN;

    return (
        <section className="OurStrhengths_Block" id="OurStrhengths">
            <div className="OurStrhengths_Name"
                 data-de="UNSERE STÄRKEN"
                 data-en="OUR STRENGTHS"
            >
                OUR STRENGTHS
            </div>
            <div className="OurStrhengths_Grid">
                <img src={imageSrc_1} alt="frame"/>
                <img src={frame_2} alt="frame"/>

                <img src={imageSrc_3} alt="frame"/>
                <img src={frame_2} alt="frame"/>

                <img src={imageSrc_5} alt="frame"/>
            </div>

        </section>
    );
}

export default OurStrhengths;
