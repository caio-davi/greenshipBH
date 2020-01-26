import React from "react";
import DashboardSettingsPaneComponent from "./dashboardSettingsPane/dashboardSettingsPane";
import DashboardBodyComponent from "./dashboardBody/dashboardBody";

const DashboardComponent = (props) => {
  const dashboardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    minWidth: '100vw',
    maxWidth: '500',
    height: '91.5vh',
  };

  return (
    <div style={dashboardContainerStyle}>
      <DashboardSettingsPaneComponent {...props} />
      <DashboardBodyComponent {...props} />
    </div>
  );
};

export default DashboardComponent;