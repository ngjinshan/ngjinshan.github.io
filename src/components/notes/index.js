import React, { useState } from "react";
import LeftTopPanel from "./leftTopPanel";
import RightTopPanel from "./rightTopPanel";
import { experience } from "./experience";
import { MobileExperience } from "./mobileExperience";

import "./style.css";

const Notes = () => {
  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState();

  const renderNoteSimplified = (data, index) => {
    return (
      <div key={index}>
        <div
          className="note-simplified noselect"
          style={{
            backgroundColor: `${active === index ? "#464646" : "initial"}`,
          }}
          onClick={() => setActive(index)}
        >
          <div className="note-simplified-company">{data.company}</div>
          <div className="note-simplified-title">{data.title}</div>
          <div className="note-simplified-date">{data.date}</div>
        </div>
        {active !== data.name && index !== experience.length - 1 && (
          <hr
            style={{
              marginTop: "0",
              marginBottom: "0",
              height: "0.5px",
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
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

  return (
    <>
      <div
        className="row note-desktop"
        style={{ width: "100%", height: "100%" }}
      >
        <div
          className="col-lg-4"
          style={{ marginTop: "auto", height: "60vh", overflowY: "auto" }}
        >
          <div style={{ height: "100%" }}>
            <LeftTopPanel />
            <div style={{ height: "90%" }}>
              {experience.map(renderNoteSimplified)}
            </div>
          </div>
        </div>
        <div
          className="col-lg-8"
          style={{
            borderLeft: "1px solid #161616",
            paddingLeft: "0",
            paddingRight: "0",
            height: "100%",
          }}
        >
          <div style={{ height: "100%" }}>
            <RightTopPanel />
            <div className="row" style={{ height: "90%" }}>
              <Note></Note>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row note-mobile"
        style={{ width: "100%", height: "100%", paddingTop: "12px" }}
      >
        <MobileExperience
          year={2023}
          data={experience.filter((ex) => ex.year == 23)}
        />
        <MobileExperience
          year={2022}
          data={experience.filter((ex) => ex.year == 22)}
        />
        <MobileExperience
          year={2021}
          data={experience.filter((ex) => ex.year == 21)}
        />
      </div>
    </>
  );
};

export default Notes;
