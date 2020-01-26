import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const LocationDropdownComponent = (props) => {
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25vw',
  }
  const buttonStyle = {
    width: '180px',
  }

  return (
    <div style={buttonContainerStyle}>
      <MDBDropdown>
        <MDBDropdownToggle style={buttonStyle} caret color="primary">
          {props.title}
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>Action</MDBDropdownItem>
          <MDBDropdownItem>Another Action</MDBDropdownItem>
          <MDBDropdownItem>Something else here</MDBDropdownItem>
          <MDBDropdownItem divider />
          <MDBDropdownItem>Separated link</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default LocationDropdownComponent;
