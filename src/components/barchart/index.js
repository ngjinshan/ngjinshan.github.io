import React from 'react';
import { proficiency } from './proficiency';

import './style.css'
const Barchart = () => {

    const renderBar = (data, index) => {
        return(
            <div key={index} className="barchart-row">
                <div className="barchart-label">{data.name}</div>
                <div className="barchart-value-container">
                    <div className={"barchart-value barchart-value-" + data.value}>&nbsp;</div>
                </div>
                <div className="barchart-value-number">{data.value}%</div>
            </div>
        )
    }
    return(
        <div className="barchart">
            {proficiency.map(renderBar)}
        </div>
    )
}

export default Barchart