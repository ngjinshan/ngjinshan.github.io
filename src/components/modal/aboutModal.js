import React, { useState } from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import Barchart from '../barchart';
import FolderLeftPanel from '../folderLeftPanel';
import img from 'src/images/about.jpg';

import './style.css'

const AboutModal = (props) => {

    const [active, setActive] = useState('About')

    return(
        <Modal
        {...props}
        size="lg"
        centered
        className="spaceInDown1"
        dialogClassName="modal-65w"
        >
            <ModalBody>
                <div className="row folder about">
                    <FolderLeftPanel setActive={setActive} active={active} onHide={props.onHide}/>
                    <div className="col-lg-10 folder-right-panel">
                        <div className="container" style={{width: "100%", height: "100%"}}>
                            <div className="row" style={{width: "100%", height: "100%"}}>
                                <div className="col-lg-4" style={{marginTop: "auto", marginBottom: "auto"}}>
                                    <div className="d-flex justify-content-center">
                                        <img src={img} alt="about"></img>
                                    </div>
                                    <br/>
                                    <div className="text-center">
                                        <p>
                                            Pretty sick of this programming stuff but I had fun working on this. I'll come up with a proper bio soon. & prolly use a better picture
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="d-flex justify-content-center">Relative proficiency</div>
                                    <hr style={{width: "5em", marginLeft: "auto", marginRight: "auto", marginTop: "8px"}}/>
                                    <div className="d-flex" style={{height: "100%", width: "100%"}}>
                                        <Barchart></Barchart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default AboutModal;