import React, {useState} from 'react';

import HeaderTwo from "../views/HeaderTwo";
import Modal from 'react-modal';
import img_1 from "../assets/img/Image_1.png";
import img_2 from "../assets/img/Image_2.png";
import img_3 from "../assets/img/Image_3.png";
import FooterTwo from "../views/FooterTwo";
import {useLanguage} from "../Language";


const TeamOfExperts = () => {

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

            <div className="TeamOfExperts">
                <div className="TeamOfExperts_Name">

                    {currentLanguage === 'de'
                        ? 'UNSER EXPERTENTEAM'
                        : 'OUR TEAM OF EXPERTS'
                    }
                </div>
                <div className="TeamOfExperts_Person one" onClick={() => openModal(img_1)}>
                    <img src={img_1} alt="Vladyslav Bilopukhov"/>
                    <div className="TeamOfExperts_Person_text" style={{whiteSpace: 'pre-line'}}>

                        {currentLanguage === 'de'
                            ? 'Vladyslav Bilopukhov,\n' +
                            'Vorstand,\n' +
                            'Bauingenieur'
                            : 'VladyslavBilopukhov,\n' +
                            'Chairman of Board,\n' +
                            'Civil Engineer'
                        }

                    </div>
                </div>
                <div className="TeamOfExperts_Person two" onClick={() => openModal(img_2)}>
                    <img src={img_2} alt="lgor Liedienov"/>
                    <div className="TeamOfExperts_Person_text" style={{whiteSpace: 'pre-line'}}>

                        {currentLanguage === 'de'
                            ? 'lgor Liedienov,\n' +
                            'Baumaschineningenieur'
                            : 'lgor Liedienov,\n' +
                            'Construction Machinery Engineer'
                        }


                    </div>

                </div>
                <div className="TeamOfExperts_Person three" onClick={() => openModal(img_3)}>
                    <img src={img_3} alt="Oleksii Tarasenko"/>
                    <div className="TeamOfExperts_Person_text" style={{whiteSpace: 'pre-line'}}>
                        {currentLanguage === 'de'
                            ? 'Oleksii Tarasenko,\n' +
                            'Bauingenieur'
                            : 'OleksiiTarasenko,\n' +
                            'Civil Engineer'
                        }
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

export default TeamOfExperts;
