import React from "react";
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";

const TypeSelectorComponent = () => {
  return (
    <div>
      <MDBDropdown>
        <MDBDropdownToggle caret color="primary">
          Type
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

export default TypeSelectorComponent;
