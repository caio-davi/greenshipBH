import React from "react";
import ApprovalsRowComponent from "./approvalsRow/approvalsRow";

const ApprovalsComponent = (props) => {
  const approvalsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100vw',
    height: '90vh',
    backgroundColor: "#E4F6F5",
    overflow: 'auto'
  };

  const tuPath = 'https://i.imgur.com/tkSy51Y.jpg';
  const tamuPath = 'https://i.imgur.com/sJgdrcz.jpg';
  const bhPath = 'https://i.imgur.com/meDIWmg.jpg';

  const rows = () => {
    let companyRows = [];
      for(let i in props.ships){
        let ship = props.ships[i];
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
          <ApprovalsRowComponent
          companyLogo={logoPath}
          companyName={ship.owner.company}
          companyLocationFrom={ship.origin.city}
          companyLocationTo={ship.destination.city}
          deliveryDate={ship.departureTime}
          sustainabilityScore={ship.sustainabilityScore}
          approved={true}
        />
        );
      }
      return companyRows;
  };

  return (
    <div style={approvalsContainerStyle}>
      {rows()}
    </div>
  );
};

export default ApprovalsComponent;