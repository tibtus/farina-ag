import React from 'react';
import frame_1 from "../assets/png/access_svgrepo.com_1.png";
import frame_2 from "../assets/png/access_svgrepo.com_2.png";
import frame_3 from "../assets/png/access_svgrepo.com_3.png";
import frame_5 from "../assets/png/access_svgrepo.com_5.png";


const OurStrhengths = () => {


    return (
        <section className="OurStrhengths_Block" id="OurStrhengths">
            <div className="OurStrhengths_Name">
                OUR STRENGTHS
            </div>
            <div className="OurStrhengths_Grid">
                <img src={frame_1} alt="frame"/>
                <img src={frame_2} alt="frame"/>

                <img src={frame_3} alt="frame"/>
                <img src={frame_2} alt="frame"/>

                <img src={frame_5} alt="frame"/>
            </div>

        </section>
    );
}

export default OurStrhengths;
