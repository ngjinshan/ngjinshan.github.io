import React from 'react';
import Terminal from '../terminal';
import Dock from '../dock';
import Folder from '../folder'

import './style.css';

const Main = () => {
    return(
        <div className="main-overlay">
            <Terminal></Terminal>
            {/* <Folder></Folder> */}
            <Dock></Dock>
        </div>
    )
}

export default Main;