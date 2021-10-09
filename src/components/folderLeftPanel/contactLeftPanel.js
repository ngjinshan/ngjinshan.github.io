import React from 'react';

import './style.css';

const ContactLeftPanel = (props) => {
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
            {/* <div className="folder-files">
                <div className="folder-files-group" style={{color: '#efefef'}}>
                    All Contacts
                </div>
            </div> */}
            <div className="folder-files">
                <div className="folder-files-group">
                    iCloud
                    <div className={`folder-file ${props.active === 'All iCloud' ? 'active' : ''}`} onClick={() => props.setActive('All iCloud')}>
                        All iCloud
                    </div>
                </div>
            </div>
            <div className="folder-files">
                <div className="folder-files-group">
                    On My Mac
                    <div className={`folder-file ${props.active === 'All On My Mac' ? 'active' : ''}`} onClick={() => props.setActive('All On My Mac')}>
                        All On My Mac
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactLeftPanel;