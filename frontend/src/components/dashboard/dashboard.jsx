import React from "react";
import DashboardSettingsPaneComponent from "./dashboardSettingsPane/dashboardSettingsPane";
import DashboardBodyComponent from "./dashboardBody/dashboardBody";

const DashboardComponent = () => {
  const dashboardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '91.5vh',
  };

  return (
    <div style={dashboardContainerStyle}>
      <DashboardSettingsPaneComponent />
      <DashboardBodyComponent />
    </div>
  );
};

export default DashboardComponent;