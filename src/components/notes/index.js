import React, { useState } from "react";
import LeftTopPanel from "./leftTopPanel";
import RightTopPanel from "./rightTopPanel";
import { experience } from "./experience";

import "./style.css";

const Notes = () => {
    const [active, setActive] = useState(0);
    const [mobileActive, setMobileActive] = useState();

    const renderNoteSimplified = (data, index) => {
        return (
            <div key={index}>
                <div className="note-simplified noselect" style={{ backgroundColor: `${active === index ? "#464646" : "initial"}` }} onClick={() => setActive(index)}>
                    <div className="note-simplified-company">{data.company}</div>
                    <div className="note-simplified-title">{data.title}</div>
                    <div className="note-simplified-date">{data.date}</div>
                </div>
                {active !== data.name && index !== experience.length - 1 && (
                    <hr style={{ marginTop: "0", marginBottom: "0", height: "0.5px", width: "95%", marginLeft: "auto", marginRight: "auto" }} />
                )}
            </div>
        );
    };

    const Note = () => {
        const activeProject = experience.find((e, i) => i === active);
        return (
            <div className="notes">
                <div className="note-date">{activeProject.date}</div>
                <div className="note-company">{activeProject.company}</div>
                <div className="note-title">{activeProject.title}</div>
                <br />
                <div className="note-detail">
                    <ul style={{ paddingLeft: "16px" }}>
                        {activeProject.detail.map((deets) => (
                            <li>{deets}</li>
                        ))}
                    </ul>
                </div>
                <hr />
            </div>
        );
    };

    const renderNoteSimplifiedMobile = (data, index) => {
        return (
            <div key={index}>
                <div className="note-simplified" onClick={() => setMobileActive(experience[index])}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <div className="note-simplified-company">{data.company}</div>
                            <div className="note-simplified-title">{data.title}</div>
                            <div className="note-simplified-date">{data.date}</div>
                        </div>
                        <div style={{ fontSize: "larger", fontWeight: "700" }}>&#62;</div>
                    </div>
                </div>
                {index !== experience.length - 1 && <hr style={{ marginTop: "0", marginBottom: "0", height: "0.5px", width: "95%", marginLeft: "auto", marginRight: "auto" }} />}
            </div>
        );
    };

    const MobileNote = () => {
        return (
            <div className="">
                <div className="note-date">{mobileActive.date}</div>
                <div className="note-company">{mobileActive.company}</div>
                <div className="note-title">{mobileActive.title}</div>
                <hr style={{ marginTop: "8px" }} />
                <div className="note-detail">
                    <ul style={{ paddingLeft: "16px" }}>
                        {mobileActive.detail.map((deets) => (
                            <li>{deets}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    return (
        <>
            <div className="row note-desktop" style={{ width: "100%", height: "100%" }}>
                <div className="col-lg-4" style={{ marginTop: "auto", height: "60vh", overflowY: "auto" }}>
                    <div style={{ height: "100%" }}>
                        <LeftTopPanel />
                        <div style={{ height: "90%" }}>{experience.map(renderNoteSimplified)}</div>
                    </div>
                </div>
                <div className="col-lg-8" style={{ borderLeft: "1px solid #161616", paddingLeft: "0", paddingRight: "0", height: "100%" }}>
                    <div style={{ height: "100%" }}>
                        <RightTopPanel />
                        <div className="row" style={{ height: "90%" }}>
                            <Note></Note>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row note-mobile" style={{ width: "100%", height: "100%" }}>
                <div className="col-12 note-left-panel" style={{ paddingTop: ".5em", paddingBottom: "1.5em", height: "100%" }}>
                    <div className="row" style={{ width: "100%", paddingTop: ".5em", paddingBottom: "1em", height: "60px" }}>
                        <div className="col-12" style={{ paddingLeft: "0" }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                {mobileActive && (
                                    <div onClick={() => setMobileActive()}>
                                        <span style={{ fontSize: "x-large", fontWeight: "700" }}>&#60;</span>
                                    </div>
                                )}
                                {!mobileActive && <span style={{ fontSize: "x-large", fontWeight: "700" }}>Experience</span>}
                            </div>
                        </div>
                    </div>
                    <div style={{ borderRadius: "6px", maxHeight: "100vw", overflowY: "auto" }}>{experience.map(renderNoteSimplifiedMobile)}</div>
                    <div className="note-detail-mobile" style={{ display: `${mobileActive ? "initial" : "none"}` }}>
                        <div className="container" style={{ height: "100%" }}>
                            <br />
                            <div className="row" style={{ height: "100%" }}>
                                <div className="col-12" style={{ maxHeight: "75%", overflowY: "auto" }}>
                                    {mobileActive && <MobileNote></MobileNote>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Notes;
