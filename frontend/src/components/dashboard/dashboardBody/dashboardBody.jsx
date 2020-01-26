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
      // switch (ship.origin.company) {
      //   case ''
      // }
      companyRows.push(
        <CompanyRowComponent
          companyLogo={"test.jpg"}
          companyName={ship.owner.company}
          companyLocationFrom={ship.origin.city}
          companyLocationTo={ship.destination.city}
          deliveryDate={ship.departureTime}
          sustainabilityScore={ship.sustainabilityScore}
      />
      )
    }
    return companyRows;
  }

  return (
    <div  className="overflow-auto" style={dashboardBodyStyle}>
      {rows()}
    </div>
  );
};

export default DashboardBodyComponent;
