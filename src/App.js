import React from 'react';
import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom';

import Main from "./layouts/Main";
import CivilEngineeringWorks from "./layouts/CivilEngineeringWorks";
import TeamOfExperts from "./layouts/TeamOfExperts";
import RefurbishmentFacadeWorks from "./layouts/RefurbishmentFacadeWorks";

function App() {
    return (
        <Router>
            <div className="App wrapper">


            <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/TeamOfExperts" element={<TeamOfExperts/>}/>
                    <Route path="/CivilEngineeringWorks" element={<CivilEngineeringWorks/>}/>
                <Route path="/RefurbishmentFacadeWorks" element={<RefurbishmentFacadeWorks/>}/>
                </Routes>


            </div>
        </Router>
    );
}

export default App;
