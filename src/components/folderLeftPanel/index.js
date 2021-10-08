import React from 'react';

import './style.css';

const FolderLeftPanel = (props) => {
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
                    Favourites
                    <div className="folder-file">
                        AirDrop
                    </div>
                    <div className="folder-file">
                        Recents
                    </div>
                    <div className="folder-file">
                        Applications
                    </div>
                    <div className="folder-file">
                        Desktop
                    </div>
                    <div className="folder-file active">
                        Documents
                    </div>
                    <div className="folder-file">
                        Downloads
                    </div>
                </div>
                
            </div>
            <div className="folder-files">
                <div className="folder-files-group">
                    iCloud
                    <div className="folder-file">
                        iCloud Drive
                    </div>
                </div>
            </div>
            <div className="folder-files">
                <div className="folder-files-group">
                    Location
                    <div className="folder-file">
                        Network
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FolderLeftPanel;