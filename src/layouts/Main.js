import React from 'react';
import Hero from "../views/Hero";
import AboutUs from "../views/AboutUs";
import AboutUsDesc from "../views/AboutUs_Desc";
import OurTeamExperts from "../views/OurTeamExperts";
import OurStrhengths from "../views/OurStrhengths";
import WhatWeDo from "../views/WhatWeDo";
import OurPhilosophy from "../views/OurPhilosophy";
import Header from "../views/Header";
import Footer from "../views/Footer";


const Main = () => {
    return (
        <main>
            <Header/>
            <Hero/>
            <AboutUs/>
            <AboutUsDesc/>
            <OurTeamExperts/>
            <OurStrhengths/>
            <WhatWeDo/>
            <OurPhilosophy/>
            <Footer/>
        </main>
    );
}

export default Main;
