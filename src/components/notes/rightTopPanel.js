import React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import TableChartIcon from '@mui/icons-material/TableChart';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

import './style.css';

const RightTopPanel = () => {
    return(
        <div className="row" style={{width: "100%", height: '10%', paddingTop: ".5em", paddingBottom: "1em", position: "sticky", top :"0", backgroundColor: "#272727", zIndex: "300"}}>
            <div className="col-12">
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <ModeEditIcon style={{fill: "#eaeaea"}}></ModeEditIcon>
                        &nbsp;
                        <FormatColorTextIcon style={{fill: "#eaeaea"}}></FormatColorTextIcon>
                        &nbsp;
                        <FormatListNumberedIcon style={{fill: "#eaeaea"}}></FormatListNumberedIcon>
                        &nbsp;
                        <TableChartIcon style={{fill: "#eaeaea"}}></TableChartIcon>
                    </div>
                    <div>
                        <SaveAltIcon style={{fill: "#eaeaea"}}></SaveAltIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightTopPanel;