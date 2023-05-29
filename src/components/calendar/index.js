import React, { useMemo, useState } from "react";

import { twentyThree } from "./twentyThree";
import { twentyTwo } from "./twentyTwo";
import { twentyOne } from "./twentyOne";
import { twenty } from "./twenty";
import { MobileCalendar } from "./mobileCalendar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Calendar = () => {
    const [date, setDate] = useState("");
    // const [title, setTitle] = useState('');
    const [detail, setDetail] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState();
    const [stack, setStack] = useState("");
    const [link, setLink] = useState("");

    const [id, setId] = useState("");
    const [multiplier, setMultiplier] = useState(0);

    const calculateMarginLeft = useMemo(() => {
        if (id != "") {
            const el = document.getElementById(id);
            return parseInt(el.offsetWidth) + 12.5;
        }
        return "";
    }, [id]);

    const calculateMarginTop = useMemo(() => {
        if (id != "") {
            const marginTop = -3.5 - multiplier * 2;
            return marginTop.toString() + "em";
        }
        return "";
    }, [multiplier, id]);

    const renderProjects = (project, index) => {
        const m = project.month;
        const y = project.year;

        const renderProject = (data, i) => {
            const setBox = () => {
                setDate(data.date);
                setDetail(data.detail);
                setStack(data.stack);
                setLink(data.link);
            };

            return (
                <>
                    <div
                        id={"project-box-" + data.name}
                        onClick={(e) => {
                            e.stopPropagation();
                            setBox();
                            setMonth(m);
                            setYear(y);
                            setId("project-box-" + data.name);
                            setMultiplier(project.projects.length - 1 - i);
                        }}
                        className="title-company noselect"
                        style={{
                            cursor: "pointer",
                            textAlign: "left",
                            color: "#efefef",
                            backgroundColor: "#1e4962",
                            marginBottom: "6px",
                            borderRadius: "6px",
                            padding: "1px 6px",
                            width: "fit-content",
                            maxWidth: "150px",
                        }}
                    >
                        {data.name}
                    </div>
                </>
            );
        };

        const setEmpty = () => {
            setDate();
            setDetail();
            setMonth();
            setYear();
            setLink();
            setStack();
        };

        return (
            <div key={index} className="col-3 calendar-box" onClick={() => setEmpty()} style={{ cursor: `${project.detail ? "pointer" : "initial"}` }}>
                <div className="date">{project.month}</div>
                {project.projects.map(renderProject)}

                {month && (index + 1) % 4 !== 0 && (
                    <div
                        class="box-right arrow-left"
                        style={{ display: `${month === project.month && year === project.year ? "initial" : "none"}`, marginLeft: calculateMarginLeft, marginTop: calculateMarginTop }}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div style={{ color: "#7c7c7c", display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontWeight: "700" }}>{stack}</span>
                            {link.length > 0 && (
                                <span className="project-link">
                                    <a href={link} target="_blank" rel="noreferrer">
                                        &nbsp;&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                    </a>
                                </span>
                            )}
                        </div>
                        <div style={{ color: "#7c7c7c", paddingBottom: "8px" }}>{date}</div>
                        {detail}
                        <hr style={{ marginTop: "8px", marginBottom: "8px" }} />
                    </div>
                )}

                {month && (index + 1) % 4 === 0 && (
                    <div
                        class="box-left arrow-right"
                        style={{ display: `${month === project.month && year === project.year ? "initial" : "none"}`, marginTop: calculateMarginTop }}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div style={{ color: "#7c7c7c", display: "flex", justifyContent: "space-between" }}>
                            <span style={{ fontWeight: "700" }}>{stack}</span>
                            {link.length > 0 && (
                                <span className="project-link">
                                    <a href={link} target="_blank" rel="noreferrer">
                                        &nbsp;&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                    </a>
                                </span>
                            )}
                        </div>
                        <div style={{ color: "#7c7c7c", paddingBottom: "8px" }}>{date}</div>
                        {detail}
                        <hr style={{ marginTop: "8px", marginBottom: "8px" }} />
                    </div>
                )}
            </div>
        );
    };

    const CalendarYear = (props) => {
        return (
            <>
                <div>
                    <div className="row" style={{ fontSize: "x-large", color: "white", fontWeight: "700", paddingTop: "20px" }}>
                        {props.year}
                    </div>
                    <hr style={{ marginBottom: "0px", color: "transparent" }} />
                </div>
                <div style={{ height: "fit-content" }}>
                    <div className="row" style={{ width: "100%", height: "80%" }}>
                        {props.data.map(renderProjects)}
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="calendar">
                <div className="calendar-container" style={{ height: "100%", overflowY: "auto" }}>
                    <CalendarYear year={2023} data={twentyThree} />
                    <CalendarYear year={2022} data={twentyTwo} />
                    <CalendarYear year={2021} data={twentyOne} />
                    <CalendarYear year={2020} data={twenty} />
                </div>
            </div>

            <div className="calendar-mobile">
                <div className="calendar-mobile-container" style={{ height: "100%", overflowY: "auto" }}>
                    <MobileCalendar year={2023} data={twentyThree} />
                    <MobileCalendar year={2022} data={twentyTwo} />
                    <MobileCalendar year={2021} data={twentyOne} />
                    <MobileCalendar year={2020} data={twenty} />
                </div>
            </div>
        </>
    );
};

export default Calendar;
