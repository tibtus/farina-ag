import React from 'react';
import frame_1 from "../assets/png/image_12.png";
import frame_2 from "../assets/png/image_9.png";
import frame_3 from "../assets/png/image_10.png";
import frame_4 from "../assets/png/image_11.png";
import pdfFile_1 from "../assets/pdf/Brochure_FA_DE.pdf";
import pdfFile_2 from "../assets/pdf/TUCURUI_2024.pdf";
import {Link} from "react-router-dom";

const WhatWeDo = () => {

    const handleDownloadPDF = (value) => {
        // Створюємо посилання для завантаження PDF
        const link = document.createElement('a');
        if (value === 1) {
            link.href = pdfFile_1;
        } else {
            link.href = pdfFile_2;
        }

        link.download = 'document.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                </div>
            </div>


        </section>
    );
}

export default WhatWeDo;
