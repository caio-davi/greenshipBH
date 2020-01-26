import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const TypeSelectorComponent = (props) => {
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '25vw',
  };
  const buttonStyle = {
    width: '200px',
  };

  return (
    <div style={buttonContainerStyle}>
      <MDBDropdown>
        <MDBDropdownToggle style={buttonStyle} caret color="default">
          Type
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem>{props.truckTypes[0]}</MDBDropdownItem>
          <MDBDropdownItem>{props.truckTypes[2]}</MDBDropdownItem>
          <MDBDropdownItem>{props.truckTypes[1]}</MDBDropdownItem>
        </MDBDropdownMenu>
      </MDBDropdown>
    </div>
  );
};

export default TypeSelectorComponent;
