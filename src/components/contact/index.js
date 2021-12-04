import React from 'react';

import './style.css';

const Contact = () => {
    return(
        <div className="container" style={{width: "100%", height: "100%"}}>
            <div className="row" style={{alignItems: 'center'}}>
                <div className="col-2">
                    <div className="d-flex justify-content-end">
                        <div className="contact-picture">
                            J
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="contact-name">
                        Jin Shan Ng
                    </div>
                </div>
            </div>
            <br/>
            {/* <div className="row">
                <div className="col-2">
                    <div className="d-flex justify-content-end">
                        <div className="contact-detail">
                            mobile
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="contact-value">
                        <div className="contact-value">
                            +60163349669
                        </div>
                    </div>
                </div>
            </div>
            <hr/> */}
            <div className="row">
                <div className="col-2">
                    <div className="d-flex justify-content-end">
                        <div className="contact-detail">
                            email
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="contact-value">
                        <div className="contact-value">
                            ngjinshan99@gmail.com
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <div className="d-flex justify-content-end">
                        <div className="contact-detail">
                            linkedin
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="contact-value">
                        <div className="contact-value">
                            <a href="https://linkedin.com/in/jin-shan-ng-b245841b2" target="_blank" rel="noreferrer">https://linkedin.com/in/jin-shan-ng-b245841b2</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <div className="d-flex justify-content-end">
                        <div className="contact-detail">
                            facebook
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="contact-value">
                        <div className="contact-value">
                            <a href="https://www.facebook.com/ng.j.shan/" target="_blank" rel="noreferrer">https://www.facebook.com/ng.j.shan/</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="row">
                <div className="col-2">
                    <div className="d-flex justify-content-end">
                        <div className="contact-detail">
                            resume
                        </div>
                    </div>
                </div>
                <div className="col-10">
                    <div className="contact-value">
                        <div className="contact-value">
                            <a href="/NG_JIN_SHAN_RESUME.pdf" download target="_blank" rel="noreferrer">NG_JIN_SHAN_RESUME.pdf</a>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <br/>
            <br/>
        </div>
    )
}

export default Contact