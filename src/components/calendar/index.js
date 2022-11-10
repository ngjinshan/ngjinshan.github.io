import React, { useMemo, useState } from "react";

import { WORK, PROJECT, COMP } from "./types";
import { twentyTwo } from "./twentyTwo";
import { twentyOne } from "./twentyOne";
import { twenty } from "./twenty";
import { MobileCalendar } from "./mobileCalendar";

import "./style.css";

const Calendar = () => {
    const [duration, setDuration] = useState("");
    // const [title, setTitle] = useState('');
    const [company, setCompany] = useState("");
    const [detail, setDetail] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState();

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
            const position = id.substring(id.length - 1);
            const marginTop = -3.5 - multiplier * 2 + 2 * position;
            return marginTop.toString() + "em";
        }
        return "";
    }, [multiplier, id]);

    const renderExperiences = (experience, index) => {
        const m = experience.month;
        const y = experience.year;

        const renderDetail = (data) => {
            return (
                <>
                    {data}
                    <hr style={{ marginTop: "8px", marginBottom: "8px" }} />
                </>
            );
        };

        const renderExperience = (data, i) => {
            const setBox = () => {
                setDuration(data.duration);
                setCompany(data.company);
                setDetail(data.detail);
            };

            let color = "black";
            let backgroundColor = "#c7aa49";

            if (data.type === WORK) {
                color = "#efefef";
                backgroundColor = "#1e4962";
            } else if (data.type === COMP) {
                color = "#efefef";
                backgroundColor = "green";
            }

            return (
                <>
                    <div
                        id={"experience-box-" + index + i}
                        onClick={(e) => {
                            e.stopPropagation();
                            setBox();
                            setMonth(m);
                            setYear(y);
                            setId("experience-box-" + index + i);
                            setMultiplier(experience.experience.length - 1);
                        }}
                        className="title-company noselect"
                        style={{
                            cursor: "pointer",
                            textAlign: "left",
                            color: color,
                            backgroundColor: backgroundColor,
                            marginBottom: "6px",
                            borderRadius: "6px",
                            padding: "1px 6px",
                            width: "fit-content",
                        }}
                    >
                        {data.title}
                    </div>
                </>
            );
        };

        const setEmpty = () => {
            setDuration();
            setCompany();
            setDetail();
            setMonth();
            setYear();
        };

        return (
            <div key={index} className="col-3 calendar-box" onClick={() => setEmpty()} style={{ cursor: `${experience.detail ? "pointer" : "initial"}` }}>
                <div className="duration">{experience.month}</div>
                <br />
                {experience.experience.map(renderExperience)}

                {month && (index + 1) % 4 !== 0 && (
                    <div
                        class="box-right arrow-left"
                        style={{ display: `${month === experience.month && year === experience.year ? "initial" : "none"}`, marginLeft: calculateMarginLeft, marginTop: calculateMarginTop }}
                    >
                        <div className="duration" style={{ color: "#7c7c7c", paddingBottom: "8px" }}>
                            <span style={{ fontWeight: "700" }}>{company}</span>
                            {company && <br />}
                            {duration}
                        </div>
                        {detail.map(renderDetail)}
                    </div>
                )}

                {month && (index + 1) % 4 === 0 && (
                    <div class="box-left arrow-right" style={{ display: `${month === experience.month && year === experience.year ? "initial" : "none"}`, marginTop: calculateMarginTop }}>
                        <div className="duration" style={{ color: "#7c7c7c", paddingBottom: "8px" }}>
                            <span style={{ fontWeight: "700" }}>{company}</span>
                            {company && <br />}
                            {duration}
                        </div>
                        {detail.map(renderDetail)}
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
                        {props.data.map(renderExperiences)}
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            <div className="calendar">
                <div className="calendar-container" style={{ height: "100%", overflowY: "auto" }}>
                    <CalendarYear year={2022} data={twentyTwo} />
                    <CalendarYear year={2021} data={twentyOne} />
                    <CalendarYear year={2020} data={twenty} />
                </div>
            </div>

            <div className="calendar-mobile">
                <div className="calendar-mobile-container" style={{ height: "100%", overflowY: "auto" }}>
                    <MobileCalendar year={2022} data={twentyTwo} />
                    <MobileCalendar year={2021} data={twentyOne} />
                    <MobileCalendar year={2020} data={twenty} />
                </div>
            </div>
        </>
    );
};

export default Calendar;
