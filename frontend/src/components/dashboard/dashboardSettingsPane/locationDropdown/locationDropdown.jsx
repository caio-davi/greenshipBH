import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const LocationDropdownComponent = (props) => {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
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
