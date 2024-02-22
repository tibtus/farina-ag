import React from 'react';
import HeaderTwo from "../views/HeaderTwo";
import img_4 from "../assets/img/Image_4.png";
import img_5 from "../assets/img/Image_5.png";
import img_6 from "../assets/img/Image_6.png";
import img_7 from "../assets/img/Image_7.png";
import img_8 from "../assets/img/Image_8.png";
import img_9 from "../assets/img/Image_9.png";
import img_10 from "../assets/img/Image_10.png";

import FooterTwo from "../views/FooterTwo";

const CivilEngineeringWorks = () => {
    return (
        <div>
            <HeaderTwo/>

            <div className="CivilEngineeringWorks">
                <div className="CivilEngineeringWorks_Name">
                    Civil Engineering Works
                </div>
                <div className="CivilEngineeringWorks_Object one">
                    <img src={img_4} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right">
                        PushkinskiyApartments <br/>
                        Crimea, Ukraine <br/>
                    </div>
                </div>
                <div className="CivilEngineeringWorks_Object two">
                    <img src={img_5} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text left">
                        Business Center Dnipro, Ukraine
                    </div>

                </div>
                <div className="CivilEngineeringWorks_Object three">
                    <img src={img_6} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right">
                        Appolo Mall<br/>
                        Dnipro, Ukraine
                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object four">
                    <img src={img_7} alt="CivilEngineeringWorks_Object "/>
                    <div className="CivilEngineeringWorks_Object_text left">
                        Axelhof BoutiqueHotel <br/>
                        Dnipro, Ukraine
                    </div>


                </div>

                <div className="CivilEngineeringWorks_Object five">

                    <div className="CivilEngineeringWorks_Object_text right">
                        <span>
                            Amsterdam Residential  <br/>
                            Complex <br/>
                            Dnipro, Ukraine
                        </span>
                    </div>

                    <img src={img_8} alt="CivilEngineeringWorks_Object"/>
                </div>


                <div className="CivilEngineeringWorks_Object six">
                    <img src={img_9} alt="CivilEngineeringWorks_Object "/>
                    <div className="CivilEngineeringWorks_Object_text left">
                        Dr SteinholzDacha <br/>
                        Residential Complex <br/>
                        Alushta, Ukraine
                    </div>


                </div>

                <div className="CivilEngineeringWorks_Object seven">

                    <div className="CivilEngineeringWorks_Object_text right">
                        <span>
                            Residential Building <br/>
                            Dnipro, Ukraine
                        </span>
                    </div>

                    <img src={img_10} alt="CivilEngineeringWorks_Object"/>
                </div>
            </div>


            <FooterTwo/>


        </div>
    );
}

export default CivilEngineeringWorks;
