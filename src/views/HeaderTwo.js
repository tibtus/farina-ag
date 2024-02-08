import React from 'react';
import logo from './../assets/png/farina_logo.png';

const HeaderTwo = () => {


    return (
        <header className="headerBlock">
            <div className="headerBlock_logo">
                <a href="/">
                    <img src={logo} alt="farina_logo"/>
                </a>
            </div>
        </header>
    );
}

export default HeaderTwo;
