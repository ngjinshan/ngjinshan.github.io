import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './style.css';

const LeftTopPanel = () => {
    return(
        <div className="row" style={{width: "100%", height: "10%", paddingTop: ".5em", paddingBottom: "1em", position: "sticky", top :"0", backgroundColor: "#272727", zIndex: "300"}}>
            <div className="col-12" style={{paddingLeft: "0", paddingRight: "0"}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div>
                        <FormatListBulletedIcon style={{fill: "#eaeaea"}}></FormatListBulletedIcon>
                        &nbsp;
                        <GridViewIcon style={{fill: "#eaeaea"}}></GridViewIcon>
                    </div>
                    <div>
                        <DeleteOutlineIcon style={{fill: "#eaeaea"}}></DeleteOutlineIcon>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftTopPanel;