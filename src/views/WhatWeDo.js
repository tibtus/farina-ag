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

                <div className="WhatWeDo_Name"
                     data-de="UNSERE LEISTUNGEN"
                     data-en="WHAT WE DO"
                >
                    WHAT WE DO
                </div>

                <div className="WhatWeDo_Left_BorderBLock">
                    <div className="WhatWeDo_Left_img">
                        <a href="/" onClick={() => handleDownloadPDF(1)}>
                            <img src={frame_1} alt="img"/>
                        </a>
                    </div>
                    <span
                        data-de="Verglasung"
                        data-en="Glazing Solutions"
                    >
                        Glazing Solutions
                    </span>
                    <p
                        data-de="Wir stellen eine breite Palette von Verglasungssystemen für verschiedene Anwendungen her,
                        um den spezifischen Kundenbedürfnissen und architektonischen Anforderungen gerecht zu werden.
                        Die Produktion befindet sich in der Ukraine, im Werk Stekloplast, einem anerkannten Marktführer für hochsichere, energiesparende und wartungsfreundliche Lösungen."
                        data-en="We manufacture a wide range of glazing systems for a variety of applications to cater to specific
                        customer needs and architectural requirements.
                        The production is based in Ukraine,
                        at Stekloplast plant, a recognized leader in high-security, energy-saving and low-maintenance
                        solutions."
                    >We manufacture a wide range of glazing systems for a variety of applications to cater to specific
                        customer needs and architectural requirements.
                        The production is based in Ukraine,
                        at Stekloplast plant, a recognized leader in high-security, energy-saving and low-maintenance
                        solutions.</p>

                    <div className="WhatWeDo_Right_Link">
                        <Link to="/" onClick={() => handleDownloadPDF(1)}>
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text"
                                 data-de="mehr sehe"
                                 data-en="see more"
                            >
                                see more
                            </div>
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


                    <span
                        data-de="Sanierung und Fassadenbau"
                        data-en="Refurbishment and Facade Works"
                    >Refurbishment and Facade Works</span>
                    <p
                        data-de="Seit mehr als 15 Jahren verbessert und verfeinert unser erfahrenes Team aus Ausbaufachleuten seine Fähigkeiten,
                        indem es die neuesten technischen Entwicklungen berücksichtigt und der Energieeffizienz Priorität einräumt."
                        data-en="For more than 15 years, our team of experienced finishing workers has been enhancing and
                        refining their skills embracing the latest advancements in technology and prioritizing energy
                        efficiency."
                    >
                        For more than 15 years, our team of experienced finishing workers has been enhancing and
                        refining their skills embracing the latest advancements in technology and prioritizing energy
                        efficiency.</p>

                    <div className="WhatWeDo_Right_Link">
                        <Link to="/RefurbishmentFacadeWorks">
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text"
                                 data-de="mehr sehe"
                                 data-en="see more"
                            >see more
                            </div>
                        </Link>

                    </div>
                </div>


            </div>
            <div className="WhatWeDo_Right">

                <div className="WhatWeDo_Right_BorderBLock">
                    <div className="WhatWeDo_Right_img">

                        <img src={frame_2} alt="img"/>

                    </div>
                    <span
                        data-de="Modulbau"
                        data-en="Modular Construction"
                    >
                        Modular Construction</span>
                    <p
                        data-de="Modulbau mit OBBOX™! In den letzten zwei Jahrzehnten haben wir diese Technologie verfeinert,
                        um sicherzustellen, dass Sie den maximalen Vorteil aus dieser umweltfreundlicheren und schnelleren Bauweise ziehen können."
                        data-en="Modular construction using OBBOX™! Over the past two decades, we have fine-tuned this technology
                        to ensure you get the maximum benefit of this greener and faster way to build."
                    >Modular construction using OBBOX™! Over the past two decades, we have fine-tuned this technology
                        to ensure you get the maximum benefit of this greener and faster way to build.</p>
                </div>

                <div className="WhatWeDo_Right_BorderBLock">
                    <div className="WhatWeDo_Right_img">
                        <a href="/" onClick={() => handleDownloadPDF(2)}>
                            <img src={frame_3} alt="img"/>
                        </a>
                    </div>
                    <span
                        data-de="Wasserbau"
                        data-en="Hydro-Engineering Works"
                    >Hydro-Engineering Works</span>
                    <p
                        data-de="In enger Zusammenarbeit mit Tucurui Ltd. sind wir stolz auf unsere nachhaltige und verantwortungsvolle
                        Herangehensweise an jedes Projekt und garantieren die Qualität der Dienstleistungen und Lösungen."
                        data-en="Working in close partnership with Tucurui Ltd, we take pride in our sustainable and responsible
                        approach to each project and guarantee the excellence of services and solutions."
                    >Working in close partnership with Tucurui Ltd, we take pride in our sustainable and responsible
                        approach to each project and guarantee the excellence of services and solutions.</p>


                    <div className="WhatWeDo_Right_Link">
                        <Link to="/" onClick={() => handleDownloadPDF(2)}>
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text"
                                 data-de="mehr sehe"
                                 data-en="see more"
                            >see more
                            </div>
                        </Link>

                    </div>

                </div>

                <div className="WhatWeDo_Right_BorderBLock">
                    <div className="WhatWeDo_Right_img">

                        <Link to="/CivilEngineeringWorks">

                            <img src={frame_4} alt="img"/>
                        </Link>


                    </div>
                    <span
                        data-de="Tiefbau"
                        data-en="Civil Engineering Works"

                    >Civil Engineering Works</span>
                    <p
                        data-de="Unser Fachpersonal verfügt über mehr als 20 Jahre Erfahrung in der Durchführung von Projekten jeglicher Größe und Spezifikation."
                        data-en="Our professionals have more than 20 years of experience performing projects of all sizes,
                        specifications, and scopes in Ukraine."

                    >Our professionals have more than 20 years of experience performing projects of all sizes,
                        specifications, and scopes in Ukraine.</p>


                    <div className="WhatWeDo_Right_Link">
                        <Link to="/CivilEngineeringWorks">
                            <img src={frame} alt="frame"/>
                            <div className="WhatWeDo_Right_Link_text"
                                 data-de="mehr sehe"
                                 data-en="see more"
                            >see more
                            </div>
                        </Link>

                    </div>

                </div>
            </div>


        </section>
    );
}

export default WhatWeDo;
