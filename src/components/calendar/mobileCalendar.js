import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

export const MobileCalendar = (props) => {
    const renderMobileDetail = (data) => {
        return <li>{data}</li>;
    };

    const renderMobileMonths = (data) => {
        return (
            <div>
                <div style={{ fontSize: "small" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span style={{ fontWeight: "700" }}>{data.name}</span>
                        </div>
                        <div style={{ color: "white", fontSize: "smaller", fontWeight: "100", textAlign: "right" }}>{data.date}</div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <span>{data.stack}</span>
                        </div>

                        {data.link.length > 0 && (
                            <span className="project-link">
                                <a href={data.link} target="_blank" rel="noreferrer">
                                    &nbsp;&nbsp; <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon>
                                </a>
                            </span>
                        )}
                    </div>
                    <br />
                    <ul style={{ paddingLeft: "16px" }}>
                        <li>{data.detail}</li>
                    </ul>
                </div>
                <hr style={{ marginTop: "8px", marginBottom: "8px" }} />
            </div>
        );
    };

    return (
        <div style={{ minHeight: "fit-content", paddingBottom: "16px" }}>
            <div className="calendar-mobile-year" style={{ fontSize: "x-large", color: "#fd3d38", fontWeight: "700" }}>
                {props.year}
            </div>
            <hr />
            {[...props.data].reverse().map((e) => {
                if (e.projects.length > 0) {
                    return [...e.projects].reverse().map(renderMobileMonths);
                }
            })}
        </div>
    );
};
