import React from "react";
import CompanyRowComponent from "./companyRow/companyRow";

const DashboardBodyComponent = (props) => {
  const dashboardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#E4F6F5",
    width: "82%"
  };

  const tuPath = 'https://i.imgur.com/tkSy51Y.jpg';
  const tamuPath = 'https://i.imgur.com/sJgdrcz.jpg';
  const bhPath = 'https://i.imgur.com/meDIWmg.jpg';

  const rows = () => {
    let companyRows = [];
    for(let i in props.displayedShips){
      let ship = props.displayedShips[i];
      let logoPath = '';
      switch (ship.owner.company) {
        case 't.u.': {
          logoPath = tuPath;
          break;
        }
        case 'Texas A&M University': {
          logoPath = tamuPath;
          break;
        }
        case 'Baker Hughes':
        default: {
          logoPath = bhPath
          break;
        }
      }
      companyRows.push(
        <CompanyRowComponent
          key={'ComponentRow_'+i}
          companyLogo={logoPath}
          companyName={ship.owner.company}
          companyLocationFrom={ship.origin.city}
          companyLocationTo={ship.destination.city}
          deliveryDate={ship.departureTime}
          sustainabilityScore={ship.sustainabilityScore}
          shipNumber={ship.shipNumber}
          handleSelectedShip={props.handleSelectedShip}
      />
      );
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
