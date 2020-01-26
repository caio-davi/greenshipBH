import React from "react";
import CompanyRowComponent from "./companyRow/companyRow";

const DashboardBodyComponent = (props) => {
  const dashboardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#AAFFAA",
    width: "82%"
  };

  const rows = () => {
    let companyRows = [];
    for(let i in props.displayedShips){
      let ship = props.displayedShips[i];
      companyRows.push(
        <CompanyRowComponent
          companyLogo={"test.jpg"}
          companyName={ship.origin.company}
          companyLocation={ship.destination.city}
          deliveryDate={ship.departureTime}
          sustainabilityScore={ship.distance+ship.duration}
      />
      )
    }
    return companyRows;
  }

  return (
    <div style={dashboardBodyStyle}>
      {rows()}
    </div>
  );
};

export default DashboardBodyComponent;
