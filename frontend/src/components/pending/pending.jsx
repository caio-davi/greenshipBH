import React from "react";

const PendingComponent = () => {
  const pendingContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '90vh',
  };

  return (
    <div style={pendingContainerStyle}>
      PendingComponent test
    </div>
  );
};

export default PendingComponent;