import React from "react";
import ApprovalsRowComponent from "./approvalsRow/approvalsRow";

const ApprovalsComponent = () => {
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

  return (
    <div style={approvalsContainerStyle}>
      <ApprovalsRowComponent
        companyLogo={tamuPath}
        companyName={'Texas A&M University'}
        companyLocationFrom={'San Antonio, TX'}
        companyLocationTo={'College Station, TX'}
        deliveryDate={'1/25/20'}
        sustainabilityScore={'366'}
      />
    </div>
  );
};

export default ApprovalsComponent;