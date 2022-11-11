import React from "react";
import { Modal, ModalBody } from "react-bootstrap";
import ProjectLeftPanel from "../folderLeftPanel/projectLeftPanel";
import Notes from "../notes";

import "./style.css";

const ExperienceModal = (props) => {
    return (
        <Modal {...props} size="lg" centered className="spaceInDown3" dialogClassName="modal-65w">
            <ModalBody>
                <div className="row folder">
                    <ProjectLeftPanel onHide={props.onHide} />
                    <div className="col-lg-10 folder-right-panel" style={{ padding: "0" }}>
                        <Notes></Notes>
                    </div>
                </div>
            </ModalBody>
        </Modal>
    );
};

export default ExperienceModal;
