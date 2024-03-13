import React, {useState} from 'react';
import {useLanguage} from "../Language";
import frame from "../assets/png/Arrow1.png";
import pdfFile_3 from "../assets/pdf/agb-Farina_01_24.pdf";
import img_1 from "../assets/png/Frame17.png";
import Modal from "react-modal";

const Footer = () => {
    const {currentLanguage} = useLanguage();
    const handleDownloadPDF = (value) => {
        const pdfUrl = (value === 3) ? pdfFile_3 : pdfFile_3;
        window.open(pdfUrl, '_blank');
    };
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
        <>
            <footer className="Footer_divBot">


                <div className="Bottom_Block_tel">
                    email: <a href="mailto:info@farina-ag.de">info@farina-ag.de</a> <br/>
                    www.farina-ag.de
                </div>


                <div className="Bottom_Block_id">
                    USt-IdNr: DE363846866 <br/>
                    UIC: HRB 103301 <br/>


                </div>

                <div className="Bottom_Block_address">
                    Grafenberger Allee 277-287,<br/>
                    40237 Düsseldorf <br/>
                    {currentLanguage === 'de'
                        ? 'Deutschland'
                        : 'Germany'
                    }
                </div>


            </footer>

            <footer className="Footer_divBot DopFooterEventy">

                <div className="OurTeamExperts_Right_Link">

                    <div onClick={() => openModal(img_1)}>
                    <span className="OurTeamExperts_Right_Link_text DopFooter"
                          data-de="Impressum"
                          data-en="Impressum"
                    >Impressum </span>
                    </div>
                    <div className="Frame_DopFooter" onClick={() => openModal(img_1)}>
                        <img src={frame} alt="frame"/>
                    </div>

                </div>

                <div className="OurTeamExperts_Right_Link">

                    <a href="/" onClick={() => handleDownloadPDF(3)}>
                    <span className="OurTeamExperts_Right_Link_text DopFooter"
                          data-de="AGB"
                          data-en="AGB"
                    >AGB </span>
                    </a>
                    <a href="/" onClick={() => handleDownloadPDF(3)}>
                        <img src={frame} alt="frame"/>
                    </a>
                </div>

            </footer>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
            >
                <img src={selectedImage} alt="Modal" className="imageModalFrame70"/>
                <button onClick={closeModal}>Close Modal</button>

            </Modal>
        </>
    );
}

export default Footer;
