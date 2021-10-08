import React from 'react';

import './style.css';

const FolderTopPanel = (props) => {
    return(
        <div className="col-lg-12 folder-top-panel">
            <div className="folder-bar">
                <div className="folder-red" onClick={() => props.onHide()}>
                </div>
                <div className="folder-yellow" onClick={() => props.onHide()}>
                </div>
                <div className="folder-green">
                </div>
            </div>
        </div>
    )
}

export default FolderTopPanel;