import React from 'react';
import frame from "../assets/png/Arrow1.png";

const OurTeamExperts = () => {


    return (
        <section className="OurTeamExperts_Block" id="OurTeamExperts">

            <div className="OurTeamExperts_Left">
                OUR TEAM OF EXPERTS
            </div>

            <div className="OurTeamExperts_Right">
               <span>Highly qualified and certified, our team couples deep industry knowledge with years of hands-on experience to help our clients achieve their particular goals.</span>
                <div className="OurTeamExperts_Right_Link">

                    <a href="/"><img src={frame} alt="frame"/> see more</a>
                </div>
            </div>

        </section>
    );
}

export default OurTeamExperts;
