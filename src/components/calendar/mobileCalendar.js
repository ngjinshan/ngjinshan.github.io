export const MobileCalendar = (props) => {

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
                        {data.detail.map(renderMobileDetail)}
                    </ul>
                    } 
                </div>
                <hr style={{marginTop: "8px", marginBottom: "8px"}}/>
            </div>
        )
    }

    return(
        <div style={{minHeight: "fit-content", paddingBottom: "16px"}}>
            <div className="calendar-mobile-year" style={{fontSize: "x-large", color: "#fd3d38", fontWeight: "700"}}>
                {props.year}
            </div>
            <hr/>
            {[...props.data].reverse().map(e => {
                if(e.experience.length > 0){
                    return [...e.experience].reverse().map(renderMobileMonths)
                }
            })}
        </div>
    )
}