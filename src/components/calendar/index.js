import React, { useState } from 'react';
import { experience, calendarRemainingDays, twentyMobile, twentyOneMobile, eighteenMobile, twentyOne, twenty, eighteen } from './experience';

import './style.css';

const Calendar = () => {

    const [duration, setDuration] = useState('');
    const [title, setTitle] = useState('');
    const [company, setCompany] = useState('');
    const [detail, setDetail] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState()

    const renderDays = (data, index) => {
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

            return(
                <>
                <div onClick={(e) => {e.stopPropagation(); setBox(); setMonth(m); setYear(y);}} className="title-company noselect" 
                style={{cursor: "pointer", textAlign: "left", color: `${data.project ? 'black' : '#efefef'}`, backgroundColor: `${data.project ? '#c7aa49' : "#1e4962"}`, marginBottom: "6px", borderRadius: "6px", padding: "1px 6px", width: "fit-content"}}>
                    {data.title}
                </div>
                </>
            )
        }


        const setEmpty = (data) => {
                setDuration()
                setCompany()
                setDetail()
                setMonth()
                setYear()
        }

        return(
            <div key={index} className="col-3 calendar-box" onClick={() => setEmpty(data.experience)} style={{cursor: `${data.detail ? 'pointer':'initial'}`}}>
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

    const renderMobileMonths = (data, index) => {
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
                        {twentyOne.map(renderDays)}
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
                        {twenty.map(renderDays)}
                    </div>
                </div>
            </div>
            {/* <div className="row" style={{width: "100%", textAlign: "right"}}>
                <div className="col-5 day">
                    2018
                </div>
                <div className="col-5 day">
                    2019
                </div>
                <div className="col-5 day">
                    2020
                </div>
                <div className="col-5 day">
                    2021
                </div>
                <div className="col-5 day">
                    2022
                </div>
            </div>
            <hr style={{marginBottom: "0", borderTop: "1px solid #3b3b3b"}}/>
            <div className="row" style={{width: "100%"}}>
                {experience.map(renderDays)}
            </div> */}
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
            {/* <div className="row" style={{width: "100%", textAlign: "right"}}>
                <div className="col-7 day">
                    M
                </div>
                <div className="col-7 day">
                    T
                </div>
                <div className="col-7 day">
                    W
                </div>
                <div className="col-7 day">
                    T
                </div>
                <div className="col-7 day">
                    F
                </div>
                <div className="col-7 day">
                    S
                </div>
                <div className="col-7 day">
                    S
                </div>
            </div>
            <hr style={{marginBottom: "0", borderTop: "1px solid #3b3b3b"}}/>
            <div className="row" style={{width: "100%"}}>
                {[0,0,0,0].map(renderMobileDaysEmpty)}
                {experience.map(renderMobileDays)}
                {calendarRemainingDays.map(renderMobileDaysDummy)}
            </div>
            <hr style={{marginTop: "8px", marginBottom: "0", borderTop: "1px solid #3b3b3b"}}/>
            <div className="row" style={{width: "100%"}}>
                <div className="calendar-mobile-detail container" style={{backgroundColor: '#050505', paddingLeft: '0', paddingRight: '0'}}>
                    <div className="row" style={{paddingTop: '16px', paddingBottom: '16px'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{fontSize: 'small'}}>
                                {title}
                                <hr style={{marginTop: "8px", marginBottom: "8px"}}/>
                                {company}
                                <hr style={{marginTop: "8px", marginBottom: "8px"}}/>
                                {detail && 
                                <ul style={{paddingLeft: "16px"}}>
                                    {detail.split("\n").map(renderMobileDetail)}
                                </ul>
                                } 
                            </div>
                            <div style={{color: 'white', fontSize: 'small', fontWeight: '100', textAlign: 'right'}}>
                                {duration}
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
        </>
    )
}

export default Calendar;