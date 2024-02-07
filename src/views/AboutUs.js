import React from 'react';
import frame from './../assets/png/Frame_3.png';

const AboutUs = () => {


    return (
        <section className="AboutUsBlock">

            <div className="AboutUsBlock_Name">
                About Us
            </div>
            <div className="AboutUsBlock_Graf">
                <img src={frame} alt="frame"/>
            </div>

        </section>
    );
}

export default AboutUs;
