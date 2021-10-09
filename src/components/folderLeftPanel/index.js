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
                    <div className={`folder-file ${props.active === 'AirDrop' ? 'active' : ''}`} onClick={() => props.setActive('AirDrop')}>
                        AirDrop
                    </div>
                    <div className={`folder-file ${props.active === 'Recents' ? 'active' : ''}`} onClick={() => props.setActive('Recents')}>
                        Recents
                    </div>
                    <div className={`folder-file ${props.active === 'Applications' ? 'active' : ''}`} onClick={() => props.setActive('Applications')}>
                        Applications
                    </div>
                    <div className={`folder-file ${props.active === 'Desktop' ? 'active' : ''}`} onClick={() => props.setActive('Desktop')}>
                        Desktop
                    </div>
                    <div className={`folder-file ${props.active === 'Documents' ? 'active' : ''}`} onClick={() => props.setActive('Documents')}>
                        Documents
                    </div>
                    <div className={`folder-file ${props.active === 'Downloads' ? 'active' : ''}`} onClick={() => props.setActive('Downloads')}>
                        Downloads
                    </div>
                </div>
                
            </div>
            <div className="folder-files">
                <div className="folder-files-group">
                    iCloud
                    <div className={`folder-file ${props.active === 'About' ? 'active' : ''}`} onClick={() => props.setActive('About')}>
                        About
                    </div>
                </div>
            </div>
            <div className="folder-files">
                <div className="folder-files-group">
                    Location
                    <div className={`folder-file ${props.active === 'Network' ? 'active' : ''}`} onClick={() => props.setActive('Network')}>
                        Network
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FolderLeftPanel;