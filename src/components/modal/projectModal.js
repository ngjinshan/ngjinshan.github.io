import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import FolderTopPanel from "../folderTopPanel";
import Calendar from "../calendar";
import "./style.css";

const ProjectModal = (props) => {
    return (
        <Modal {...props} size="lg" centered className="spaceInDown2" dialogClassName="modal-65w project-modal">
            <ModalBody>
                <div className="row folder project">
                    <FolderTopPanel onHide={props.onHide} />
                    <div className="col-lg-12 folder-right-panel" style={{ border: "0px", borderTopRightRadius: "0", borderTopLeftRadius: "0", borderBottomLeftRadius: "8px" }}>
                        <Calendar></Calendar>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ProjectModal;
