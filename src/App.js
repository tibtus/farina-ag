import React from 'react';
import {BrowserRouter as Router,} from 'react-router-dom';

import Header from './views/Header';
import Footer from './views/Footer';
import Hero from "./views/Hero";
import AboutUs from "./views/AboutUs";
import AboutUsDesc from "./views/AboutUs_Desc";
import OurTeamExperts from "./views/OurTeamExperts";
import OurStrhengths from "./views/OurStrhengths";
import WhatWeDo from "./views/WhatWeDo";
import OurPhilosophy from "./views/OurPhilosophy";
// import About from './layouts/About';
// import Main from './layouts/Main';
// import OsnovniPraktyky from "./layouts/OsnovniPraktyky";

function App() {
    return (
        <Router>
            <div className="App wrapper">
                <Header/>
                <Hero/>
                <AboutUs/>
                <AboutUsDesc/>
                <OurTeamExperts />
                <OurStrhengths/>
                <WhatWeDo/>
                <OurPhilosophy/>

                {/*<Routes>*/}
                {/*    <Route path="/" element={<Main/>}/>*/}
                {/*    <Route path="/about" element={<About/>}/>*/}
                {/*    <Route path="/osnovnipraktyky" element={<OsnovniPraktyky/>}/>*/}
                {/*</Routes>*/}

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
