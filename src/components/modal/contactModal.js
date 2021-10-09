import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';
import ContactLeftPanel from '../folderLeftPanel/contactLeftPanel';
import Contact from '../contact'
import './style.css'

const ContactModal = (props) => {

    return(
        <Modal
        {...props}
        size="lg"
        centered
        className="spaceInDown4"
        >
            <ModalBody>
                <div className="row folder contact">
                    <ContactLeftPanel onHide={props.onHide}/>
                    <div className="col-lg-10 folder-right-panel">
                        <Contact/>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    )
}

export default ContactModal;