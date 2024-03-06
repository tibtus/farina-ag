import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import Main from "./layouts/Main";
import CivilEngineeringWorks from "./layouts/CivilEngineeringWorks";
import TeamOfExperts from "./layouts/TeamOfExperts";
import RefurbishmentFacadeWorks from "./layouts/RefurbishmentFacadeWorks";
import {LanguageProvider} from "./Language";

function App() {
    return (
        <Router>
            <LanguageProvider>
                <div className="App wrapper">
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/TeamOfExperts" element={<TeamOfExperts/>}/>
                        <Route path="/CivilEngineeringWorks" element={<CivilEngineeringWorks/>}/>
                        <Route path="/RefurbishmentFacadeWorks" element={<RefurbishmentFacadeWorks/>}/>
                    </Routes>
                </div>
            </LanguageProvider>
        </Router>
    );
}

export default App;
