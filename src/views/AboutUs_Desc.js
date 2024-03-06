import React from 'react';
import frame from './../assets/png/construction-plans-and-drawing-tools-on-blueprints 1.png';

const AboutUsDesc = () => {


    return (
        <section className="AboutUs_DescBlock">

            <div className="AboutUs_Desc_Img">
                <img src={frame} alt="frame"/>
            </div>

            <div className="AboutUs_Desc_Text"
                 data-de="Wir planen und führen Ihre Projekte sorgfältig und effizient durch und sorgen für Ihren Geschäftserfolg und eine Partnerschaft,
                 auf der Sie bauen können. Wir verpflichten uns, unsere Dienstleistungen pünktlich und effizient zu erbringen und für eine nachhaltige Zukunft zu sorgen."
                 data-en="We are committed to meticulous planning and effective execution of your projects,
                with a dedication to your business success and a partnership you can trust.
                We aim to deliver our services in a timely and efficient manner, with a sustainable future in mind."
            >
                We are committed to meticulous planning and effective execution of your projects,
                with a dedication to your business success and a partnership you can trust.
                We aim to deliver our services in a timely and efficient manner, with a sustainable future in mind.
            </div>

        </section>
    );
}

export default AboutUsDesc;
