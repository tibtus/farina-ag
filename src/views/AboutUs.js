import React from 'react';
import frameEN from './../assets/png/Frame_3_EN.png';
import frameDE from './../assets/png/Frame_3_DE.png';

const AboutUs = ({language}) => {
    const imageSrc = language === 'de' ? frameDE : frameEN;

    return (
        <section className="AboutUsBlock" id="AboutUs">
            <div className="AboutUsBlock_Name" data-de="Über uns" data-en="About Us">
                {language === 'de' ? 'Über uns' : 'About Us'}
            </div>
            <div className="AboutUsBlock_Graf">
                <img src={imageSrc} alt="frame"/>
            </div>
        </section>
    );
}

export default AboutUs;
