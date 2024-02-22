import React from 'react';
import frame_1 from "../assets/png/image_12.svg";
import frame_2 from "../assets/png/image_9.svg";
import frame_3 from "../assets/png/image_10.svg";
import frame_4 from "../assets/png/image_11.svg";
import frame_5 from "../assets/png/image_13.svg";
import pdfFile_1 from "../assets/pdf/Brochure_FA_DE.pdf";
import pdfFile_2 from "../assets/pdf/TUCURUI_2024.pdf";
import {Link} from "react-router-dom";
import frame from "../assets/png/Arrow1.png";

// import frame from "../assets/png/Arrow1.png";

const WhatWeDo = () => {

    const handleDownloadPDF = (value) => {
        // Визначаємо URL PDF-файлу на основі значення value
        const pdfUrl = (value === 1) ? pdfFile_1 : pdfFile_2;

        // Відкриваємо PDF-файл на новій сторінці
        window.open(pdfUrl, '_blank');
    };


    return (
        <section className="WhatWeDo_Block" id="WhatWeDo">

            <div className="WhatWeDo_Left">

                <div className="WhatWeDo_Name">
                    WHAT WE DO
                </div>

                <div className="WhatWeDo_Left_BorderBLock">
                    <div className="WhatWeDo_Left_img">
                        <a href="/" onClick={() => handleDownloadPDF(1)}>
                            <img src={frame_1} alt="img"/>
                        </a>
                    </div>
                    <span>Glazing Solutions</span>
                    <p>We manufacture a wide range of glazing systems for a variety of applications to cater to specific
                        customer needs and architectural requirements.
                        The production is based in Ukraine,
                        at Stekloplast plant, a recognized leader in high-security, energy-saving and low-maintenance
                        solutions.</p>

                    <div className="WhatWeDo_Right_Link">
                        <Link to="/" onClick={() => handleDownloadPDF(1)}>
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text">see more</div>
                        </Link>

                    </div>
                </div>

                {/*tibtus*/}

                <div className="WhatWeDo_Left_BorderBLock frame5_dop">

                    <div className="WhatWeDo_Left_img">
                        <Link to="/RefurbishmentFacadeWorks">
                            <img src={frame_5} alt="img"/>
                        </Link>
                    </div>


                    <span>Refurbishment and Facade Works</span>
                    <p>For more than 15 years, our team of experienced finishing workers has been enhancing and
                        refining their skills embracing the latest advancements in technology and prioritizing energy
                        efficiency.</p>

                    <div className="WhatWeDo_Right_Link">
                        <Link to="/RefurbishmentFacadeWorks">
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text">see more</div>
                        </Link>

                    </div>
                </div>


            </div>
            <div className="WhatWeDo_Right">

                <div className="WhatWeDo_Right_BorderBLock">
                    <div className="WhatWeDo_Right_img">

                        <img src={frame_2} alt="img"/>

                    </div>
                    <span>Modular Construction</span>
                    <p>Modular construction using OBBOX™! Over the past two decades, we have fine-tuned this technology
                        to ensure you get the maximum benefit of this greener and faster way to build.</p>
                </div>

                <div className="WhatWeDo_Right_BorderBLock">
                    <div className="WhatWeDo_Right_img">
                        <a href="/" onClick={() => handleDownloadPDF(2)}>
                            <img src={frame_3} alt="img"/>
                        </a>
                    </div>
                    <span>Hydro-Engineering Works</span>
                    <p>Working in close partnership with Tucurui Ltd, we take pride in our sustainable and responsible
                        approach to each project and guarantee the excellence of services and solutions.</p>


                    <div className="WhatWeDo_Right_Link">
                        <Link to="/" onClick={() => handleDownloadPDF(2)}>
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text">see more</div>
                        </Link>

                    </div>

                </div>

                <div className="WhatWeDo_Right_BorderBLock">
                    <div className="WhatWeDo_Right_img">

                        <Link to="/CivilEngineeringWorks">

                            <img src={frame_4} alt="img"/>
                        </Link>


                    </div>
                    <span>Civil Engineering Works</span>
                    <p>Our professionals have more than 20 years of experience performing projects of all sizes,
                        specifications, and scopes in Ukraine.</p>


                    <div className="WhatWeDo_Right_Link">
                        <Link to="/CivilEngineeringWorks">
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text">see more</div>
                        </Link>

                    </div>

                </div>
            </div>


        </section>
    );
}

export default WhatWeDo;
