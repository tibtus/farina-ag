import React, {useEffect, useState} from 'react';
import logo from './../assets/png/farina_logo.png';

const Header = () => {

    const [currentLanguage, setCurrentLanguage] = useState('en');
    const [languageModalVisible, setLanguageModalVisible] = useState(false);

    useEffect(() => {
        updatePageContent();
        // eslint-disable-next-line
    }, [currentLanguage]);

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
        setLanguageModalVisible(false);
    };

    const updatePageContent = () => {
        const elements = document.querySelectorAll('[data-en], [data-de], [data-ua]');

        elements.forEach((element) => {
            const text = element.getAttribute(`data-${currentLanguage}`);
            element.textContent = text;
        });
    };

    const openLanguageModal = () => {
        if (languageModalVisible === true) {
            setLanguageModalVisible(false);
        } else {
            setLanguageModalVisible(true);
        }
    };

    return (
        <header className="headerBlock">
            <div className="headerBlock_logo">
                <a href="/">
                    <img src={logo} alt="farina_logo"/>
                </a>
            </div>
            <div className="headerBlock_nav">

                <div className="headerBlock_select">

                    <div><a href="#AboutUs" data-de="Über uns" data-en="About Us">About Us</a></div>

                    <div><a href="#OurStrhengths">Our Strenghts</a></div>
                    <div><a href="#OurTeamExperts">Our team of experts</a></div>
                    <div></div>
                    <div><a href="#WhatWeDo">What we do</a></div>
                    <div><a href="#OurPhilosophy">Our philosophy</a></div>
                </div>


                <div className="headerBlock_language">
                    <div className="languageSelectorContainer">
                        <div onClick={openLanguageModal}>
                            <div className="languageSelectorButton"></div>
                        </div>
                        <div className={`modalnewlang ${languageModalVisible ? 'visible' : ''}`} id="modalLanguage">
                            <div className="modal-content-lang">

                                <div className="language-options">
                                    <div onClick={() => changeLanguage('en')}>EN</div>
                                    <div onClick={() => changeLanguage('de')}>GE</div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </header>
    );
}

export default Header;
