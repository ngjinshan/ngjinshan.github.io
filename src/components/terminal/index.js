import React from 'react';

import './style.css';

const Terminal = () => {
    const today = new Date().toString();

    return(
        <div className="terminal-overlay">
            <div className="terminal-container">
                <div className="bar">
                    <div className="red">
                    </div>
                    <div className="yellow">
                    </div>
                    <div className="green">
                    </div>
                </div>
                <div className="screen">
                    <p className="font">Last login: {today}</p>
                    <p className="font line-1 anim-typewriter-1">Jin Shan@ngjinshan.github.io % echo 'hello world'<span className="cursor-1">&#32;</span></p>
                    <p className="font line-2 anim-typewriter-2">hello world<span className="cursor-2">&#32;</span></p>
                    {/* <p className="font line-3 anim-typewriter-3">Jin Shan@ngjinshan.github.io ~ % <span className="cursor-3">_</span></p> */}
                </div>
            </div>
        </div>
    )
}

export default Terminal;