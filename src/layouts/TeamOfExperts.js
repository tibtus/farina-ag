import React from 'react';

import HeaderTwo from "../views/HeaderTwo";
import img_1 from "../assets/img/Image_1.png";
import img_2 from "../assets/img/Image_2.png";
import img_3 from "../assets/img/Image_3.png";


const TeamOfExperts = () => {
    return (
        <div>
            <HeaderTwo/>

            <div className="TeamOfExperts">
                <div className="TeamOfExperts_Name">
                    OUR TEAM OF EXPERTS
                </div>
                <div className="TeamOfExperts_Person one">
                    <img src={img_1} alt="Vladyslav Bilopukhov"/>
                    <div className="TeamOfExperts_Person_text">Vladyslav Bilopukhov - <br/>
                        Management Board, <br/>
                        graduate civil engineer
                    </div>
                </div>
                <div className="TeamOfExperts_Person two">
                    <img src={img_2} alt="lgor Liedienov"/>
                    <div className="TeamOfExperts_Person_text">lgor Liedienov - Certified engineer <br/>
                        of construction machines <br/>
                        and mechanisms
                    </div>

                </div>
                <div className="TeamOfExperts_Person three">
                    <img src={img_3} alt="Oleksii Tarasenko"/>
                    <div className="TeamOfExperts_Person_text">Oleksii Tarasenko - Graduate <br/>
                        civil engineer
                    </div>
                </div>
            </div>


        </div>
    );
}

export default TeamOfExperts;
