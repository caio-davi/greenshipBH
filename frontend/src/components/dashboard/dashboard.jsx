import React from "react";
import DashboardSettingsPaneComponent from "./dashboardSettingsPane/dashboardSettingsPane";
import DashboardBodyComponent from "./dashboardBody/dashboardBody";

const DashboardComponent = (props) => {
  const dashboardContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '90vh',
  };

  return (
    <div style={dashboardContainerStyle}>
      <DashboardSettingsPaneComponent {...props} />
      <DashboardBodyComponent {...props} />
    </div>
  );
};

export default DashboardComponent;