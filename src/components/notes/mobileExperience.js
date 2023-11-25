export const MobileExperience = (props) => {
  const renderMobileMonths = (data) => {
    return (
      <div>
        <div style={{ fontSize: "small" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span style={{ fontWeight: "700" }}>{data.company}</span>
            </div>
            <div
              style={{
                color: "white",
                fontSize: "smaller",
                fontWeight: "100",
                textAlign: "right",
              }}
            >
              {data.date}
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <span>{data.title}</span>
            </div>
          </div>
          <br />
          <ul style={{ paddingLeft: "16px" }}>
            {data.detail.map((det) => (
              <li>{det}</li>
            ))}
          </ul>
        </div>
        <hr style={{ marginTop: "8px", marginBottom: "8px" }} />
      </div>
    );
  };

  return (
    <div style={{ minHeight: "fit-content", paddingBottom: "16px" }}>
      <div
        className="calendar-mobile-year"
        style={{ fontSize: "x-large", color: "#fd3d38", fontWeight: "700" }}
      >
        {props.year}
      </div>
      <hr />
      {props.data.map(renderMobileMonths)}
    </div>
  );
};
