import React from 'react';

import './style.css';

const ProjectLeftPanel = (props) => {
    return(
        <div className="col-lg-2 folder-left-panel">
            <div className="folder-bar">
                <div className="folder-red" onClick={() => props.onHide()}>
                </div>
                <div className="folder-yellow" onClick={() => props.onHide()}>
                </div>
                <div className="folder-green">
                </div>
            </div>
            <div className="folder-files">
                <div className="folder-files-group">
                    iCloud
                    <div className="folder-file active">
                        Notes
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectLeftPanel;