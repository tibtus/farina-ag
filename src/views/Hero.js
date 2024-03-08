import React from 'react';
import frame from './../assets/png/Frame_4_desc.jpg';
import {useLanguage} from "../Language";

const Hero = () => {
    const {currentLanguage} = useLanguage();

    return (
        <section className="heroBlock">
            <div className="heroBlock_logo"  style={{ backgroundImage: `url(${frame})` }}>
                {/*<img src={frame} alt="frame" />*/}

                <div className="heroBlock_text" style={{whiteSpace: 'pre-line'}}>
                    {currentLanguage === 'de'
                        ? 'Ihr zuverlässiger Partner für Konstruktion\n' +
                        'und Entwicklun'
                        : 'Your reliable partner in construction\n' +
                        'and development'
                    }
                </div>
            </div>
        </section>
    );
};

export default Hero;
