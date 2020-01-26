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
        approved={true}
      />
      <ApprovalsRowComponent
        companyLogo={tuPath}
        companyName={'t.u.'}
        companyLocationFrom={'San Antonio, TX'}
        companyLocationTo={'Austin, TX'}
        deliveryDate={'1/25/20'}
        sustainabilityScore={'288'}
        approved={false}
      />
      <ApprovalsRowComponent
        companyLogo={bhPath}
        companyName={'Baker Hughes'}
        companyLocationFrom={'Dallas, TX'}
        companyLocationTo={'Houston, TX'}
        deliveryDate={'1/25/20'}
        sustainabilityScore={'589'}
        approved={true}
      />
    </div>
  );
};

export default ApprovalsComponent;