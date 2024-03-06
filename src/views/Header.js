import React, {useEffect, useState} from 'react';
import logo from './../assets/png/farina_logo.png';
import {useLanguage} from "../Language";

const Header = () => {
    const {currentLanguage, changeLanguage} = useLanguage();
    const [languageModalVisible, setLanguageModalVisible] = useState(false);

    useEffect(() => {
        updatePageContent();
        // eslint-disable-next-line
    }, [currentLanguage]);

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

                    <div><a href="#OurStrhengths" data-de="Unser Expertenteam" data-en="Our Strenghts">Our Strenghts</a>
                    </div>
                    <div><a href="#OurTeamExperts" data-de="Unsere Stärken" data-en="Our team of experts">Our team of
                        experts</a></div>
                    <div></div>
                    <div><a href="#WhatWeDo" data-de="Unsere Leistungen" data-en="What we do">What we do</a></div>
                    <div><a href="#OurPhilosophy" data-de="Unsere Philosophie" data-en="Our philosophy">Our
                        philosophy</a></div>
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
