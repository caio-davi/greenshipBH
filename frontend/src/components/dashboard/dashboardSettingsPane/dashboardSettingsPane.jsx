import React from "react";
import LocationDropdownComponent from "./locationDropdown/locationDropdown";
import DateSelectorComponent from "./dateSelector/dateSelector";
import TypeSelectorComponent from "./typeSelector/typeSelector";
import WeightSelectorComponent from "./weightSelector/weightSelector";

const DashboardSettingsPaneComponent = (props) => {
  const dashboardSettingsPaneStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#EEEEEE',
    width: '18%',
  };

  return (
    <div style={dashboardSettingsPaneStyle}>
      <LocationDropdownComponent {...props} name={'from'} title={props.from === '' ? 'from':props.from} />
      <LocationDropdownComponent {...props} name={'to'} title={props.to === '' ? 'to' : props.to} />
      <DateSelectorComponent />
      <TypeSelectorComponent />
      <WeightSelectorComponent />
    </div>
  );
};

export default DashboardSettingsPaneComponent;