import React, {useState} from 'react';
import HeaderTwo from "../views/HeaderTwo";
import img_4 from "../assets/img/Image_4.png";
import img_5 from "../assets/img/Image_5.png";
import img_6 from "../assets/img/Image_6.png";
import img_7 from "../assets/img/Image_7.png";
import img_8 from "../assets/img/Image_8.png";
import img_9 from "../assets/img/Image_9.png";
import img_10 from "../assets/img/Image_10.png";

import FooterTwo from "../views/FooterTwo";
import Modal from "react-modal";
import {useLanguage} from "../Language";

const CivilEngineeringWorks = () => {

    const {currentLanguage} = useLanguage();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
    };

    return (
        <div>
            <HeaderTwo/>

            <div className="CivilEngineeringWorks">
                <div className="CivilEngineeringWorks_Name"
                >
                    {currentLanguage === 'de' ? 'Tiefbau' : 'Civil Engineering Works'}
                </div>
                <div className="CivilEngineeringWorks_Object one" onClick={() => openModal(img_4)}>
                    <img src={img_4} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right" style={{whiteSpace: 'pre-line'}}>
                        {currentLanguage === 'de'
                            ? 'Puschkinskij Wohnungen\nKrim, Ukraine'
                            : 'PushkinskiyApartments\nCrimea, Ukraine'
                        }
                    </div>

                </div>
                <div className="CivilEngineeringWorks_Object two" onClick={() => openModal(img_5)}>
                    <img src={img_5} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text left" style={{whiteSpace: 'pre-line'}}>

                        {currentLanguage === 'de'
                            ? 'Geschäftszentrum\n' +
                            'Dnipro, Ukraine'
                            : 'Business Center Dnipro, Ukraine'
                        }
                    </div>

                </div>
                <div className="CivilEngineeringWorks_Object three" onClick={() => openModal(img_6)}>
                    <img src={img_6} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right" style={{whiteSpace: 'pre-line'}}>

                        {currentLanguage === 'de'
                            ? 'Appolo Einkaufszentrum\n' +
                            'Dnipro, Ukraine'
                            : '                        Appolo Mall\n' +
                            '                        Dnipro, Ukraine'
                        }


                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object four" onClick={() => openModal(img_7)}>
                    <img src={img_7} alt="CivilEngineeringWorks_Object "/>
                    <div className="CivilEngineeringWorks_Object_text left" style={{whiteSpace: 'pre-line'}}>


                        {currentLanguage === 'de'
                            ? 'Axelhof Boutique Hotel\n' +
                            'Dnipro, Ukraine'
                            : 'Axelhof BoutiqueHotel\n' +
                            'Dnipro, Ukraine'
                        }
                    </div>


                </div>

                <div className="CivilEngineeringWorks_Object five" onClick={() => openModal(img_8)}>

                    <div className="CivilEngineeringWorks_Object_text right" style={{whiteSpace: 'pre-line'}}>
                        <span>
                        {currentLanguage === 'de'
                            ? 'Amsterdam Wohnkomplex\n' +
                            'Dnipro, Ukraine'
                            : 'Amsterdam Residential\n' +
                            'Complex \n' +
                            'Dnipro, Ukraine'
                        }
                        </span>
                    </div>

                    <img src={img_8} alt="CivilEngineeringWorks_Object"/>
                </div>


                <div className="CivilEngineeringWorks_Object six" onClick={() => openModal(img_9)}>
                    <img src={img_9} alt="CivilEngineeringWorks_Object "/>
                    <div className="CivilEngineeringWorks_Object_text left" style={{whiteSpace: 'pre-line'}}>

                        {currentLanguage === 'de'
                            ? 'Dr. Steinholz Dacha\n' +
                            ' Residential Complex\n' +
                            'Aluschta, Ukraine'
                            : 'Dr SteinholzDacha\n' +
                            'Residential Complex \n' +
                            'Alushta, Ukraine'
                        }

                    </div>


                </div>

                <div className="CivilEngineeringWorks_Object seven" onClick={() => openModal(img_10)}>

                    <div className="CivilEngineeringWorks_Object_text right" style={{whiteSpace: 'pre-line'}}>
                        <span>

                        {currentLanguage === 'de'
                            ? 'Wohngebäude\n' +
                            ' Dnipro, Ukraine'
                            : 'Residential Building\n' +
                            'Dnipro, Ukraine'
                        }

                        </span>
                    </div>

                    <img src={img_10} alt="CivilEngineeringWorks_Object"/>
                </div>
            </div>


            <FooterTwo/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
            >
                <img src={selectedImage} alt="Modal"/>
                <button onClick={closeModal}>Close Modal</button>

            </Modal>

        </div>
    );
}

export default CivilEngineeringWorks;
