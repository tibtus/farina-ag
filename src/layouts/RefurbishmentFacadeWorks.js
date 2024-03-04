import React, {useState} from 'react';
import Modal from 'react-modal';
import HeaderTwo from "../views/HeaderTwo";
import img_21 from "../assets/img/Image_2_1.png";
import img_22 from "../assets/img/Image_2_2.png";
import img_23 from "../assets/img/Image_2_3.png";
import img_24 from "../assets/img/Image_2_4.png";
import img_25 from "../assets/img/Image_2_5.png";
import img_26 from "../assets/img/Image_2_6.png";


import FooterTwo from "../views/FooterTwo";


const RefurbishmentFacadeWorks = () => {

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

            <div className="CivilEngineeringWorks Works">
                <div className="CivilEngineeringWorks_Name">
                    Refurbishment and Facade Works
                </div>

                <div className="CivilEngineeringWorks_Object six Works" onClick={() => openModal(img_21)}>
                    <img src={img_21} alt="CivilEngineeringWorks_Object "/>
                    <div className="CivilEngineeringWorks_Object_text left">
                        Cinema hall, Ukraine
                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object three Works" onClick={() => openModal(img_22)}>
                    <img src={img_22} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right">
                        Entrance of business center, Ukraine
                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object two Works" onClick={() => openModal(img_23)}>
                    <img src={img_23} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text left">
                        Apartments
                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object three WorksPlus" onClick={() => openModal(img_24)}>
                    <img src={img_24} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right">
                        Shopping center, Ukraine
                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object two WorksPlus" onClick={() => openModal(img_25)}>
                    <img src={img_25} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text left">
                        Apartments
                    </div>
                </div>

                <div className="CivilEngineeringWorks_Object three WorksPlusTwo" onClick={() => openModal(img_26)}>
                    <img src={img_26} alt="CivilEngineeringWorks_Object"/>
                    <div className="CivilEngineeringWorks_Object_text right">
                        Apartments
                    </div>
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

export default RefurbishmentFacadeWorks;
