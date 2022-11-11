import React, { useState } from "react";
import AboutModal from "../modal/aboutModal";
import ProjectModal from "../modal/projectModal";
import ContactModal from "../modal/contactModal";
import ExperienceModal from "../modal/experienceModal";

import "./style.css";

const Dock = () => {
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showExperienceModal, setShowExperienceModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [showProjectModal, setShowProjectModal] = useState(false);

    return (
        <div className="main-contain">
            <AboutModal show={showAboutModal} onHide={() => setShowAboutModal(false)}></AboutModal>
            <ExperienceModal show={showExperienceModal} onHide={() => setShowExperienceModal(false)}></ExperienceModal>
            <div className="contact-modal">
                <ContactModal show={showContactModal} onHide={() => setShowContactModal(false)}></ContactModal>
            </div>
            <ProjectModal show={showProjectModal} onHide={() => setShowProjectModal(false)}></ProjectModal>
            <div className="container">
                <div className="dock">
                    <span className="mirror-container">
                        <img src="https://image.ibb.co/mHAnwK/nav.png" className="img-fluid mirror" alt="nav"></img>
                    </span>
                    <div className="dock-nav">
                        <ul>
                            {/* <li>
                                <img src="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png" className="img-fluid" alt="finder"></img>
                            </li>							
                            <li>
                                <img src="https://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/256/launchpad-icon.png" className="img-fluid" alt="launchpad"></img>
                            </li>
                            <li>
                                <img src="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/safari-icon.png" className="img-fluid" alt="safari"></img>
                            </li> */}
                            <li onClick={() => setShowAboutModal(true)}>
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-places/256/folder-blue-icon.png" className="img-fluid folder" alt="chrome"></img>
                                <figcaption className="folder-title">About</figcaption>
                            </li>
                            {/* <li onClick={() => null}>
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-places/256/folder-blue-icon.png" className="img-fluid" alt="whatsapp"></img>
                                <figcaption className="folder-title">Education</figcaption>
                            </li> */}
                            <li onClick={() => setShowExperienceModal(true)}>
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-places/256/folder-blue-icon.png" className="img-fluid" alt="spotify"></img>
                                <figcaption className="folder-title">Experience</figcaption>
                            </li>
                            <li onClick={() => setShowProjectModal(true)}>
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-places/256/folder-blue-icon.png" className="img-fluid" alt="whatsapp"></img>
                                <figcaption className="folder-title">Projects</figcaption>
                            </li>
                            <li onClick={() => setShowContactModal(true)}>
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-places/256/folder-blue-icon.png" className="img-fluid" alt="discord"></img>
                                <figcaption className="folder-title">Contact</figcaption>
                            </li>
                            {/* <li>
                                <img src="https://img.icons8.com/fluency/48/000000/visual-studio-code-2019.png" className="img-fluid" alt="vsc"></img>
                            </li>
                            <li>
                                <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/pycharm-icon.png" className="img-fluid" alt="pycharm"></img>
                            </li>
                            <li>
                                <img src="https://findicons.com/files/icons/1254/flurry_system/128/terminal.png" className="img-fluid" alt="terminal"></img>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dock;
