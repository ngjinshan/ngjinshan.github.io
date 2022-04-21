import React, { useState } from 'react';
import { twentyMobile, twentyOneMobile, twentyOne, twenty, WORK, COMP } from './experience';

import './style.css';

const Calendar = () => {

    const [duration, setDuration] = useState('');
    // const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [detail, setDetail] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState()

    const renderExperiences = (data, index) => {
        const m = data.month;
        const y = data.year;

        const renderDetail = (data) => {
            return(
                <>
                {data}
                <hr style={{marginTop: "8px", marginBottom: "8px"}}/>
                </>
            )
        }

        const renderExperience = (data) => {

            const setBox = () => {
                setDuration(data.duration)
                setCompany(data.company)
                setDetail(data.detail)
            }

            let color = "black";
            let backgroundColor = "#c7aa49";

            if(data.type === WORK){
                color = "#efefef";
                backgroundColor = "#1e4962";
            }else if(data.type === COMP){
                color = "#efefef";
                backgroundColor = "green";
            }

            return(
                <>
                <div onClick={(e) => {e.stopPropagation(); setBox(); setMonth(m); setYear(y);}} className="title-company noselect" 
                style={{cursor: "pointer", textAlign: "left", color: color, backgroundColor: backgroundColor, marginBottom: "6px", borderRadius: "6px", padding: "1px 6px", width: "fit-content"}}>
                    {data.title}
                </div>
                </>
            )
        }


        const setEmpty = () => {
                setDuration()
                setCompany()
                setDetail()
                setMonth()
                setYear()
        }

        return(
            <div key={index} className="col-3 calendar-box" onClick={() => setEmpty()} style={{cursor: `${data.detail ? 'pointer':'initial'}`}}>
                <div className="duration">
                    {data.month}
                </div>
                <br/>
                {data.experience.map(renderExperience)}

                {month && ( (index + 1)%4 !== 0 ) && 
                <div class="box-right arrow-left" style={{display: `${(month === data.month && year === data.year)? 'initial' : 'none'}`}}>
                    <div className="duration" style={{color: "#7c7c7c", paddingBottom: "8px"}}>
                        <span style={{fontWeight: "700"}}>{company}</span> 
                        {company && " | "}
                        {duration}
                    </div>
                    {detail.split("\n").map(renderDetail)}
                </div>
                }

                {month && ( (index + 1)%4 === 0 ) && 
                <div class="box-left arrow-right" style={{display: `${(month === data.month && year === data.year) ? 'initial' : 'none'}`}}>
                    <div className="duration" style={{color: "#7c7c7c", paddingBottom: "8px"}}>
                        <span style={{fontWeight: "700"}}>{company}</span> 
                        {company && " | "}
                        {duration}
                    </div>
                    {detail.split("\n").map(renderDetail)}
                </div>
                }

            </div>
        )
    }

    const renderMobileDetail = (data) => {
        return(
            <li>
                {data}
            </li>
        )
    }

    const renderMobileMonths = (data) => {
        return(
            <div>
                <div style={{fontSize: 'small'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <span style={{fontWeight: "700"}}>{data.title}</span>
                            <br/>
                            {data.company}
                        </div>
                        <div style={{color: 'white', fontSize: 'smaller', fontWeight: '100', textAlign: 'right'}}>
                            {data.duration}
                        </div>
                    </div>
                    <br/>
                    {data.detail && 
                    <ul style={{paddingLeft: "16px"}}>
                        {data.detail.split("\n").map(renderMobileDetail)}
                    </ul>
                    } 
                </div>
                <hr style={{marginTop: "8px", marginBottom: "8px"}}/>
            </div>
        )
    }

    return(
        <>
        <div className="calendar">
            <div className="calendar-container" style={{height: "100%", overflowY: "auto"}}>
                <div>
                    <div className="row" style={{fontSize: "x-large", color: "white", fontWeight: "700", paddingTop: "16px"}}>
                        2021
                    </div>
                    <hr style={{marginBottom: "0px", color: "transparent"}}/>
                </div>
                <div style={{height: "65vh"}}>
                    <div className="row" style={{width: "100%", height: "80%"}}>
                        {twentyOne.map(renderExperiences)}
                    </div>
                </div>
                <div>
                    <div className="row" style={{fontSize: "x-large", color: "white", fontWeight: "700"}}>
                        2020
                    </div>
                    <hr style={{marginBottom: "0px", color: "transparent"}}/>
                </div>
                <div style={{height: "60vh"}}>
                    <div className="row" style={{width: "100%", height: "80%"}}>
                        {twenty.map(renderExperiences)}
                    </div>
                </div>
            </div>
        </div>

        <div className="calendar-mobile">
            <div className="calendar-mobile-container" style={{height: "100%", overflowY: "auto"}}>
                <div style={{minHeight: "65vh", paddingBottom: "16px"}}>
                    <div className="calendar-mobile-year" style={{fontSize: "x-large", color: "#fd3d38", fontWeight: "700"}}>
                        2021
                    </div>
                    <hr/>
                    {twentyOneMobile.map(renderMobileMonths)}
                </div>
                <div style={{minHeight: "62.5vh"}}>
                    <div className="calendar-mobile-year" style={{fontSize: "x-large", color: "#fd3d38", fontWeight: "700"}}>
                        2020
                    </div>
                    <hr/>
                    {twentyMobile.map(renderMobileMonths)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Calendar;