import React from "react";
import PendingRowComponent from "./pendingRow/pendingRow";

const PendingComponent = () => {
  const pendingContainerStyle = {
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
    <div style={pendingContainerStyle}>
      <PendingRowComponent
        companyLogo={tamuPath}
        companyName={'Texas A&M University'}
        companyLocationFrom={'San Antonio, TX'}
        companyLocationTo={'College Station, TX'}
        deliveryDate={'1/25/20'}
        sustainabilityScore={'366'}
      />
      <PendingRowComponent
        companyLogo={tuPath}
        companyName={'t.u.'}
        companyLocationFrom={'San Antonio, TX'}
        companyLocationTo={'Austin, TX'}
        deliveryDate={'1/25/20'}
        sustainabilityScore={'288'}
      />
      <PendingRowComponent
        companyLogo={bhPath}
        companyName={'Baker Hughes'}
        companyLocationFrom={'Dallas, TX'}
        companyLocationTo={'Houston, TX'}
        deliveryDate={'1/25/20'}
        sustainabilityScore={'589'}
      />
    </div>
  );
};

export default PendingComponent;