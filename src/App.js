import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import Header from './views/Header';
import Footer from './views/Footer';
import Main from "./layouts/Main";
import CivilEngineeringWorks from "./layouts/CivilEngineeringWorks";
import TeamOfExperts from "./layouts/TeamOfExperts";


function App() {
    return (
        <Router>
            <div className="App wrapper">
                <Header/>

                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/TeamOfExperts" element={<TeamOfExperts/>}/>
                    <Route path="/CivilEngineeringWorks" element={<CivilEngineeringWorks/>}/>
                </Routes>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
