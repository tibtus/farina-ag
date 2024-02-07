import React from 'react';
import frame from './../assets/png/Frame_4_desc.jpg';

const Hero = () => {
    return (
        <section className="heroBlock">
            <div className="heroBlock_logo"  style={{ backgroundImage: `url(${frame})` }}>
                {/*<img src={frame} alt="frame" />*/}

                <div className="heroBlock_text">
                    Your reliable partner in construction <br />
                    and development
                </div>
            </div>
        </section>
    );
};

export default Hero;
