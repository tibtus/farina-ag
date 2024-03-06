import React from 'react';
import frame from "../assets/png/Arrow1.png";
import {Link} from "react-router-dom";
import {useLanguage} from "../Language";

const OurTeamExperts = () => {
    const {currentLanguage} = useLanguage();

    return (
        <section className="OurTeamExperts_Block" id="OurTeamExperts">

            <div className="OurTeamExperts_Left"
                 data-de="UNSER EXPERTENTEAM"
                 data-en="OUR TEAM OF EXPERTS"
            >
                OUR TEAM OF EXPERTS
            </div>

            <div className="OurTeamExperts_Right"
            > {currentLanguage === 'de'
                ? 'Unsere hochqualifizierte und zertifizierte Fachleute verbinden fundierte Branchenkenntnisse mit jahrelanger praktischer Erfahrung,\n' +
                ' um unsere Kunden bei der Verwirklichung ihrer spezifischen Ziele zu unterstützen.'
                : 'Highly qualified and certified, our team couples deep industry knowledge with years of hands-on experience to help our clients achieve their particular goals.'
            }
                <div className="OurTeamExperts_Right_Link">
                    <Link to="/TeamOfExperts">
                        <img src={frame} alt="frame"/>
                        <span className="OurTeamExperts_Right_Link_text"
                              data-de="mehr sehe"
                              data-en="see more"
                        >see more</span>
                    </Link>
                </div>
            </div>

        </section>
    );
}

export default OurTeamExperts;
