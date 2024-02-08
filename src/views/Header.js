import React from 'react';
import logo from './../assets/png/farina_logo.png';

const Header = () => {


    return (
        <header className="headerBlock">
            <div className="headerBlock_logo">
                <a href="/">
                    <img src={logo} alt="farina_logo"/>
                </a>
            </div>
            <div className="headerBlock_nav">

                <div className="headerBlock_select">
                    <div><a href="/">About Us</a></div>
                    <div><a href="/">Our Strenghts</a></div>
                    <div><a href="/">Our team of experts</a></div>
                    <div></div>
                    <div><a href="/">What we do</a></div>
                    <div><a href="/">Our philosophy</a></div>
                </div>

                <div className="headerBlock_language">
                    <div id="google_translate_element">
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
